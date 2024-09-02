'use client';
import Button from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

function Page() {
    const router = useRouter();
    return (
        <div className="bg-white min-h-[100dvh] text-center px-7 flex flex-col justify-center">
            <p className="text-lg font-bold">
                <span className="text-xl block mb-4">🎉</span>
                신한파트너스 지원 완료!! <br /> 요청하신 시간대에 전화드릴게요
            </p>
            <Button type="primary" text="홈으로 돌아가기" onClick={() => router.push('/')} className="mt-12" />
        </div>
    );
}

export default Page;
