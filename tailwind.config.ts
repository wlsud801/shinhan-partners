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
                xs: '6px',
                sm: '12px',
                md: '16px',
                lg: '20px',
                xl: '28px',
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
                bl400: '#D1E9FE',
                secondary: '#CCFF00',
                gr100: '#F9FFE2',
                gradientfrom: '#C8EFFF',
                gradientto: '#C5CCFF',
                wh50: 'rgba(255,255,255,0.6)',
            },
        },
    },
    plugins: [],
};
export default config;
