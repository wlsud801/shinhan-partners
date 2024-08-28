import React from 'react';
import Box from '../ui/box';
import Image from 'next/image';
import clock from '../../../public/clock.svg';

function Section2() {
    return (
        <div>
            <div className="bg-bl100 pt-12 py-8 px-10">
                <Box
                    type="white"
                    content={
                        <div className="text-center py-8">
                            <p className="text-box mb-3">신한 파트너스</p>
                            <p className="mb-3 font-bold">
                                정말 한 달에
                                <br />
                                <span className="text-main">1시간</span>이면 되나요?
                            </p>
                            <Image src={clock} alt="1시간 시계" className="m-auto mb-5" width={211} height={122} />
                            <p className="text-md font-bold mb-5">네, 물론이에요!</p>
                            <p className="text-sm text-bl300">
                                내 보험 점검부터 계약을 체결하는 데 <br />
                                <span className="text-main font-bold">평균적으로 1시간</span>이 걸려요
                            </p>
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default Section2;
