'use client';
import BackHeader from '@/components/layout/backHeader';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import coin from '../../../../../public/coinClock.png';
import Image from 'next/image';
import Box from '@/components/ui/box';
import AOS from 'aos';

function page() {
    useEffect(() => {
        AOS.init();
    });

    const params = useParams();
    const id = params.id;
    let min = 0;
    let max = 0;
    let contract = '';

    function calc(id: any) {
        if (id === '1') {
            min = 250;
            max = 350;
            contract = '20~30';
        } else if (id === '2') {
            min = 190;
            max = 220;
            contract = '15~25';
        } else if (id === '3') {
            min = 120;
            max = 180;
            contract = '10~20';
        } else if (id === '4') {
            min = 50;
            max = 70;
            contract = '5~10';
        }
        return [min, max, contract];
    }
    return (
        <div className="bg-bl400 min-h-[100dvh] relative">
            <BackHeader />
            <div className="text-center w-3/4 min-w-[285px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <p
                    className="blue-bg-text-box"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="400"
                >
                    나의 예상 소득
                </p>
                <Image
                    src={coin}
                    alt="코인 시계"
                    width={295}
                    height={168}
                    className="m-auto my-7"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="450"
                />
                <div
                    className="flex gap-2 items-center justify-center"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="450"
                >
                    <Box
                        type="transparent"
                        content={<p className="text-main text-[34px] font-extrabold">{calc(id)[0]}</p>}
                        className=" px-2"
                    />
                    <p className="font-bold">만원 ~ </p>
                    <Box
                        type="transparent"
                        content={<p className="text-main text-[34px] font-extrabold">{calc(id)[1]}</p>}
                        className=" px-2"
                    />
                    <p className="font-bold">만원</p>
                </div>
                <p
                    className="text-sm text-bl300 my-4"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="500"
                >
                    예상되는 계약 금액은 {calc(id)[2]}만원이에요
                </p>

                <div
                    className="border border-white rounded-lg overflow-hidden w-full m-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="550"
                >
                    <p className="text-sm bg-white py-1">추가혜택</p>
                    <div className="flex items-center justify-center px-3 py-3 gap-3 bg-[rgba(255,255,255,0.2)]">
                        <p className="text-sm font-bold">
                            <span className="text-main">파트너스 활동 실적</span>에 따라
                            <span className="text-main">경품</span>도 얻을 수 있어요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
