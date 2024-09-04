'use client';
import BackHeader from '@/components/layout/backHeader';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import coin from '../../../../public/coinClock.png';
import Image from 'next/image';
import Box from '@/components/ui/box';
import AOS from 'aos';

function Page() {
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
            <div className="text-center w-3/4 min-w-[285px] mx-auto mt-12">
                <h2
                    className="text-left mb-10"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="300"
                >
                    한 명을 채용하면 <br />
                    <span>얼마의 추가 소득</span>이 발생하나요?
                </h2>
                <div className="relative h-20 my-4 w-full flex items-center justify-center">
                    <Box
                        type="blue"
                        content={
                            <div className="text-sm">
                                <p className="text-[14px] font-normal w-[30vw] max-w-[170px] py-4 px-6 text-white">
                                    1명 채용 시 <br />
                                    <span className="text-[20px] font-bold">100만원</span>
                                </p>
                            </div>
                        }
                        className="absolute left-[8%]"
                        data-aos="flip-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="450"
                    />
                    <div
                        className="bg-secondary rounded-full text-md py-3 px-[10px] z-10 border-2 border-main"
                        data-aos="flip-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="450"
                    >
                        매월
                    </div>

                    <Box
                        type="blue"
                        content={
                            <div className="text-sm">
                                <p className="text-[14px] font-normal w-[30vw] max-w-[170px] py-4 px-6 text-white">
                                    2명 채용 시<br />
                                    <span className="text-[20px] font-bold">300만원</span>
                                </p>
                            </div>
                        }
                        className="absolute right-[8%]"
                        data-aos="flip-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="450"
                    />
                </div>

                <div
                    className="border border-white rounded-lg overflow-hidden w-full m-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="550"
                >
                    <p className="text-sm bg-white py-1">추가혜택</p>
                    <div className="flex items-center justify-center px-3 py-3 gap-3 bg-[rgba(255,255,255,0.2)]">
                        <p className="text-sm font-bold">
                            <span className="text-main">나의 팀원들을 육성</span>해서
                            <br />
                            <span className="text-main">육성 관리 수당</span>도 매 월 받을 수 있어요!
                            <br /> (기간 제한X)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
