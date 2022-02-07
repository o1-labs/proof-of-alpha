import Image from 'next/image';
import ProofOfTradeStatement from '../../public/assets/verify/finalize/proof-of-trade-statement.png';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';
import TwitterCardf from '../../public/assets/common/twitter-card.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex w-9/12 flex-col  items-center justify-center 2xl:w-auto ">
      <p
        className="3xl:mr-72
 tracking-2xlwidest 2xl:tracking-2xlwidest mb-4 flex text-xs text-[#BCBCBC] 2xl:mt-6  2xl:mr-48 2xl:text-xl"
      >
        YOU'LL RECIEVE
      </p>
      <div className="flex justify-center 2xl:mt-4">
        <div className="">
          <div className="text-center text-xs 2xl:text-xl  ">
            PROOF OF AlPHA STATEMENT
          </div>
          <div className="3xl:w-full 2xl:w-10/12">
            <Image src={ProofOfTradeStatement} alt="proof of trade statement" />
          </div>
        </div>

        <div className="-ml-20 2xl:-ml-36">
          <div className=" 2xl:mr-50 text-center text-xs 2xl:ml-28 2xl:text-left 2xl:text-xl  ">
            SOCIAL BADGE
          </div>
          <div className="3xl:mt-7  3xl:-ml-8 mt-2 ml-7 w-1/2 2xl:mt-4 2xl:-ml-16 ">
            <Image src={TwitterCardf} alt="twitter card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
