'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '../ui/box';
import emoji1 from '../../../public/emoji1.png';
import emoji2 from '../../../public/emoji2.png';
import emoji3 from '../../../public/emoji3.png';
import emoji4 from '../../../public/emoji4.png';
import emoji5 from '../../../public/emoji5.png';
import emoji6 from '../../../public/emoji6.png';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

function Section3() {
    const [dragging, setDragging] = useState<boolean>(false);
    const videoRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        // Intersection Observer 설정
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 뷰포트에 들어오면 재생 (contentWindow가 있는 경우에만)
                    if (videoRef.current && videoRef.current.contentWindow) {
                        videoRef.current.contentWindow.postMessage(
                            '{"event":"command","func":"playVideo","args":""}',
                            '*'
                        );
                    }
                } else {
                    // 뷰포트를 벗어나면 일시 정지 (contentWindow가 있는 경우에만)
                    if (videoRef.current && videoRef.current.contentWindow) {
                        videoRef.current.contentWindow.postMessage(
                            '{"event":"command","func":"pauseVideo","args":""}',
                            '*'
                        );
                    }
                }
            },
            { threshold: 0.5 } // 50% 이상 보일 때 트리거
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleBeforeChange = useCallback(() => {
        setDragging(true);
    }, []);
    const handleAfterChange = useCallback((i: number) => {
        setDragging(false);
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        variableWidth: true,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
    };
    return (
        <div className="bg-bl100 pt-5 pb-12 mb-5">
            <p
                className="text-lg font-bold pb-2 text-center"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="300"
            >
                유튜브 내용 작성 예정
            </p>
            <div
                className="relative w-[calc(100%-40px)] px-4 pb-[177.78%] bg-bl200 mx-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="350"
            >
                <iframe
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/esBQhXy796o?rel=0&autoplay=1"
                    title="신한 파트너스 & 매니저 '야 너두 할 수 있어'"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: 'none' }}
                ></iframe>
            </div>

            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="400"
            >
                <Slider {...settings} className="mt-5">
                    <div className="ml-5">
                        <div className="p-5 w-[260px] h-[245px] bg-white rounded-3xl border border-bl400 ">
                            <div className="flex gap-2 mb-4">
                                <Image src={emoji1} alt="20대 여성 직장인" width={48} height={42} />
                                <div>
                                    <p className="personal-box mb-1">이*영 30대 중반 직장인 | 파트너스</p>
                                    <p className="text-sm font-extrabold text-main">추가소득 +931,000원</p>
                                </div>
                            </div>

                            <p className="text-sm">
                                평범한 회사원으로 5시부터 8시까지
                                <br /> 매일 하루에 3시간으로
                                <br /> 월 평균 100만원 소득이 올라갔어요~
                                <br /> 요즘 잡체인지까지 고민을 하고 있어요!!
                                <br /> 과연 나도 할 수 있을까 생각했는데... 멘토멘티로 너무 친절하게 잘 알려주셨습니다!!
                                <br />
                                감사드려요!!
                            </p>
                        </div>
                    </div>
                    {/* <Box type="white" content={} className="" /> */}
                    <Box
                        type="white"
                        content={
                            <div className="p-5  w-[260px] h-[245px]">
                                <div className="flex gap-2 mb-4">
                                    <Image src={emoji2} alt="20대 여성 직장인" width={48} height={42} />
                                    <div>
                                        <p className="personal-box mb-1">강*우 30대 초반 무직 | 매니저 </p>
                                        <p className="text-sm font-extrabold text-main">추가소득 + 3,010,000원</p>
                                    </div>
                                </div>

                                <p className="text-sm">
                                    10대 부터 30대초반까지 주방 조리사로 종사하며 월급이 제자리 걸음이라
                                    <br /> 신한 매니저를 지원하게 되었고 처음엔 N잡을 생각하고 들어왔는데 파트너와
                                    매니저를
                                    <br />
                                    둘다 수 있기 때문에 신한에서 N잡으로 <br />
                                    이제는 큰 안정감과 시간적 + 경제적 여유를 만끽하고 있습니다!
                                </p>
                            </div>
                        }
                        className=""
                    />
                    <Box
                        type="white"
                        content={
                            <div className="p-5  w-[260px] h-[245px]">
                                <div className="flex gap-2 mb-4">
                                    <Image src={emoji3} alt="20대 여성 직장인" width={48} height={42} />
                                    <div>
                                        <p className="personal-box mb-1">김*주 40대 초반 주부 | 파트너스</p>
                                        <p className="text-sm font-extrabold text-main">추가소득 +763,000원</p>
                                    </div>
                                </div>

                                <p className="text-sm">
                                    출산을 하고 어느 회사도 저를 받아주지 않았습니다.
                                    <br /> 하지만 신한 파트너스에서는 육아를 하며 직접 스케쥴을 조정하면서 주도적인 삶을
                                    살고 하는 만큼 벌수 있어서 너무 너무 좋아요!!
                                    <br /> 경력 단절된 제가 신한이라는 대기업에서 일할 수 있어서 너무 좋아요~ <br />
                                    애사심이 뿜뿜!!
                                </p>
                            </div>
                        }
                        className=""
                    />
                    <Box
                        type="white"
                        content={
                            <div className="p-5  w-[260px] h-[245px]">
                                <div className="flex gap-2 mb-4">
                                    <Image src={emoji4} alt="20대 여성 직장인" width={48} height={42} />
                                    <div>
                                        <p className="personal-box mb-1">최*근 20대 초반 학생 | 파트너스</p>
                                        <p className="text-sm font-extrabold text-main">추가소득 +1,803,000원</p>
                                    </div>
                                </div>

                                <p className="text-sm">
                                    교육을 듣고 알려주시는 대로 따라 해서
                                    <br /> 보험료도 절감하고 방학때 가족끼리 좋은 시간보내고 왔어요.
                                    <br /> 부모님이 너무 행복해 하셨고, 대학 동기한테 자랑했더니 자기도 하고 싶다고
                                    하네요~ <br />
                                    우리 가족 보험을 내가 점검하니
                                    <br /> 누구보다 우리 가족에 딱맞게 설계할 수 있었어요!!
                                </p>
                            </div>
                        }
                        className=""
                    />
                    <Box
                        type="white"
                        content={
                            <div className="p-5  w-[260px] h-[245px]">
                                <div className="flex gap-2 mb-4">
                                    <Image src={emoji5} alt="20대 여성 직장인" width={48} height={42} />
                                    <div>
                                        <p className="personal-box mb-1">김*태 30대 중반 | 매니저</p>
                                        <p className="text-sm font-extrabold text-main">추가소득 +1,110,300원</p>
                                    </div>
                                </div>

                                <p className="text-sm">
                                    5년의 어둡고 미래가 보이지 않던 고시생활을 정리하고 월급 300만원을 넘기기 힘들었는데
                                    <br /> 신한 매니저로 입사하게 되어 현재 월 수령액이 2배 이상 수령중이라 너무 풍족한
                                    삶을 누리고 있습니다. <br />
                                    일단해보자는 마인드로 새로운 삶을 살고 있습니다. 신한 최고!!
                                </p>
                            </div>
                        }
                        className=""
                    />
                    <Box
                        type="white"
                        content={
                            <div className="p-5  w-[260px] h-[245px]">
                                <div className="flex gap-2 mb-4">
                                    <Image src={emoji6} alt="20대 여성 직장인" width={48} height={42} />
                                    <div>
                                        <p className="personal-box mb-1">홍*섭 20대 후반 | 매니저</p>
                                        <p className="text-sm font-extrabold text-main">추가소득 + 1,630,540원</p>
                                    </div>
                                </div>

                                <p className="text-sm">
                                    10년 동안 영업인으로 살아왔지만
                                    <br /> 매월 불안정한 소득으로 미래가 불투명 했는데
                                    <br /> 신한 매니저로 입사 후 안정적인 월 소득으로
                                    <br /> 인생을 설계해 나가고 있습니다. <br />
                                    안정감이 주는 행복 너무 좋습니다 <br />
                                    팀원이 꾸준히 늘어감에 따라 보람, 직업만족도가 수직 상승하고 있어요!! 최고 짱짱!!
                                </p>
                            </div>
                        }
                        className=""
                    />
                </Slider>
            </div>
        </div>
    );
}

export default Section3;
