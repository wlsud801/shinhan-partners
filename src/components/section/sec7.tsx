import React from 'react';
import people from '../../../public/peoplegraph.png';
import kneel from '../../../public/kneel.png';
import Image from 'next/image';

function Section7() {
    return (
        <div className="bg-white py-10 px-12 text-center">
            <p className="text-box">신한 파트너스</p>
            <h2 className="my-3">
                <span className="text-main">누구나</span> 할 수 있나요?
            </h2>
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="700">
                <Image src={people} alt="그래프 위의 사람들" width={236} height={180} className="m-auto" />
            </div>
            <p
                className="font-bold text-md my-6"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="750"
            >
                직장인, 주부, 자영업자 등<br />
                누구든지 시작할 수 있어요
            </p>
            <div
                className="border border-gray-100 rounded-xl overflow-hidden w-full m-auto"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
            >
                <p className="text-sm bg-gray-100 py-2">죄송하지만 아래에 해당하는 분은 지원이 불가해요.</p>
                <div className="flex items-center justify-center px-3 py-4 gap-3">
                    <Image src={kneel} alt="무릎꿇은 사람" width={34} height={34} className="inline-block" />
                    <ul className="text-sm text-left leading-4">
                        <li>
                            1. 신용점수 550점 미만 <span className="bg-gray-100 p-1 rounded-sm text-xs">KCB기준</span>
                        </li>
                        <li>2. 개인회생, 파산 진행 중인 사람</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section7;
