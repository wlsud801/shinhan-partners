import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                suit: ['var(--font-suit)'],
                oneshinhan: ['var(--font-oneshinhan)'],
            },
            fontSize: {
                sm: '10px',
                md: '14px',
                lg: '18px',
            },
            screens: {
                mob: '0px',
                pc: '600px',
            },
            colors: {
                main: '#0046FF',
                bl100: '#F5FAFF',
                bl200: '#DDEEFF',
                bl300: '#788FBD',
                secondary: '#CCFF00',
                gr100: '#F9FFE2',
                gradientfrom: '#C8EFFF',
                gradientto: '#C5CCFF',
            },
        },
    },
    plugins: [],
};
export default config;
