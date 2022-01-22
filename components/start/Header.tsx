import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.png';

const Header = () => {
  return (
    // <header className="">
    //   <div className="ml-30 pt-20 h-auto w-32 relative">
    //     <Image src={ZKLogo} alt="zk logo" />
    //   </div>
    // </header>
    <header className="">
      <div className="ml-36 mt-5 items-center w-20 md:w-24 md:ml-18  xl:ml-28 md:mt-5 xl:mt-12  xl:h-32 xl:w-auto absolute">
        <Image src={ZKLogo} alt="zk logo" />
      </div>
    </header>
  );
};

export default Header;
