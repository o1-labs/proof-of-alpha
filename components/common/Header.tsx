import Image from 'next/image';
import useMinaProvider from '../../hooks/useMinaProvider';
import ZKLogo from '../../public/assets/common/zk-logo.svg';

const Header = () => {
  const { isAuro, minaAccount, accountHeaderDisplay, status } =
    useMinaProvider();
  console.log('accountHeaderDisplay', accountHeaderDisplay, 'status', status);

  const renderAuroHeader = () => {
    const statusDotClassName = {
      green: 'bg-custom-green',
      yellow: 'bg-yellow-400',
      red: 'bg-red-500'
    };

    return (
      <>
        {/* Allows the user to click the header display to navigate to Auro wallet on the chromestore when no wallet is installed */}
        <a
          className={`${
            status === 'red' ? 'hover:underline' : 'pointer-events-none '
          }`}
          href="https://chrome.google.com/webstore/detail/auro-walletmina-protocol/cnmamaachppnkjgnildpdmkaakejnhae"
          target="_blank"
        >
          <div>{accountHeaderDisplay}</div>
        </a>
        <div
          className={`${statusDotClassName[status]} z-99 mt-1 ml-3 h-4 w-4 rounded-full`}
        ></div>
      </>
    );
  };
  return (
    <header className="">
      <div className="relative flex items-center justify-center md:py-5 2xl:py-9 ">
        <div className="md:w-20 2xl:w-28">
          <Image src={ZKLogo} alt="zk logo" />
        </div>

        <div className="z-50 flex flex-col justify-end">
          <div className="absolute  mt-8  flex leading-6 tracking-xlwidest text-custom-gray-light md:right-20 md:text-base 2xl:right-40 2xl:text-xl ">
            {renderAuroHeader()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
