import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import TradeTwitter from '../../public/assets/start/trade-history-with-twitter.png';
import Button from '../../components/common/Button';
import Header from '../../components/start/Header';
import ProofOfAlpha from '../../public/assets/home/proof-of-alpha-home.png';
import TwitterCard from '../../public/assets/common/twitter-card.png';
import CardStatmentGroup from '../../components/home/CardStatementGroup';

const Start: NextPage = () => {
  return (
    <div className="h-screen*4 min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      <div className="flex">
        <div className="flex flex-col space-y-5 md:space-y-4 xl:space-y-9  text-white  ml-14 xl:ml-36 md:ml-28 mt-30 md:mt-36 xl:mt-56  w-[300px] md:w-[410px] xl:w-[620px]">
          <p className="text-xl text-center md:text-left md:text-2xl xl:text-5xl   font-bold pr-8">
            Your Free Proof of Alpha Statement and Share Badge
          </p>

          <p className="text-base md:text-xl xl:text-3xl font-light mt-4 md:mt-0 ">
            Proof of Alpha offers third-party verification of your trade
            history.
          </p>
          <p className="text-base md:text-xl xl:text-3xl  font-light ">
            You control what you share, and your personal data stays private.
          </p>
          <p className="text-base md:text-xl xl:text-3xl font-light ">
            Your track record, certified on-chain, free of charge.
          </p>
          <p className="text-base md:text-xl xl:text-3xl  font-light ">
            Available for Binance. Other exchanges coming soon!
          </p>
          <div className="flex items-center justify-center md:justify-start pt-8 md-pt-0">
            <Link href="/auro" passHref>
              <Button
                buttonStyle=" w-1/2 text-sm md:text-base xl:text-2xl"
                label="GET STARTED"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="invisable: md:visible absolute  md:w-[310px] xl:w-[620px] right-0 -bottom-20 xl:bottom-18 md:right-0 md:bottom-0 overflow-hidden">
        <Image
          src={TradeTwitter}
          alt="trade history and twitter"
          layout="responsive"
        />
      </div>

      <div className="md:invisible">
        <CardStatmentGroup />
      </div>

      <div />
    </div>
  );
};

export default Start;
