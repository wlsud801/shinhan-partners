import React from 'react';
import Box from '../ui/box';
import circus from '../../../public/circus.png';
import Image from 'next/image';

function Section9() {
    return (
        <div className="bg-bl100 mx-9 mt-9 pb-24 relative">
            <Box
                type="white"
                content={
                    <div
                        className="text-center py-9"
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-offset="500"
                    >
                        <p className="font-bold text-md">
                            활동 중인
                            <span className="text-main"> 파트너스</span> 현황
                        </p>
                        <p className="text-sm mt-1 mb-5 text-bl300">이미 많은 분들이 함께하고 있어요!</p>
                        <ul className="flex justify-center w-full">
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">직장인</span>412명
                                </p>
                            </li>
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">주부</span>570명
                                </p>
                            </li>
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">자영업자</span>299명
                                </p>
                            </li>
                            <li className="text-center px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">기타</span>219명
                                </p>
                            </li>
                        </ul>
                        <hr className="my-5" />
                        <p className="font-bold text-md mt-4">
                            활동 중인
                            <span className="text-main"> 매니저</span> 현황
                        </p>
                        <p className="text-sm mt-1 mb-5 text-bl300">이미 많은 분들이 함께하고 있어요!</p>
                        <ul className="flex justify-center w-full">
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">직장인</span>210명
                                </p>
                            </li>
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">주부</span>665명
                                </p>
                            </li>
                            <li className="text-center border-r border-gray-300 px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">자영업자</span>516명
                                </p>
                            </li>
                            <li className="text-center px-5">
                                <p className="font-bold text-md">
                                    <span className="block text-bl300 text-sm font-normal">기타</span>402명
                                </p>
                            </li>
                        </ul>
                    </div>
                }
            />
            <div
                className="absolute bottom-0 left-16 w-[218px] h-[152px]"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="400"
            >
                <Image src={circus} alt="서커스 하는 사람" width={218} height={152} />
            </div>
        </div>
    );
}

export default Section9;
