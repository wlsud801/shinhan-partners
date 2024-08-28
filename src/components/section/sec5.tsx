'use client';

import React from 'react';
import Box from '../ui/box';
import graph from '../../../public/graph.svg';
import Image from 'next/image';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';

function Section5() {
    const router = useRouter();
    return (
        <div className="bg-bl100">
            <Box
                type="white"
                content={
                    <div className="text-center px-5 py-7">
                        <p className="green-text-box">HOT</p>
                        <p className="font-bold mt-4">
                            가장 많이 절감하신 분은 <br />
                            <span className="text-main">보험료 43%</span>를 아꼈어요
                        </p>
                        <Image src={graph} alt="보험료 절감 그래프" className="my-2" />
                        <p className="text-md font-bold">보험료 절약과 동시에 소득도 챙겼어요</p>
                        <p className="text-sm mt-1 mb-5 text-bl300">나의 예상 소득을 확인할 수 있어요!</p>
                        <Button type="primary" text="예상 소득 계산해보기" onClick={() => router.push('/income')} />
                    </div>
                }
                className="mx-10 my-8"
            />
        </div>
    );
}

export default Section5;
