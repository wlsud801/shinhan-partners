'use client';
import BackHeader from '@/components/layout/backHeader';
import Box from '@/components/ui/box';
import Image from 'next/image';
import React from 'react';
import check from '../../../../public/default-check.png';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();
    return (
        <div className="min-h-[100dvh]">
            <BackHeader />
            <h2 className="p-10">
                지금 가입되어 있는
                <br />
                <span>월 보험료</span>가 얼마인가요?
            </h2>
            <div className="m-5">
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">30만 원 이상, 많이 내는 것 같아요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4  cursor-pointer"
                    onClick={() => router.push(`/income/my/${1}`)}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">10~20만 원, 적당히 내는 것 같아요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4 cursor-pointer"
                    onClick={() => router.push(`/income/my/${2}`)}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">10만 원 미만, 조금 내는 것 같아요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4  cursor-pointer"
                    onClick={() => router.push(`/income/my/${3}`)}
                />
            </div>
        </div>
    );
}

export default page;
