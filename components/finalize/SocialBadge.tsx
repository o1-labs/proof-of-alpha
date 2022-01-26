import Image from 'next/image';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex flex-col justify-center items-center w-9/12 2xl:full 2xl:ml-10">
      <p className="flex text-xs mb-4 2xl:mt-6  2xl:text-xl  tracking-2xlwidest 2xl:tracking-2xlwidest">
        YOU'LL RECIEVE
      </p>
      <div className="text-center text-xs 2xl:text-xl 2xl:mt-4  ">
        SOCIAL BADGE
      </div>
      <div className="w-9/12 2xl:w-8/12 3xl:w-10/12 -mt-1 mb-2 2xl:mb-24 3xl:mb-30 2xl:-mt-2 ">
        <Image src={TwitterCard} alt="twitter card" />
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
