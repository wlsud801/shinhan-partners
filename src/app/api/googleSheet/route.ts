import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextRequest, NextResponse } from 'next/server';

export async function loadGoogleDoc() {
    try {
        const formattedKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const serviceAccountAuth = new JWT({
            key: formattedKey,
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOCUMENT_ID || '', serviceAccountAuth);
        await doc.loadInfo();
        return doc;
    } catch (error) {
        console.log(error);
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const content = await req.json();
    if (req.method === 'POST') {
        try {
            // const doc = await loadGoogleDoc();
            const formattedKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
            const serviceAccountAuth = new JWT({
                key: formattedKey,
                email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });
            const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOCUMENT_ID || '', serviceAccountAuth);
            await doc.loadInfo();

            if (!doc) return NextResponse.json({ ok: false, error: res });
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
            return NextResponse.json({ ok: true, message: res.body });
        } catch (error) {
            console.log(error);
            return NextResponse.json({ error: 'Internal server error' });
        }
    }
}
