import Image from "next/legacy/image";
import ZKLogo from '../../public/assets/common/zk-logo.svg';

const Header = () => {
  return (
    <header className="mt-3 flex items-center justify-center py-4 md:justify-start md:py-5 xl:mt-12 2xl:py-9">
      <div className="w-20 md:ml-0  md:w-24    2xl:w-auto  ">
        <Image src={ZKLogo} alt="zk logo" />
      </div>
    </header>
  );
};

export default Header;
