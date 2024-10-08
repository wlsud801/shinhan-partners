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
import Link from 'next/link';
import PermModal from '@/components/ui/modal';

function Page() {
    const router = useRouter();
    const [open, setIsOpen] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const applyTime = year + '/' + month + '/' + date + ' ' + hour + ':' + minutes + ':' + seconds;

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [region1, setRegion1] = useState<keyof typeof area | ''>('');
    const [region2, setRegion2] = useState<string>('');
    const [objective, setObjective] = useState<string>('');
    const [availableTime, setAvailableTime] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [job, setJob] = useState<string>('');
    const [income, setIncome] = useState<string>('');
    const [error, setError] = useState(false);

    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [personalChecked, setPersonalChecked] = useState<boolean>(false);
    const [serviceChecked, setServiceChecked] = useState<boolean>(false);
    const handleSubmitForm = async () => {
        if (
            !name ||
            !phone ||
            region1 === '' ||
            region2 === '' ||
            objective === 'none' ||
            availableTime === 'none' ||
            age === 'none' ||
            job === 'none' ||
            income === 'none'
        ) {
            setError(true);
            console.log('err');
            return;
        }

        setError(false);

        try {
            await axios.post(
                '/api/post',
                {
                    body: {
                        date: applyTime,
                        name: name,
                        phone: phone,
                        region: region1,
                        subRegion: region2,
                        objective: objective,
                        availableTime: availableTime,
                        age: age,
                        job: job,
                        income: income,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            router.push('/form/done');
        } catch (error) {
            console.log(error);
        }
    };

    const handleAllChecked = () => {
        if (allChecked === true) {
            setAllChecked(false);
            setPersonalChecked(false);
            setServiceChecked(false);
        } else {
            setAllChecked(true);
            setPersonalChecked(true);
            setServiceChecked(true);
        }
    };

    return (
        <div className="bg-white relative">
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
                    이름 <span className={error && !name ? 'inline-block text-red-500 text-sm' : 'hidden'}>*필수</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="phone" className="text-md font-bold">
                    휴대전화{' '}
                    <span className={error && !phone ? 'inline-block text-red-500 text-sm' : 'hidden'}>*필수</span>
                </label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="mb-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="region1" className="text-md font-bold">
                    현재 거주지{' '}
                    <span className={error && region1 === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>
                        *필수
                    </span>
                </label>
                <div className="flex gap-2 mb-3" id="region1">
                    <select
                        className="border border-gray w-1/2 py-1 px-3"
                        onChange={(e) => setRegion1(e.target.value as keyof typeof area)}
                    >
                        <option value="">시/도 선택</option>
                        {Object.keys(area).map((region) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>

                    <select className="border border-gray w-1/2 py-1 px-3" onChange={(e) => setRegion2(e.target.value)}>
                        <option value="">구/군 선택</option>
                        {region1 &&
                            area[region1].map((subRegion: any) => (
                                <option key={subRegion} value={subRegion}>
                                    {subRegion}
                                </option>
                            ))}
                    </select>
                </div>
                <label htmlFor="objective" className="text-md font-bold">
                    지원 분야{' '}
                    <span className={error && objective === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>
                        *필수
                    </span>
                </label>
                <select
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setObjective(e.target.value)}
                >
                    <option value="">선택</option>
                    <option value={'파트너스'}>파트너스</option>
                    <option value={'매니저'}>매니저</option>
                </select>

                <label htmlFor="availableTime" className="text-md font-bold">
                    상담가능시간{' '}
                    <span className={error && availableTime === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>
                        *필수
                    </span>
                </label>
                <select
                    id="availableTime"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setAvailableTime(e.target.value)}
                >
                    <option value="">선택</option>
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
                    연령대{' '}
                    <span className={error && age === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>*필수</span>
                </label>
                <select
                    id="age"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setAge(e.target.value)}
                >
                    <option value="">선택</option>
                    <option value={20}>20대</option>
                    <option value={30}>30대</option>
                    <option value={40}>40대</option>
                    <option value={50}>50대</option>
                    <option value={60}>60대</option>
                </select>

                <label htmlFor="job" className="text-md font-bold">
                    직업{' '}
                    <span className={error && job === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>*필수</span>
                </label>
                <select
                    id="job"
                    className="border border-gray w-full py-1 px-3 mb-3"
                    onChange={(e) => setJob(e.target.value)}
                >
                    <option value="">선택</option>
                    <option value={'직장인'}>직장인</option>
                    <option value={'자영업자'}>자영업자</option>
                    <option value={'주부'}>주부</option>
                    <option value={'학생'}>학생</option>
                    <option value={'무직'}>무직</option>
                </select>

                <label htmlFor="income" className="text-md font-bold">
                    희망소득{' '}
                    <span className={error && income === '' ? 'inline-block text-red-500 text-sm' : 'hidden'}>
                        *필수
                    </span>
                </label>
                <select
                    id="income"
                    className="border border-gray w-full py-1 px-3 mb-7"
                    onChange={(e) => setIncome(e.target.value)}
                >
                    <option value="">선택</option>
                    <option value={'100만원 미만'}>100만원 미만</option>
                    <option value={'100만원 이상'}>100만원 이상</option>
                    <option value={'200만원 이상'}>200만원 이상</option>
                    <option value={'300만원 이상'}>300만원 이상</option>
                </select>

                <div className="flex items-center justify-between">
                    <div>
                        <input
                            type="checkbox"
                            id="personal"
                            className="inline-block w-5 h-5 translate-y-1 mr-2"
                            checked={personalChecked}
                            onChange={() => setPersonalChecked(!personalChecked)}
                        />
                        <label htmlFor="personal" id="personalCheck" />
                        <label htmlFor="personal" className="text-sm">
                            개인정보 수집 동의 및 이용 안내 동의 <span className="text-main">(필수)</span>
                        </label>
                    </div>
                    <button className="text-sm px-3 translate-y-[2px]" onClick={() => setModalOpen(true)}>
                        {'>'}
                    </button>
                </div>

                <div className="border border-main rounded-md py-2 text-center text-sm mt-5 mb-3">
                    보험영업상 보험설계사를 모집하는 것으로
                    <br />
                    정규 또는 비정규직 채용과는 무관함
                </div>

                <button
                    type="submit"
                    onClick={() => handleSubmitForm()}
                    className={`${
                        personalChecked === true ? 'bg-black' : 'bg-gray-500'
                    }  text-white w-full max-w-[460px] mx-auto mt-7 py-3 rounded-md`}
                    disabled={personalChecked === true ? false : true}
                >
                    신청 완료
                </button>
            </div>
            <Toast open={open} setIsOpen={setIsOpen} />
            <PermModal
                open={modalOpen}
                setIsOpen={setModalOpen}
                personalChecked={personalChecked}
                setPersonalChecked={setPersonalChecked}
            />
        </div>
    );
}

export default Page;
