import Image from 'next/image';
import React from 'react';
import person1 from '../../../public/person1.png';
import person2 from '../../../public/person2.png';
import person3 from '../../../public/person3.png';
import person4 from '../../../public/person4.png';
import person5 from '../../../public/person5.png';
import person6 from '../../../public/person6.png';

function Section10() {
    return (
        <div className="bg-bl400 py-10">
            <div className="text-center">
                <p className="text-box" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    합류 후기
                </p>
                <h2 className="my-4" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    채용 및 인사관리를 통한 <br />
                    <span>매니저</span> 합류 후기
                </h2>
            </div>
            <div className="bg-white rounded-xl mx-7 py-5 px-6">
                <div className="mb-8" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person1} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            <span className="text-main">10대부터 주방 조리사</span>에서 신한 매니저로
                            <span className="text-sm text-bl300 block">강*우 | 30대 초반</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        10대 부터 30대초반까지 주방 조리사로 종사하며 월급이 제자리 걸음이라 신한 매니저를 지원하게
                        되었고 처음엔 N잡을 생각하고 들어왔는데 파트너와 매니저를 둘다 수 있기 때문에 신한에서{' '}
                        <span className="bg-secondary font-bold">N잡</span>으로 이제는{' '}
                        <span className="bg-secondary font-bold">큰 안정감과 시간적 + 경제적 여유를 만끽</span>하고
                        있습니다!
                    </p>
                </div>

                <div className="mb-8" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person6} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            한없이
                            <span className="text-main">어둡던 고시생활 5년</span>을 마치고
                            <span className="text-sm text-bl300 block">김*태 | 30대 중반</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        5년 정말 어둡고 미래가 보이지 않던 고시생활을 정리하고 월급 300만원을 넘기기 힘들었는데 신한
                        매니저로 입사하게 되어현재{' '}
                        <span className="bg-secondary font-bold">월 수령액의 2배 이상 수령 중</span>이라 너무{' '}
                        <span className="bg-secondary font-bold">풍족한</span> 삶을 누리고 있습니다.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person5} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            <span className="text-main">10년 동안의 영업인</span>의 불안감을 떨치고
                            <span className="text-sm text-bl300 block">홍*섭 | 20대 후반</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        10년 동안 영업인으로 살아왔지만 매월 불안정한 소득으로 미래가 불투명 했는데신한 매니저로 입사 후
                        <span className="bg-secondary font-bold">안정적인 월 소득</span>으로 인생을 설계해 나가고
                        있습니다. <span className="bg-secondary font-bold">안정감이 주는 행복</span> 너무 좋습니다
                        짱짱!!
                    </p>
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="text-box" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    합류 후기
                </p>
                <h2 className="my-4" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <span>신한 파트너스</span> 합류 후기
                </h2>
            </div>
            <div className="bg-white rounded-xl mx-7 py-5 px-6">
                <div className="mb-8" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person4} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            우리 가족
                            <span className="text-main">보험 점검</span>하고 가족끼리{' '}
                            <span className="text-main">해외여행</span>
                            <span className="text-sm text-bl300 block">최*근 | 20대 초반 학생</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        교육을 듣고 알려주시는 대로 따라 해서{' '}
                        <span className="bg-secondary font-bold">보험료도 절감</span>하고{' '}
                        <span className="bg-secondary font-bold">방학때 가족끼리 좋은 시간</span>보내고 왔어요. 부모님이
                        너무 행복해 하셨어요! 대학 동기한테 자랑했더니 자기도 하고 싶다고 하네요 ㅎㅎ
                    </p>
                </div>

                <div className="mb-8" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person3} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            한없이
                            <span className="text-main">N잡</span>으로 <span className="text-main">하루에 3시간</span>{' '}
                            너무 든든해요~
                            <span className="text-sm text-bl300 block">이*영 | 30대 중반 직장인</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        평범한 회사원으로 5시부터 8시까지 매일{' '}
                        <span className="bg-secondary font-bold">하루에 3시간</span>으로{' '}
                        <span className="bg-secondary font-bold">월 평균 100만원 소득</span>이 올라갔어요~ <br />
                        요즘 잡체인지까지 고민을 하고 있어요!!
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300">
                    <div className="flex gap-2 items-center">
                        <Image src={person2} alt="남자 사람 아이콘" width={40} height={37} />
                        <p className="text-md font-bold">
                            <span className="text-main">경력 단절 아이 엄마</span>에서 대기업에서 일할 수 있어서 감사
                            <span className="text-sm text-bl300 block">김*주 | 40대 초반 주부</span>
                        </p>
                    </div>
                    <p className="text-sm bg-bl100 p-3 rounded-sm mt-3 leading-5.5">
                        출산을 하고 어느 회사도 저를 받아주지 않았습니다.{' '}
                        <span className="bg-secondary font-bold">육아를 하면서도 월수입 100~200만원 이상 소득</span>을
                        올릴 수 있었고 내가 나의 스케쥴을 조정하면서 주도적인 삶을 살고{' '}
                        <span className="bg-secondary font-bold">하는 만큼 벌수 있는 신한파트너스</span> 너무 너무
                        좋아요!! <br />
                        경력 단절된 제가 신한이라는 대기업에서 일할 수 있어서 너무 좋아요~ 애사심이 뿜뿜!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section10;
