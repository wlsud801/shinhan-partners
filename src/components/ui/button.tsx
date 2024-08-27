import React from 'react';

function Button(variant: 'primary' | 'secondary', text: string) {
    const style = {
        primary: 'w-full h-10 bg-orange',
        secondary: 'w-full h-10 bg-blue',
    };

    return <input type="button" className={style[variant]} value={text} />;
}

export default Button;
