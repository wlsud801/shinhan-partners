import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import 'aos/dist/aos.css';

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
    openGraph: {
        title: '신한 파트너스',
        description: '목표를 향한 나의 첫 걸음, 신한 파트너스와 함께 해요',
        siteName: 'shinhan partners',
        locale: 'ko_KR',
        url: 'https://shinhan-partners.vercel.app/',
        images: {
            url: '../../public/logo.png',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s){
                                if(f.fbq)return;n=f.fbq=function(){
                                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
                            };
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '525760807127004');
                            fbq('track', 'PageView');
                        `,
                    }}
                ></script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=525760807127004&ev=PageView&noscript=1"
                    />
                </noscript>
                {/* End Meta Pixel Code */}
            </head>
            <body className={`${suit.variable} font-suit`}>
                <main className="pc:w-[500px] mob:w-full border mx-auto bg-bl100 overflow-x-hidden">{children}</main>
            </body>
        </html>
    );
}
