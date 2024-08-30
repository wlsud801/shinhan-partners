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
        autoplaySpeed: 3000,
        slideToShow: 1,
        swipeToSlide: true,
        vertical: true,
    };
    return (
        <div className="bg-gradient-to-t to-gradientfrom from-gradientto px-5 pt-12 pb-7 rounded-b-3xl">
            <p
                className="text-center font-medium"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="300"
            >
                한 달 1시간 투자해서
                <span className="block font-oneshinhan font-bold pt-3 text-xl text-main">128만원 + 교육비</span>
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
                        <div className="py-4 px-5 flex justify-between items-center">
                            <div className="flex justify-between gap-3 items-center">
                                <Image src={man} alt="사람 아이콘" width={56} height={56} />
                                <p>
                                    <span className="block text-sm text-bl300">신한파트너스 6기</span>
                                    <span className="block text-md font-bold">박*훈 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-xl inline-block h-8 leading-8">
                                <span className="text-main font-bold">212</span>만원
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
                                    <span className="block text-md font-bold">박*훈 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-xl inline-block h-8 leading-8">
                                <span className="text-main font-bold">212</span>만원
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
                                    <span className="block text-md font-bold">박*훈 님</span>
                                </p>
                            </div>
                            <p className="bg-secondary text-xl inline-block h-8 leading-8">
                                <span className="text-main font-bold">212</span>만원
                            </p>
                        </div>
                    }
                    className="my-1"
                />
            </Slider>
            <Link href="#education" title="교육비 알아보기 >" className="block font-medium text-center my-7">
                교육비 알아보기 {'>'}
            </Link>
        </div>
    );
}

export default Section1;
