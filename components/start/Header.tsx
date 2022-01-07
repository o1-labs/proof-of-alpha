import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.png';

const Header = () => {
  return (
    // <Link href="/" passHref>
    <header className="">
      <div className="ml-30 pt-20 h-auto w-32 relative">
        <Image src={ZKLogo} alt="zk logo" />
      </div>
    </header>
    // </Link>
  );
};

export default Header;
