import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const suit = localFont({
    src: '../fonts/SUIT-Variable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-suit',
});

const oneShinhan = localFont({
    src: [
        { path: '../fonts/OneShinhanLight.otf', weight: '300' },
        { path: '../fonts/OneShinhanMedium.otf', weight: '500' },
        { path: '../fonts/OneShinhanBold.otf', weight: '700' },
    ],
});

export const metadata: Metadata = {
    title: '신한 파트너스',
    description: '목표를 향한 나의 첫 걸음, 신한 파트너스와 함께 해요',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${suit.variable} font-suit`}>
                <div className="pc:w-[500px] mob:w-full h-[100dvh] border mx-auto border-black">{children}</div>
            </body>
        </html>
    );
}
