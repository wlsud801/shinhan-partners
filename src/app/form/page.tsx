'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import title from '../../../public/formTitle.png';
import close from '../../../public/close.png';
import note from '../../../public/note.png';
import { area } from '@/constant/region';
import { useRouter } from 'next/navigation';
import Toast from '@/components/ui/toast';

function Page() {
    const router = useRouter();
    const [open, setIsOpen] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [region1, setRegion1] = useState<keyof typeof area | ''>('');
    const [region2, setRegion2] = useState<string>('');
    const [objective, setObjective] = useState<string>('');
    const [availableTime, setAvailableTime] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [job, setJob] = useState<string>('');
    const [income, setIncome] = useState<string>('');

    console.log(open);

    const handleSubmitForm = async () => {
        try {
            // if (isLoading) return;
            if (name === '') return;
            // setIsLoading(true);
            const response = await axios.post('/api/googleSheet', {
                name: name,
                // Include other data fields if needed
            });
            console.log(response);

            // if (data.ok) return message.success('사전등록이 완료되었습니다.');
            // message.error(data.error);
        } catch (e) {
            console.log(e);
            // message.error('사전등록에 실패했습니다.');
        } finally {
            // setIsLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-[100dvh] h-[657px] relatve">
            <div className="bg-bl400 rounded-bl-3xl pt-4 px-5 pb-7">
                <div className="flex justify-between items-center">
                    <Image src={title} alt="신한 파트너스 지원서" width={135} height={22} />
                    <button>
                        <Image src={close} alt="닫기" width={17} height={17} onClick={() => setIsOpen(true)} />
                    </button>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <p className="font-bold text-md">
                        빠른 상담을 위해 <br />
                        최소한의 정보만 받고 있어요
                    </p>
                    <Image src={note} alt="닫기" width={111} height={68} onClick={() => setIsOpen(true)} />
                </div>
            </div>
            <div className="p-5">
                <label htmlFor="name" className="text-md font-bold">
                    이름
                </label>
                <input type="text" id="name" className="mb-3" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="phone" className="text-md font-bold">
                    휴대전화
                </label>
                <input
                    type="text"
                    id="phone"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="region1" className="text-md font-bold">
                    지역
                </label>
                <div className="flex gap-2 mb-3" id="region1">
                    <select
                        className="border border-gray w-1/2 py-1 px-3"
                        onChange={(e) => setRegion1(e.target.value as keyof typeof area)}
                    >
                        {Object.keys(area).map((region) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>

                    <select className="border border-gray w-1/2 py-1 px-3" onChange={(e) => setRegion2(e.target.value)}>
                        {region1 &&
                            area[region1].map((subRegion: any) => (
                                <option key={subRegion} value={subRegion}>
                                    {subRegion}
                                </option>
                            ))}
                    </select>
                </div>
                <label htmlFor="objective" className="text-md font-bold">
                    지원 분야
                </label>
                <select
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setObjective(e.target.value)}
                >
                    <option value={'파트너스'}>파트너스</option>
                    <option value={'매니저'}>매니저</option>
                </select>

                <label htmlFor="objective" className="text-md font-bold">
                    상담가능시간
                </label>
                <select
                    id="objective"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setAvailableTime(e.target.value)}
                >
                    <option value="9-10">9:00~10:00</option>
                    <option value="10-11">10:00~11:00</option>
                    <option value="11-12">11:00~12:00</option>
                    <option value="12-13">12:00~13:00</option>
                    <option value="13-14">13:00~14:00</option>
                    <option value="14-15">14:00~15:00</option>
                    <option value="15-16">15:00~16:00</option>
                    <option value="16-17">16:00~17:00</option>
                    <option value="17-18">17:00~18:00</option>
                    <option value="18-19">18:00~19:00</option>
                    <option value="19-20">19:00~20:00</option>
                    <option value="20-21">20:00~21:00</option>
                    <option value="21-22">21:00~22:00</option>
                    <option value="22-23">22:00~23:00</option>
                </select>

                <label htmlFor="age" className="text-md font-bold">
                    연령대
                </label>
                <select
                    id="age"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setAge(e.target.value)}
                >
                    <option value={10}>10대</option>
                    <option value={20}>20대</option>
                    <option value={30}>30대</option>
                    <option value={40}>40대</option>
                    <option value={50}>50대</option>
                    <option value={60}>60대</option>
                </select>

                <label htmlFor="job" className="text-md font-bold">
                    직업
                </label>
                <select
                    id="job"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setJob(e.target.value)}
                >
                    <option value={'직장인'}>직장인</option>
                    <option value={'자영업자'}>자영업자</option>
                    <option value={'주부'}>주부</option>
                    <option value={'학생'}>학생</option>
                </select>

                <label htmlFor="job" className="text-md font-bold">
                    희망소득
                </label>
                <select
                    id="job"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setJob(e.target.value)}
                >
                    <option value={'100만원 미만'}>100만원 미만</option>
                    <option value={'100만원 이상'}>100만원 이상</option>
                    <option value={'200만원 이상'}>200만원 이상</option>
                    <option value={'300만원 이상'}>300만원 이상</option>
                </select>

                <input type="checkbox" id="all" className="inline-block w-3 mr-2 mb-4 mt-5" />
                <label htmlFor="all" className="text-md">
                    약관에 전체 동의합니다.
                </label>
                <br />
                <input type="checkbox" id="personal" className="inline-block w-3 mr-2 mb-4" />
                <label htmlFor="personal" className="text-md">
                    개인정보 수집 동의 및 이용 안내 동의(필수)
                </label>
                <br />
                <input type="checkbox" id="service" className="inline-block w-3 mr-2 mb-4" />
                <label htmlFor="service" className="text-md mb-12">
                    채용상담 서비스의 정보 수신 동의(선택)
                </label>

                <button
                    onClick={() => handleSubmitForm()}
                    className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-black text-white w-full max-w-[315px] py-3 rounded-md"
                >
                    신청 완료
                </button>
            </div>
            <Toast open={open} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Page;
