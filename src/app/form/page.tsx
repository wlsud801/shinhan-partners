'use client';

import googleSheet from '@/api/googleSheet';
import axios from 'axios';
import React, { useState } from 'react';

function page() {
    const [name, setName] = useState<string>('');
    const handleSubmitForm = async () => {
        try {
            // if (isLoading) return;
            if (name === '') return;
            // setIsLoading(true);
            const { data } = await axios.post('/api/googleSheet', {
                name: name,
            });
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
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button onClick={() => handleSubmitForm()}>저장</button>
        </div>
    );
}

export default page;
