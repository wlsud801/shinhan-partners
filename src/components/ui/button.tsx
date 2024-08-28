import React from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary';
    text: string;
    onClick: () => void;
    className?: string;
}

function Button({ type, text, onClick, className }: ButtonProps) {
    const style = {
        primary: 'w-full h-12 bg-black text-white rounded-lg text-md',
        secondary: 'w-full h-10 bg-blue',
    };

    return <input type="button" className={`${style[type]} ${className}`} value={text} onClick={onClick} />;
}

export default Button;
