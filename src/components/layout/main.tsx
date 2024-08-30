'use client';
import React, { useEffect } from 'react';
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

function Main() {
    useEffect(() => {
        AOS.init();
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
            <Section13 />
            <div
                onClick={() => console.log('d')}
                className="w-4/5 h-10 sticky bottom-20 -translate-y-20 z-20 mx-auto bg-blue-500 text-white text-center cursor-pointer"
            >
                바로 지원하기
            </div>
        </div>
    );
}

export default Main;
