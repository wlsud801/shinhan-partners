import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import pig from '../../../public/coinPig.png';

interface ToastProps {
    open: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Toast({ open, setIsOpen }: ToastProps) {
    const router = useRouter();
    return (
        <Modal isOpen={open} ariaHideApp={false}>
            <div className="pl-5 pr-2 pt-3 text-white flex items-center justify-between">
                <p className="font-normal">
                    추가소득 <br />
                    <span className="text-xl text-main bg-secondary font-bold">158만원의 기회</span> <br />
                    <span className="text-xl">놓치실 건가요?</span>
                </p>
                <Image src={pig} alt="코인 돼지저금통" width={170} height={145} className="-translate-y-5" />
            </div>
            <div className="px-3 pb-4">
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-black rounded-xl text-center py-3 text-md text-white w-full"
                >
                    상담 신청 계속하기
                </button>
            </div>
            <button onClick={() => router.push('/')} className="w-full bg-white py-3">
                <p className="text-md font-bold">닫기</p>
            </button>
        </Modal>
    );
}

export default Toast;
