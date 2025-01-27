'use client';
import React, { useEffect, useRef, useState } from 'react';
import Section1 from '../section/sec1';
import Section2 from '../section/sec2';
import Section3 from '../section/sec3';
import Section4 from '../section/sec4';
import Section5 from '../section/sec5';
import Section6 from '../section/sec6';
import Section7 from '../section/sec7';
import Section8 from '../section/sec8';
import Section9 from '../section/sec9';
import Section10 from '../section/sec10';
import Section11 from '../section/sec11';
import Section12 from '../section/sec12';
import Section13 from '../section/sec13';
import AOS from 'aos';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import topBtn from '../../../public/topbtn.png';
import Image from 'next/image';
import Link from 'next/link';

function Main() {
    useEffect(() => {
        AOS.init();
    });
    const router = useRouter();

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div className="relative">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 ref={ref} />
{/*             <div
                onClick={() => router.push('/form')}
                className={`${
                    inView === true ? 'hidden' : 'block'
                } w-[90%] py-3 rounded-xl max-w-[460px] text-bold fixed bottom-10 left-1/2 -translate-x-1/2 z-20 bg-main text-white text-center cursor-pointer`}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
                <b>바로 지원하기</b>
            </div> */}
            <Link href={'#top'} className="fixed bottom-24 pc:left-1/2 pc:translate-x-[180px] mob:right-4">
                <Image src={topBtn} alt="위로가기 버튼" width={52} height={52} />
            </Link>
        </div>
    );
}

export default Main;
