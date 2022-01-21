import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import ZKLogo from '../../public/assets/common/zk-logo.png';
import TopStamp from '../../public/assets/home/stamp-top.png';
import ProofOfAlpha from '../../public/assets/home/proof-of-alpha-home.png';
import TwitterCard from '../../public/assets/common/twitter-card.png';

const TradeHistorySection = () => {
  return (
    <div className="flex h-screen bg-background bg-cover bg-no-repeat">
      <header className="">
        <div className="ml-18  mt-18  h-32 w-auto absolute">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
      </header>
      <div className="hidden  md:block  absolute  right-0">
        <Image src={TopStamp} alt="Stamp" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen mt-24 md:mt-40 md:ml-52 ">
        <div className="container h-screen flex flex-col space-y-5 md:space-y-8    text-white ">
          <p className="text-7xl text-white">
            Your Trade History Sets You Apart
          </p>
          <p className="text-4xl font-light  text-white">
            But faking gains on the socials is easy with bogus screenshots.
          </p>
          <p className="text-4xl font-light text-white">
            That’s why we built
            <span className="font-bold"> Proof-of-Alpha </span>
            using zero-knowledge proofs.
          </p>

          <div className="ml-12 md:ml-0 z-10">
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-center md:justify-start h-auto   md:w-2/3 mt-10 md:mt-10">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-10  text-sm md:text-2xl"
                  label="LAUNCH APP"
                />
              </Link>

              <Link href={'#proof'}>
                <TransparentButton
                  buttonStyle="md:ml-16 px-10 text-sm md:text-2xl"
                  label="LEARN MORE"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:absolute z-3 md:w-[840px] bottom-0 md:max-h-[665px] md:right-0 overflow-hidden">
        <Image src={ProofOfAlpha} alt="Proof of Alpha Stament" />
      </div>
      <div className="md:absolute z-5 md:bottom-0 md:w-130 md:left-32 md:max-h-[420px] md:overflow-hidden">
        <Image src={TwitterCard} alt="Twitter Card" />
      </div>
    </div>
  );
};

export default TradeHistorySection;
