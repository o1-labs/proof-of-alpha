import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.png';

const Header = () => {
  return (
    // <header className="">
    //   <div className="ml-30 pt-20 h-auto w-32 relative">
    //     <Image loader={({src})=> src} src={ZKLogo} alt="zk logo" />
    //   </div>
    // </header>
    <header className="">
      <div className="3xl:pr-10 md:ml-18 absolute ml-36 mt-5 w-20 items-center  md:mt-5 md:w-24 xl:ml-28  xl:mt-12 xl:h-32 xl:w-auto">
        <Image loader={({ src }) => src} src={ZKLogo} alt="zk logo" />
      </div>
    </header>
  );
};

export default Header;
