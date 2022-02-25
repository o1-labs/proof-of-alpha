import Image from 'next/image';
import ProofOfTradeStatement from '../../public/assets/verify/finalize/proof-of-trade-statement.png';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex w-9/12 flex-col  items-center justify-center 2xl:mt-5 2xl:w-auto">
      <p
        className="
 tracking-2xlwidest 2xl:tracking-2xlwidest 3xl:mr-8  mb-12 mt-6 flex text-xs text-[#BCBCBC]  2xl:mt-6 2xl:mr-8 2xl:text-xl"
      >
        YOU'LL RECIEVE
      </p>
      <div className="3xl:-ml-40 flex justify-center 2xl:mt-4">
        <div className="3xl:ml-30">
          <div className="tracking-xlwidest text-center text-xs 2xl:text-xl ">
            PROOF OF ALPHA STATEMENT
          </div>
          <div className="3xl:w-[700px] 3xl:-mt-9 2xl:-mt-4 xl:-mt-4 2xl:w-[600px] xl:w-[500px] ">
            <Image src={ProofOfTradeStatement} alt="proof of trade statement" />
          </div>
        </div>

        <div className="3xl:-ml-30 -ml-20 2xl:-ml-36  ">
          <div className="tracking-xlwidest  text-center text-xs 2xl:ml-28 mr-20  2xl:text-left 2xl:text-xl  ">
            SOCIAL BADGE
          </div>
          <div className="3xl:-mt-1 3xl:w-[530px] 3xl:-ml-20 xl:-ml-24 mt-0 ml-7 w-1/2 2xl:mt-0 2xl:-ml-16 2xl:w-[500px] xl:w-[400px]">
            <Image src={TwitterCard} alt="twitter card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
