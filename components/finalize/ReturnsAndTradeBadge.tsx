import Image from 'next/image';
import ProofOfTradeStatement from '../../public/assets/verify/finalize/proof-of-trade-statement.png';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';
import TwitterCardf from '../../public/assets/common/twitter-card.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex flex-col items-center  justify-center w-9/12 2xl:w-auto ">
      <p className=" flex text-xs mb-4 2xl:mt-6 2xl:mr-48 3xl:mr-72 2xl:text-xl  tracking-2xlwidest 2xl:tracking-2xlwidest">
        YOU'LL RECIEVE
      </p>
      <div className="flex justify-center 2xl:mt-4">
        <div className="">
          <div className="text-center text-xs 2xl:text-xl  ">
            PROOF OF AlPHA STATEMENT
          </div>
          <div className="2xl:w-10/12 3xl:w-full">
            <Image src={ProofOfTradeStatement} alt="proof of trade statement" />
          </div>
        </div>

        <div className="-ml-20 2xl:-ml-36">
          <div className=" text-center 2xl:text-left 2xl:ml-28 2xl:mr-50 text-xs 2xl:text-xl  ">
            SOCIAL BADGE
          </div>
          <div className="w-1/2  mt-2 2xl:mt-4 3xl:mt-7 ml-7 2xl:-ml-16 3xl:-ml-8 ">
            <Image src={TwitterCardf} alt="twitter card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
