'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '../ui/box';
import smile from '../../../public/smile.png';
import Image from 'next/image';

function Section3() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
    };
    return (
        <div className="bg-bl100 pt-5 pb-12 mb-5">
            <p className="text-lg font-bold pb-2 text-center">유튜브 내용 작성 예정</p>
            <div className="bg-bl200 h-48 text-center mx-5">유튜브 영상</div>
            <Slider {...settings} className="mt-5 ">
                <Box
                    type="white"
                    content={
                        <div className="p-5 w-[220px]">
                            <div className="flex gap-2 mb-4">
                                <Image src={smile} alt="20대 여성 직장인" width={48} height={42} />
                                <div>
                                    <p className="personal-box mb-1">20대 여성 직장인 | 김*희</p>
                                    <p className="text-sm font-extrabold text-main">추가 소득 +914,000원</p>
                                </div>
                            </div>

                            <p className="text-sm">
                                학생 때 부모님이 들어놓은 보험이 있는데 매달 20만 원씩 나가고 있어요. 그래서 보험
                                리모델링을 알아봤는데 남을 못 믿어서 그냥 제가 해보기로 했어요! 휴.. 진작할 걸
                                그랬어요!! 쓸데없는 보장 다 없애고 보험료도 확 줄고 부수익까지 얻으니까 본업보다 여기에
                                더 관심이 가더라고요? 원래 제 보험 점검만 하려고 했는데 부모님 보험도 한 번 점검해
                                보려고요.
                            </p>
                        </div>
                    }
                    className="ml-5"
                />
                <Box
                    type="white"
                    content={
                        <div className="p-5 w-[220px]">
                            <div className="flex gap-2 mb-4">
                                <Image src={smile} alt="20대 여성 직장인" width={48} height={42} />
                                <div>
                                    <p className="personal-box mb-1">20대 여성 직장인 | 김*희</p>
                                    <p className="text-sm font-extrabold text-main">추가 소득 +914,000원</p>
                                </div>
                            </div>

                            <p className="text-sm">
                                학생 때 부모님이 들어놓은 보험이 있는데 매달 20만 원씩 나가고 있어요. 그래서 보험
                                리모델링을 알아봤는데 남을 못 믿어서 그냥 제가 해보기로 했어요! 휴.. 진작할 걸
                                그랬어요!! 쓸데없는 보장 다 없애고 보험료도 확 줄고 부수익까지 얻으니까 본업보다 여기에
                                더 관심이 가더라고요? 원래 제 보험 점검만 하려고 했는데 부모님 보험도 한 번 점검해
                                보려고요.
                            </p>
                        </div>
                    }
                    className="ml-2"
                />
                <Box
                    type="white"
                    content={
                        <div className="p-5 w-[220px]">
                            <div className="flex gap-2 mb-4">
                                <Image src={smile} alt="20대 여성 직장인" width={48} height={42} />
                                <div>
                                    <p className="personal-box mb-1">20대 여성 직장인 | 김*희</p>
                                    <p className="text-sm font-extrabold text-main">추가 소득 +914,000원</p>
                                </div>
                            </div>

                            <p className="text-sm">
                                학생 때 부모님이 들어놓은 보험이 있는데 매달 20만 원씩 나가고 있어요. 그래서 보험
                                리모델링을 알아봤는데 남을 못 믿어서 그냥 제가 해보기로 했어요! 휴.. 진작할 걸
                                그랬어요!! 쓸데없는 보장 다 없애고 보험료도 확 줄고 부수익까지 얻으니까 본업보다 여기에
                                더 관심이 가더라고요? 원래 제 보험 점검만 하려고 했는데 부모님 보험도 한 번 점검해
                                보려고요.
                            </p>
                        </div>
                    }
                    className="ml-2 mr-5"
                />
            </Slider>
        </div>
    );
}

export default Section3;
