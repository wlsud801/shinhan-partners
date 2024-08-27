import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.svg';
import menu from '../../../public/hamburger.svg';

function Header() {
    return (
        <div className="bg-white w-full h-[51px] flex align-middle justify-between px-3">
            <Image src={logo} alt="신한 파트너스 로고" width="173" height="31" />
            <Image src={menu} alt="메뉴 아이콘" width="27" height="27" />
        </div>
    );
}

export default Header;
