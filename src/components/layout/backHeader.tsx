'use client';
import React from 'react';
import back from '../../../public/Back.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Box from '../ui/box';
import glass from '../../../public/glass.png';

function BackHeader() {
    const router = useRouter();
    return (
        <button onClick={() => router.back()}>
            <Image src={back} alt="뒤로가기" width={51} height={51} />
        </button>
    );
}

export default BackHeader;
