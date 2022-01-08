import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import ZKLogo from '../../public/assets/zk-logo.png';
import ProofOfTradeStatement from '../../public/assets/proof-of-trade-home.png';
import TwitterCard from '../../public/assets/twitter-card-home.png';

const TradeHistorySection: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-background bg-cover bg-no-repeat">
      <header className="">
        <div className="ml-8  mt-10 h-32 w-auto">
          <Image src={ZKLogo} alt="zk logo" />
        </div>
      </header>
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
              <Button
                buttonStyle="px-8"
                label="Launch App"
                onClick={() => console.log('click')}
              />
            </Link>

            <Link href={'#proof'}>
              <TransparentButton buttonStyle="-ml-3" label="Learn More" />
            </Link>

            {/* <a>Learn More</a> */}
          </div>
        </div>
        {/* <div className="flex">
          <div className="w-108 ">
            <Image src={TwitterCard} alt="twitter card" />
          </div>

          <div>
            <div className="w-115 -mb-24 -mr-52">
              <Image
                src={ProofOfTradeStatement}
                alt="proof of trade statement"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TradeHistorySection;
