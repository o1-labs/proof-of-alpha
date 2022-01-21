import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import CardStatmentGroup from './CardStatementGroup';
import ZKLogo from '../../public/assets/common/zk-logo.png';
import TopStamp from '../../public/assets/home/stamp-top.png';

const TradeHistorySection = () => {
  return (
    <div className="flex h-screen bg-background bg-cover bg-no-repeat">
      <header className="">
        <div className="ml-36 mt-5 items-center w-20 md:w-24 md:ml-7  xl:ml-10 md:mt-5 xl:mt-12  xl:h-32 xl:w-auto absolute">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
      </header>
      <div className="hidden  md:block  absolute  right-0">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center h-screen mt-30 md:mt-24 xl:mt-40 md:ml-32 xl:ml-52 ">
        <div className="container w-10/12 md:w-auto h-screen flex flex-col space-y-6 md:space-y-3 xl:space-y-8    text-white ">
          <p className="text-xl md:text-5xl xl:text-7xl text-white w-full">
            Your Trade History Sets You Apart
          </p>
          <div className="flex flex-col px-3 md:px-0 space-y-6 md:space-y-4 xl:space-y-8 ">
            <p className="text-base md:text-2xl xl:text-4xl font-light  text-white">
              But faking gains on the socials is easy with bogus screenshots.
            </p>
            <p className="text-base md:text-2xl xl:text-4xl font-light text-white">
              That’s why we built
              <span className="font-bold"> Proof-of-Alpha </span>
              using zero-knowledge proofs.
            </p>
          </div>
          <div className=" z-10">
            <div className="flex flex-col space-y-4  md:flex-row items-center justify-center md:justify-start h-auto md:w-3/4  xl:w-2/3 mt-10 md:mt-4">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-10  text-sm md:text-base xl:text-2xl"
                  label="LAUNCH APP"
                />
              </Link>

              <Link href={'#proof'}>
                <TransparentButton
                  buttonStyle="md:ml-16 px-10 text-sm md:text-base xl:text-2xl"
                  label="LEARN MORE"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CardStatmentGroup />
    </div>
  );
};

export default TradeHistorySection;
