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
                신한 파트너스가 된다면
                <br />
                <span>한달에 얼마나 활동</span>할 수 있나요?
            </h2>
            <div className="m-5">
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">6시간 이상 본업만큼 할 수 있어요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4  cursor-pointer"
                    onClick={() => router.push(`/income/insure/${1}`)}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">3시간 이상 많이 할 수 있어요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4 cursor-pointer"
                    onClick={() => router.push(`/income/insure/${2}`)}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">1~2시간 적당히 가능해요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4  cursor-pointer"
                    onClick={() => router.push(`/income/insure/${3}`)}
                />
                <Box
                    type="gray"
                    content={
                        <div className="flex items-center justify-between">
                            <Image src={check} alt="체크박스" width={30} height={30} />
                            <p className="text-md font-bold w-[calc(100%-50px)]">1시간 미만 많이는 못할 것 같아요</p>
                        </div>
                    }
                    className="px-4 py-4 mb-4  cursor-pointer"
                    onClick={() => router.push(`/income/insure/${4}`)}
                />
            </div>
        </div>
    );
}

export default page;
