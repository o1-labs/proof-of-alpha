import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.svg';

const Header = () => {
  return (
    <header className="">
      {/* <div className="3xl:pr-10 md:ml-18 absolute ml-36 mt-5 w-20 items-center  md:mt-5 md:w-24 xl:ml-28  xl:mt-12 xl:h-32 xl:w-auto"> */}
      <div className="absolute ml-36 mt-5 w-20 items-center md:ml-0 md:mt-5  md:w-24 xl:mt-12  xl:h-32 xl:w-auto 3xl:pr-10">
        <Image src={ZKLogo} alt="zk logo" />
      </div>
    </header>
  );
};

export default Header;
