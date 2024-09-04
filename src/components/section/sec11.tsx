import React from 'react';
import note from '../../../public/note.png';
import Image from 'next/image';
import Box from '../ui/box';

function Section11() {
    return (
        <div id="education" className="bg-white text-center py-16">
            <p className="text-box mb-5">시험, 교육 합격 시</p>
            <h2>
                <span>교육비</span> 안내
            </h2>
            <Image
                src={note}
                alt="노트"
                width={215}
                height={132}
                className="m-auto my-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="300"
            />
            <div className="relative h-20 w-full">
                <Box
                    type="blue"
                    content={
                        <div className="text-sm">
                            <p className="text-sm font-normal min-w-[150px] py-4 px-6 text-white">
                                교육비 + 활동 지원비 <br />
                                <span className="text-md font-bold">450만원</span>
                            </p>
                        </div>
                    }
                    className="absolute left-1/2 -ml-[155px]"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                />

                <div
                    className="bg-white rounded-full absolute left-1/2 -ml-[22px] top-4 text-md font-bold p-3 z-10"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                >
                    택 1
                </div>
                <Box
                    type="blue"
                    content={
                        <div className="text-sm">
                            <p className="text-sm font-normal min-w-[150px] py-4 px-6 text-white">
                                Only 교육비 <br />
                                <span className="text-md font-bold">150만원</span>
                            </p>
                        </div>
                    }
                    className="absolute right-1/2 -mr-[160px]"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="700"
                />
            </div>
            <p
                className="text-bl300 text-sm mt-2"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="200"
            >
                * 자세한 내용은 사전 미팅 후 QnA로 진행됩니다.
            </p>
        </div>
    );
}

export default Section11;
