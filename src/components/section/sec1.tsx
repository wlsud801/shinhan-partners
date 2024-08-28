import React from 'react';
import pig from '../../../public/pig.png';
import man from '../../../public/man.png';
import Image from 'next/image';
import Box from '../ui/box';
import Link from 'next/link';

function Section1() {
    return (
        <div className="bg-gradient-to-t to-gradientfrom from-gradientto px-5 pt-12 pb-7 rounded-b-3xl">
            <p className="text-center font-medium">
                한 달 1시간 투자해서
                <span className="block font-oneshinhan font-extrabold  text-xl text-main">128만원 + 교육비</span>
            </p>
            <Image src={pig} alt="돼지저금통" className="mx-auto mb-5" width={323} height={189} />
            <Box
                type="transparent"
                content={
                    <div className="py-3 px-5 flex justify-between items-center">
                        <div className="flex justify-between gap-3 items-center">
                            <Image src={man} alt="사람 아이콘" width={56} height={56} />
                            <p>
                                <span className="block text-sm text-bl300">신한파트너스 6기</span>
                                <span className="block text-md font-bold">박*훈 님</span>
                            </p>
                        </div>
                        <p className="bg-secondary font-bold text-main inline-block h-7">212만원</p>
                    </div>
                }
            />
            <Link href="" title="교육비 알아보기 >" className="block text-center mt-7 mb-9">
                교육비 알아보기
            </Link>
        </div>
    );
}

export default Section1;
