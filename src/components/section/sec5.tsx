'use client';
import React from 'react';
import Box from '../ui/box';
import graph from '../../../public/graph.svg';
import Image from 'next/image';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';

function Ssection5() {
    const router = useRouter();
    return (
        <div className="bg-bl100">
            <Box
                type="white"
                content={
                    <div className="text-center p-5">
                        <p className="green-text-box">HOT</p>
                        <p>
                            가장 많이 절감하신 분은 <br />
                            보험료 43%를 아꼈어요
                        </p>
                        <Image src={graph} alt="보험료 절감 그래프" />
                        <p>보험료 절약과 동시에 소득도 챙겼어요</p>
                        <p>나의 예상 소득을 확인할 수 있어요!</p>
                        <Button type="primary" text="예상 소득 계산해보기" onClick={() => router.push('/income')} />
                    </div>
                }
                className="mx-10 my-8"
            />
        </div>
    );
}

export default Ssection5;
