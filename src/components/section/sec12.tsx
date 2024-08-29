'use client';
import React from 'react';
import Box from '../ui/box';
import edu from '../../../public/edu.png';
import Image from 'next/image';
import Button from '../ui/button';

function Section12() {
    return (
        <div className="bg-bl100 py-7">
            <Box
                type="green"
                content={
                    <div className="p-7 text-center">
                        <p className="green-text-box">HOT</p>
                        <h2 className="mt-3">
                            <span>하루 30분</span>만 공부해도
                            <br />
                            충분히 합격할 수 있어요!
                        </h2>
                        <Image src={edu} alt="신한유" width={216} height={190} className="m-auto my-4" />
                        <Button type="green" text="30분 공부하고 합격하러 가기" onClick={() => console.log('d')} />
                    </div>
                }
            />
        </div>
    );
}

export default Section12;
