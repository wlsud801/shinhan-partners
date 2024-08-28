import React from 'react';
import highfive from '../../../public/highfive.png';
import Image from 'next/image';
import Box from '../ui/box';

function Section8() {
    return (
        <div className="bg-white py-10 text-center">
            <p className="text-box">신한 파트너스</p>
            <p className="font-bold my-3">
                <span className="text-main">업무 파트</span>는 두 가지가 있어요!
            </p>
            <Image src={highfive} alt="하이파이브하는 손과 신한 로고" width={311} height={160} className="m-auto" />
            <div className="flex gap-2 w-full justify-center mt-7 mb-2">
                <Box
                    type="blue"
                    content={
                        <div className="relative">
                            <p className="absolute bg-white border-4 text-main -top-5 left-1/2 -translate-x-1/2 border-main rounded-full font-extrabold text-md w-12 h-12 leading-10">
                                01
                            </p>
                            <p className="text-md text-white pt-9 pb-5 ">
                                신한 파트너스로
                                <br />
                                합류하기
                            </p>
                        </div>
                    }
                    className="w-[164px]"
                />
                <Box
                    type="blue"
                    content={
                        <div className="relative">
                            <p className="absolute bg-white text-main border-4 -top-5 left-1/2 -translate-x-1/2 border-main rounded-full font-extrabold text-md w-12 h-12 leading-10">
                                02
                            </p>
                            <p className="text-md text-white pt-9 pb-5 ">
                                채용 및 인사관리를 통한
                                <br />
                                매니저로 합류하기
                            </p>
                        </div>
                    }
                    className="w-[164px]"
                />
            </div>
        </div>
    );
}

export default Section8;
