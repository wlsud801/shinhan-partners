import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextApiRequest, NextApiResponse } from 'next';

async function loadGoogleDoc() {
    try {
        const formattedKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        const serviceAccountAuth = new JWT({
            key: formattedKey,
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', serviceAccountAuth);
        await doc.loadInfo();
        return doc;
    } catch (error) {
        console.log(error);
    }
}

export default async function googleSheet(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const doc = await loadGoogleDoc();
            if (!doc) return res.status(200).json({ ok: false, error: '사전등록에 실패했습니다.' });
            let sheet = doc.sheetsByTitle['신한파트너스'];
            if (!sheet) {
                sheet = await doc.addSheet({
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
            const rows = await sheet.getRows();
            const isRegistered = rows.some((row) => row.get('phone') === req.body.phone);
            if (isRegistered) {
                return res.status(200).json({ ok: false, error: '이미 등록된 연락처입니다.' });
            }

            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
            const koreaTimeDiff = 9 * 60 * 60 * 1000;

            await sheet.addRow({
                email: req.body.email,
                createdAt: new Date(utc + koreaTimeDiff).toLocaleString(),
                name: req.body.name,
                phone: req.body.phone,
                region: req.body.region,
                subRegion: req.body.subRegion,
                objective: req.body.objective,
                availableTime: req.body.availableTime,
                age: req.body.age,
                job: req.body.job,
                income: req.body.income,
            });
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}
