import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import menu from '../../../public/hamburger.svg';

function Header() {
    return (
        <div className="bg-white w-full flex align-middle justify-between px-3 py-2">
            <Image src={logo} alt="신한 파트너스 로고" width={173} height={31} style={{ objectFit: 'contain' }} />
            <Image src={menu} alt="메뉴 아이콘" width={27} height={27} />
        </div>
    );
}

export default Header;
