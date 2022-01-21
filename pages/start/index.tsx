import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
import TradeTwitter from '../../public/assets/start/trade-history-with-twitter.png';
import Button from '../../components/common/Button';
import Header from '../../components/start/Header';

const Start: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      <div className="flex">
        <div className="flex flex-col md:space-y-4 xl:space-y-9  text-white xl:ml-36 md:ml-28 md:mt-36 xl:mt-56 md:w-[410px] xl:w-[620px]">
          <p className="md:text-2xl xl:text-5xl   font-bold pr-8">
            Your Free Proof of Alpha Statement and Share Badge
          </p>

          <p className="md:text-xl xl:text-3xl font-light ">
            Proof of Alpha offers third party verification of your trade
            history.
          </p>
          <p className="md:text-xl xl:text-3xl  font-light ">
            You control what you share, and your personal data stays private.
          </p>
          <p className="md:text-xl xl:text-3xl font-light ">
            Your track record, certified on-chain, free of charge.
          </p>
          <p className="md:text-xl xl:text-3xl  font-light ">
            Available for Binance. Other exchanges coming soon!
          </p>
          <div className="flex mt-9">
            <Link href="/auro" passHref>
              <Button
                buttonStyle="px-20 w-1/2 md:text-base xl:text-2xl"
                label="CONTINUE"
              />
            </Link>
          </div>
        </div>
        <div className="absolute right-0 md:w-[360px] xl:w-[600px] bottom-0 ">
          <Image
            src={TradeTwitter}
            alt="trade history and twitter"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
