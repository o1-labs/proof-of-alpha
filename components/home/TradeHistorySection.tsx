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
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat">
      <header className="">
        <div className="ml-8  mt-10 h-32 w-auto">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
      </header>

      <div className="hidden  md:block  absolute  right-0">
        <Image src={TopStamp} alt="Stamp" />
      </div>

      <div className="relative">
        <div className="flex flex-col space-y-10 container  mt-57 w-140 h-screen">
          <p className="text-7xl text-white">
            Your Trade History Sets You Apart
          </p>
          <p className="text-3.5xl font-light  text-white">
            But faking gains on the socials is easy with bogus screenshots.
          </p>
          <p className="text-3.5xl  text-white">
            That’s why we built Proof-of-Trade Performance using zero-knowledge
            proofs.
          </p>

          <div className="flex justify-between w-2/5">
            <Link href={'/start'} passHref>
              <Button buttonStyle="px-8" label="Launch App" />
            </Link>

            <Link href={'#proof'}>
              <TransparentButton buttonStyle="-ml-3" label="Learn More" />
            </Link>

            {/* <a>Learn More</a> */}
          </div>
        </div>

        <div className="hidden  md:block    right-0">
          <Image src={ProofOfAlpha} alt="Proof of Alpha Stament" />
        </div>

        <div className="hidden  md:block  absolute  bottom-0">
          <Image src={TwitterCard} alt="TwitterCard" />
        </div>
      </div>
    </div>
  );
};

export default TradeHistorySection;
