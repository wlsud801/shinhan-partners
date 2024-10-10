import { NextResponse } from 'next/server';
import { connectDB } from '../../utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: Request, res: NextApiResponse) {
    const content = await req.json();
    console.log(content.body);
    if (req.method === 'POST') {
        if (content !== undefined) {
            try {
                const db = (await connectDB).db('application');
                let result = await db.collection('지원자').insertOne(content.body);
                return NextResponse.json({ message: '지원자가 성공적으로 저장되었습니다.', id: result.insertedId });
            } catch (error) {
                console.log(error);
                return NextResponse.json({ error: '지원자 등록에 실패하였습니다.' }, { status: 500 });
            }
        }
        return NextResponse.json({ error: '내용을 입력해주세요' }, { status: 500 });
    }
    return res;
}
