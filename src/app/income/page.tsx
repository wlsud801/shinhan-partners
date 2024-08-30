'use client';
import BackHeader from '@/components/layout/backHeader';
import React from 'react';
import glass from '../../../public/glass.png';
import paper from '../../../public/paper.png';
import manager from '../../../public/manager.png';
import Image from 'next/image';
import Box from '@/components/ui/box';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();
    return (
        <div className="w-full bg-white min-h-[100dvh]">
            <div className="bg-bl200 rounded-bl-3xl">
                <BackHeader />
                <h2 className="p-10">
                    <span>어떤 방법</span>으로 <br />
                    소득을 얻고 싶으세요?
                </h2>
            </div>
            <div className="p-5">
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={glass} alt="돋보기" width={47} height={47} />
                            <p className="text-md font-bold w-[calc(100%-90px)]">내 보험을 점검해 볼래요</p>
                            <p>{'>'}</p>
                        </div>
                    }
                    className="px-4 py-3 mb-4 cursor-pointer"
                    onClick={() => router.push('/income/my')}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={paper} alt="돋보기" width={47} height={47} />
                            <p className="text-md font-bold w-[calc(100%-90px)]">보험계약을 직접 해볼래요</p>
                            <p>{'>'}</p>
                        </div>
                    }
                    className="px-4 py-3 mb-4 cursor-pointer"
                    onClick={() => router.push('/income/insure')}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={manager} alt="돋보기" width={47} height={47} />
                            <p className="text-md font-bold w-[calc(100%-90px)]">인사 채용을 통해 매니저를 해볼래요</p>
                            <p>{'>'}</p>
                        </div>
                    }
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => router.push('/income/manager')}
                />
            </div>
        </div>
    );
}

export default Page;
