import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextRequest, NextResponse } from 'next/server';

export const loadGoogleDoc = async () => {
    try {
        const formattedKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!formattedKey) {
            throw new Error('private key is missing');
        }

        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
            throw new Error('Google service account email is missing.');
        }

        if (!process.env.GOOGLE_DOCUMENT_ID) {
            throw new Error('Google document ID is missing.');
        }

        const serviceAccountAuth = new JWT({
            key: formattedKey,
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // GoogleSpreadsheet 인스턴스를 생성합니다.
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOCUMENT_ID || '', serviceAccountAuth);

        // 문서 정보를 불러오는 단계에서 오류 발생 가능성을 확인합니다.
        await doc.loadInfo();
        return doc;
    } catch (error: any) {
        console.error('Error in loadGoogleDoc:', error.message);
        throw error; // 에러가 발생하면 상위 함수로 전달
    }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    const content = await req.json();
    if (req.method === 'POST') {
        try {
            const doc = await loadGoogleDoc();
            if (!doc) return NextResponse.json({ ok: false, error: '등록에 실패하였습니다.', sub: doc });
            let sheet = doc?.sheetsByTitle['신한파트너스'];
            if (!sheet) {
                sheet = await doc?.addSheet({
                    headerValues: [
                        'createdAt',
                        'name',
                        'phone',
                        'region',
                        'subRegion',
                        'objective',
                        'availableTime',
                        'age',
                        'job',
                        'income',
                    ],
                    title: '신한파트너스',
                });
            }
            const rows = await sheet?.getRows();
            const isRegistered = rows?.some((row) => row.get('phone') === content.body.phone);
            if (isRegistered) {
                return NextResponse.json({ ok: false, error: '이미 등록된 연락처입니다.' });
            }

            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
            const koreaTimeDiff = 9 * 60 * 60 * 1000;

            await sheet?.addRow({
                email: content.body.email,
                createdAt: new Date(utc + koreaTimeDiff).toLocaleString(),
                name: content.body.name,
                phone: content.body.phone,
                region: content.body.region,
                subRegion: content.body.subRegion,
                objective: content.body.objective,
                availableTime: content.body.availableTime,
                age: content.body.age,
                job: content.body.job,
                income: content.body.income,
            });
            return NextResponse.json({ ok: true });
        } catch (error: any) {
            console.log(error);
            return NextResponse.json({ error: error.message });
        }
    }
};
