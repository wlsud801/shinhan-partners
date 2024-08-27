import React, { ReactNode } from 'react';

interface BoxProps {
    type: 'transparent' | 'white';
    content: ReactNode;
    className?: string;
}

function Box({ type, content, className }: BoxProps) {
    const style = {
        transparent: 'bg-wh50 rounded-lg border border-white',
        white: 'bg-white rounded-xl border border-bl400',
    };
    return <div className={`${style[type]} ${className}`}>{content}</div>;
}

export default Box;
