import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.png';

import React from 'react';

function Header() {
  return (
    <header className="py-18 text-white">
      {/* container to hold logo and 0x address */}
      <div className="flex justify-center relative ">
        <div className="">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
        {/* placeholder for users mina address */}
        <div className="flex  mt-8  text-custom-gray-light text-xl tracking-xlwidest leading-6 absolute right-40 ">
          <div>0xABCD...1234</div>
          <div className=" bg-custom-green w-4 h-4 mt-1  rounded-full ml-3"></div>
        </div>
        {/*  */}
      </div>
    </header>
  );
}

export default Header;
