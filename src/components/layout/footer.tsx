import React from 'react';
import footerLogo from '../../../public/footerLogo.svg';
import Image from 'next/image';
function Footer() {
    return (
        <div className="bg-main px-3 py-5">
            <Image src={footerLogo} alt="신한 라이프 로고" width="58" height="20" />
            <p>
                <span className="block text-white">서울특별시 강남구 테헤란로 318</span>
                <span className="block text-white">사업자등록번호 104-81-28992</span>
                <span className="block text-white">문의 : shlife.pjh@outlook.com</span>
            </p>
        </div>
    );
}

export default Footer;
