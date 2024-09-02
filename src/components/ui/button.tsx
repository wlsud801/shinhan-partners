import React from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'green';
    text: string;
    onClick: () => void;
    className?: string;
}

function Button({ type, text, onClick, className, ...props }: ButtonProps) {
    const style = {
        primary: 'w-full h-12 bg-black text-white rounded-lg text-md',
        secondary: 'w-full h-10 bg-blue',
        green: 'w-full h-14 bg-secondary rounded-xl text-lg font-semibold',
    };

    return <input type="button" className={`${style[type]} ${className}`} value={text} onClick={onClick} {...props} />;
}

export default Button;
