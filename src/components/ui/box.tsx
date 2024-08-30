import React, { ReactNode } from 'react';

interface BoxProps {
    type: 'transparent' | 'white' | 'blue' | 'green' | 'gray';
    content: ReactNode;
    className?: string;
    onClick?: () => void;
}

function Box({ type, content, className, ...props }: BoxProps) {
    const style = {
        transparent: 'bg-wh50 rounded-lg border border-white',
        white: 'bg-white rounded-3xl border border-bl400',
        blue: 'bg-main rounded-2xl',
        green: 'bg-gr100 border border-secondary rounded-2xl mx-7',
        gray: 'bg-[#F6F6F6] rounded-xl',
    };
    return (
        <div className={`${style[type]} ${className}`} {...props}>
            {content}
        </div>
    );
}

export default Box;
