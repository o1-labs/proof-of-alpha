import Image from 'next/image';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="2xl:full flex w-9/12 flex-col items-center justify-center 2xl:ml-10">
      <p className="tracking-2xlwidest 2xl:tracking-2xlwidest mb-4 flex  text-xs text-[#BCBCBC]  2xl:mt-6 2xl:text-xl">
        YOU'LL RECIEVE
      </p>
      <div className="text-center text-xs 2xl:mt-4 2xl:text-xl  ">
        SOCIAL BADGE
      </div>
      <div className="3xl:w-10/12 3xl:mb-30 -mt-1 mb-2 w-9/12 2xl:mb-24 2xl:-mt-2 2xl:w-8/12 ">
        <Image src={TwitterCard} alt="twitter card" />
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
