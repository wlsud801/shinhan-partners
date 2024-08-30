import React from 'react';
import note from '../../../public/note.png';
import Image from 'next/image';
import Box from '../ui/box';

function Section11() {
    return (
        <div id="education" className="bg-white text-center py-10">
            <p className="text-box mb-5">시험, 교육 합격 시</p>
            <h2>
                <span>교육비</span> 안내
            </h2>
            <Image src={note} alt="노트" width={215} height={132} className="m-auto my-5" />
            <div className="relative h-20">
                <Box
                    type="blue"
                    content={
                        <div className="text-sm">
                            <p className="text-md font-normal py-4 px-6 text-white">
                                교육비 + 활동 지원비 <br />
                                450만원
                            </p>
                        </div>
                    }
                    className="absolute left-10"
                />

                <div className="bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-4 text-md p-3 z-10">
                    택 1
                </div>
                <Box
                    type="blue"
                    content={
                        <div className="text-sm">
                            <p className="text-md font-normal w-[167px] py-4 px-6 text-white">
                                Only 교육비 <br />
                                150만원
                            </p>
                        </div>
                    }
                    className="absolute right-10"
                />
            </div>
            <p className="text-bl300 text-sm mt-2">* 자세한 내용은 사전 미팅 후 QnA로 진행됩니다.</p>
        </div>
    );
}

export default Section11;
