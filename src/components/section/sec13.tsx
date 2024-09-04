'use client';
import React, { ReactElement, forwardRef } from 'react';
import Button from '../ui/button';
import join from '../../../public/last.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Section13 = forwardRef<HTMLDivElement, {}>(function Section13(props, ref) {
    const router = useRouter();
    return (
        <div ref={ref} className="bg-gradient-to-t to-[#F5FAFF] from-[#C6CEFF] pt-12 text-center">
            <p
                className="blue-text-box my-4"
                // data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="300"
            >
                목표를 향한 나의 첫 걸음
            </p>
            <h2
            // data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-offset="350"
            >
                <span>신한 파트너스</span>에<br /> 합류해 볼까요?
            </h2>
            <div
                onClick={() => router.push('/form')}
                className={`w-[90%] py-4 rounded-xl max-w-[423px] mx-auto bg-black mt-4 text-white text-center cursor-pointer`}
                data-aos="fade-in"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="500"
            >
                바로 지원하기
            </div>
            <Image src={join} alt="산" />
        </div>
    );
});

export default Section13;
