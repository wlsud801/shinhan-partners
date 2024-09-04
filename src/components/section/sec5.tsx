'use client';

import React from 'react';
import Box from '../ui/box';
import graph from '../../../public/graph.svg';
import arrow from '../../../public/arrow.png';
import bgLine from '../../../public/bg-line.png';
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
                        <h2 className="font-bold mt-4">
                            가장 많이 절감하신 분은 <br />
                            <span className="text-main">보험료 43%</span>를 아꼈어요
                        </h2>
                        <div className="relative w-[100%] h-[134px] my-4 overflow-hidden">
                            <Image
                                src={bgLine}
                                alt="그래프 라인 배경"
                                className="absolute left-1/2 -translate-x-[50%] pb-3 border-b-2 border-[#C6D2E8]"
                                width={201}
                                height={132}
                            />
                            <div
                                className="w-[70px] h-[132px] bg-bl200 absolute bottom-0 left-[60px] rounded-t-xl"
                                data-aos-duration="500"
                                data-aos="zoom-in-up"
                            >
                                <p
                                    className="h-full leading-[132px] text-sm text-bl300"
                                    data-aos-duration="300"
                                    data-aos="fadeIn"
                                >
                                    50만원
                                </p>
                            </div>
                            <Image
                                src={arrow}
                                alt="그래프 화살표"
                                className="absolute top-0 right-[60px]"
                                width={68}
                                height={50}
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="400"
                                data-aos="zoom-out-down"
                            />
                            <div
                                className="w-[70px] h-[78px] bg-gradient-to-t to-main from-[#96FFF4] absolute bottom-0 right-[60px] rounded-t-xl"
                                data-aos-duration="500"
                                data-aos="zoom-in-up"
                            >
                                <p
                                    className="h-full leading-[78px] text-sm text-white"
                                    data-aos-duration="300"
                                    data-aos="fadeIn"
                                >
                                    27만원
                                </p>
                            </div>
                        </div>

                        <p
                            className="text-md font-bold"
                            // data-aos="fade-up"
                            // data-aos-easing="ease-out-cubic"
                            // data-aos-duration="400"
                        >
                            보험료 절약과 동시에 소득도 챙겼어요
                        </p>
                        <p
                            className="text-sm mt-1 mb-5 text-bl300"
                            // data-aos="fade-up"
                            // data-aos-easing="ease-out-cubic"
                            // data-aos-duration="400"
                        >
                            나의 예상 소득을 확인할 수 있어요!
                        </p>
                        <div
                        // data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="400"
                        >
                            <Button type="primary" text="예상 소득 계산해보기" onClick={() => router.push('/income')} />
                        </div>
                    </div>
                }
                className="mx-10 my-8"
            />
        </div>
    );
}

export default Section5;
