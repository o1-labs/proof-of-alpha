import Image from 'next/image';

import ZKLogo from '../../public/assets/common/zk-logo.png';

const Header = () => {
  return (
    <header className="">
      {/* container to hold logo and 0x address */}

      <div className="flex justify-center items-center md:py-5 2xl:py-9 relative ">
        <div className="md:w-20 2xl:w-28">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
        {/* placeholder for users mina address */}
        <div className="flex flex-col justify-end">
          <div className="flex  mt-8  text-custom-gray-light md:text-base 2xl:text-xl tracking-xlwidest leading-6 absolute md:right-20 2xl:right-40 ">
            <div>0xABCD...1234</div>
            <div className=" bg-custom-green w-4 h-4 mt-1  rounded-full ml-3"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
