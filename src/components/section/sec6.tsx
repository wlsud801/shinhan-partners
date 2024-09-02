import React from 'react';
import Box from '../ui/box';
import Image from 'next/image';
import higherGraph from '../../../public/highergraph.png';

function Section6() {
    return (
        <div className="bg-bl100">
            <Box
                type="white"
                content={
                    <div className="text-center px-5 py-7">
                        <p
                            className="text-box"
                            // data-aos="fade-up"
                            // data-aos-easing="ease-out-cubic"
                            // data-aos-duration="400"
                        >
                            추가 소득을 위한 쉬운 방법
                        </p>
                        <p
                            className="font-bold mt-4"
                            // data-aos="fade-up"
                            // data-aos-easing="ease-out-cubic"
                            // data-aos-duration="450"
                        >
                            <span className="text-main">이것</span>만 따라하세요!
                        </p>
                        <Image
                            src={higherGraph}
                            alt="보험료 절감 그래프"
                            className="m-auto my-2"
                            width={160}
                            height={156}
                            data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="500"
                        />
                        <ol className="flex flex-col gap-4 items-center my-3 w-full">
                            <li
                                className="flex gap-4 items-center w-[218px]"
                                data-aos="fade-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="500"
                            >
                                <Box
                                    type="blue"
                                    content={<p className="text-white text-sm px-5 leading-7">STEP1</p>}
                                    className="rounded-md h-7"
                                />
                                <p className="text-md text-left font-bold">
                                    <span className="text-sm text-bl300 block font-normal">상담을 신청하면</span>
                                    전문 멘토가 배정돼요
                                </p>
                            </li>
                            <li
                                className="flex gap-4 items-center  justify-items-start"
                                data-aos="fade-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="550"
                            >
                                <Box
                                    type="blue"
                                    content={<p className="text-white text-sm px-5 leading-7">STEP2</p>}
                                    className="rounded-md h-7"
                                />
                                <p className="text-md text-left font-bold">
                                    <span className="text-sm text-bl300 block font-normal">운전면허 취득 수준의</span>
                                    가벼운 시험을 보게 돼요
                                </p>
                            </li>
                            <li
                                className="flex gap-4 items-center  w-[218px]"
                                data-aos="fade-in"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="600"
                            >
                                <Box
                                    type="blue"
                                    content={<p className="text-white text-sm px-5 leading-7">STEP3</p>}
                                    className="rounded-md h-7"
                                />
                                <p className="text-md text-left font-bold">
                                    <span className="text-sm text-bl300 block font-normal">내 보험만 절감해도</span>
                                    추가 소득을 얻게 돼요
                                </p>
                            </li>
                        </ol>
                    </div>
                }
                className="mx-10 my-8"
            />
        </div>
    );
}

export default Section6;
