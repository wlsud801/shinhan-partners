'use client';
import BackHeader from '@/components/layout/backHeader';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import coin from '../../../../../public/coinBag.png';
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

    function calc(id: any) {
        if (id === '1') {
            min = 250;
            max = 350;
        } else if (id === '2') {
            min = 160;
            max = 250;
        } else if (id === '3') {
            min = 50;
            max = 70;
        }
        return [min, max];
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
                    alt="코인 주머니"
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
                    * 가입 조건에 따라 예상 소득 금액이 달라질 수 있어요
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
                            <span className="text-main">추가 소득</span>은 물론,
                            <span className="text-main">보험료도 절감</span>할 수 있어요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
