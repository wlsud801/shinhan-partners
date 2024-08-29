'use client';
import React from 'react';
import Button from '../ui/button';
import join from '../../../public/last.png';
import Image from 'next/image';

function Section13() {
    return (
        <div className="bg-gradient-to-t to-[#F5FAFF] from-[#C6CEFF] pt-12 text-center">
            <p className="blue-text-box my-4">목표를 향한 나의 첫 걸음</p>
            <h2>
                <span>신한 파트너스</span>에<br /> 합류해 볼까요?
            </h2>
            <Button type="primary" text="바로 지원하기" onClick={() => console.log('d')} className="w-3/4 my-7" />
            <Image src={join} alt="산" />
        </div>
    );
}

export default Section13;
