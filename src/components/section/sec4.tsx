'use client';
import React from 'react';
import moneyBag from '../../../public/coinBag.png';
import company from '../../../public/company.png';
import home from '../../../public/home.png';
import business from '../../../public/business.png';
import etc from '../../../public/etc.png';
import Image from 'next/image';
import Slider from 'react-slick';
import Box from '../ui/box';

function Section4() {
    const settings = {
        className: 'mt-5',
        dots: false,
        infinite: false,
        speed: 500,
        slideToShow: 1,
        swipeToSlide: true,
        variableWidth: true,
    };
    return (
        <div className="py-14 text-center bg-white">
            <p
                className="text-box mb-5"
                data-aos="fade-up"
                // data-aos-easing="ease-out-cubic"
                // data-aos-anchor-placement="center-bottom"
                // data-aos-duration="200"
            >
                신한 파트너스
            </p>
            <h2>
                <span className="text-main">평균소득</span>이 얼마인가요?
            </h2>
            <Image
                src={moneyBag}
                alt="동전과 주머니"
                className="m-auto my-3"
                width={295}
                height={168}
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="300"
            />
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="3500"
            >
                <p className="text-md font-bold">최소 128만원 ~ 411만원</p>
                <p className="text-sm text-bl300">* 교육비 별도</p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="400"
            >
                <Slider {...settings}>
                    <div className="w-[182px] ml-5">
                        <div className="flex justify-between text-white px-6 py-5 w-[162px] bg-main rounded-xl">
                            <div>
                                <Image src={company} alt="서류가방" width={38} height={38} />
                                <p className="text-sm mt-2">직장인</p>
                            </div>
                            <p className="text-md font-semibold translate-y-11">120만원</p>
                        </div>
                    </div>
                    <Box
                        type="blue"
                        content={
                            <div className="flex justify-between text-white px-6 py-5 w-[162px]">
                                <div>
                                    <Image src={home} alt="집" width={38} height={38} />
                                    <p className="text-sm mt-2">주부</p>
                                </div>
                                <p className="text-md font-semibold translate-y-11">116만원</p>
                            </div>
                        }
                        className="w-[162px]"
                    />
                    <Box
                        type="blue"
                        content={
                            <div className="flex justify-between text-white px-6 py-5 w-[162px]">
                                <div>
                                    <Image src={business} alt="후라이팬" width={38} height={38} />
                                    <p className="text-sm mt-2">자영업자</p>
                                </div>
                                <p className="text-md font-semibold translate-y-11">120만원</p>
                            </div>
                        }
                        className="w-[162px]"
                    />
                    <Box
                        type="blue"
                        content={
                            <div className="flex justify-between text-white px-6 py-5 w-[162px]">
                                <div>
                                    <Image src={etc} alt="익명의 사람" width={38} height={38} />
                                    <p className="text-sm mt-2">기타</p>
                                </div>
                                <p className="text-md font-semibold translate-y-11">120만원</p>
                            </div>
                        }
                        className="w-[162px]"
                    />
                </Slider>
            </div>
        </div>
    );
}

export default Section4;
