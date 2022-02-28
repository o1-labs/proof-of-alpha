import Image from 'next/image';

import ZKLogo from '../../public/assets/common/zk-logo.png';

const Header = () => {
  return (
    <header className="">
      {/* container to hold logo and 0x address */}

      <div className="relative flex items-center justify-center md:py-5 2xl:py-9 ">
        <div className="md:w-20 2xl:w-28">
          <Image loader={({ src }) => src} src={ZKLogo} alt="zk logo" />
        </div>
        {/* placeholder for users mina address */}
        <div className="flex flex-col justify-end">
          <div className="text-custom-gray-light  tracking-xlwidest  absolute mt-8 flex leading-6 md:right-20 md:text-base 2xl:right-40 2xl:text-xl ">
            <div>0xABCD...1234</div>
            <div className=" bg-custom-green mt-1 ml-3 h-4  w-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
