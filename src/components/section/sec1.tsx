'use client';

import React, { useEffect } from 'react';
import pig from '../../../public/pig.png';
import man from '../../../public/man.png';
import Image from 'next/image';
import Box from '../ui/box';
import Link from 'next/link';
import Slider from 'react-slick';

function Section1() {
    const settings = {
        className: 'slider variable-width mt-5',
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slideToShow: 1,
        swipeToSlide: true,
        vertical: true,
    };
    return (
        <div
            id="main"
            className="bg-gradient-to-t to-gradientfrom from-gradientto px-5 pt-28 pb-7 text-lg rounded-b-3xl"
        >
            <p
                className="text-center font-medium"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="300"
            >
                한 달 1시간 투자해서
                <span className="block font-oneshinhan font-extrabold pt-3 text-xl text-main">128만원 + 교육비</span>
            </p>
            <Image
                src={pig}
                alt="돼지저금통"
                className="mx-auto mb-5"
                width={323}
                height={189}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="400"
            />
            <Slider {...settings}>
                <Box
                    type="transparent"
                    content={
                        <div className="py-4 px-5  flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 1기</span>
                                    <span className="block text-md font-bold">강*우 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-lg inline-block h-8 leading-8">
                                <span className="text-main font-extrabold text-xl">402</span>만원
                            </p>
                        </div>
                    }
                    className="my-1 mr-1"
                />
                <Box
                    type="transparent"
                    content={
                        <div className="py-4 px-4 flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 4기</span>
                                    <span className="block text-md font-bold">이*민 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-lg inline-block h-8 leading-8">
                                <span className="text-main font-extrabold text-xl">198</span>만원
                            </p>
                        </div>
                    }
                    className="my-1"
                />
                <Box
                    type="transparent"
                    content={
                        <div className="py-4 px-5 flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 5기</span>
                                    <span className="block text-md font-bold">박*훈 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-lg inline-block h-8 leading-8">
                                <span className="text-main font-extrabold text-xl">359</span>만원
                            </p>
                        </div>
                    }
                    className="my-1"
                />
                <Box
                    type="transparent"
                    content={
                        <div className="py-4 px-5 flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 6기</span>
                                    <span className="block text-md font-bold">전*환 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-lg inline-block h-8 leading-8">
                                <span className="text-main font-extrabold text-xl">301</span>만원
                            </p>
                        </div>
                    }
                    className="my-1"
                />
                <Box
                    type="transparent"
                    content={
                        <div className="py-4 px-5 flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 6기</span>
                                    <span className="block text-md font-bold">최*우 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-lg inline-block h-8 leading-8">
                                <span className="text-main font-extrabold text-xl">266</span>만원
                            </p>
                        </div>
                    }
                    className="my-1"
                />
            </Slider>
            <Link
                href="#education"
                title="교육비 알아보기 >"
                className="block text-[14px] underline font-medium text-center my-7"
            >
                교육비는 얼마를 받을 수 있나요? {'>'}
            </Link>
        </div>
    );
}

export default Section1;
