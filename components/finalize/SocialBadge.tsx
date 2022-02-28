import Image from 'next/image';
import TwitterCard from '../../public/assets/verify/finalize/twitter-card-finalize.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="2xl:full flex w-9/12 flex-col items-center justify-center xl:w-11/12">
      <p className="tracking-2xlwidest mb-14 flex pt-5 text-xs  text-[#BCBCBC] 2xl:mt-6  2xl:text-xl 2xl:tracking-[10px]">
        YOU'LL RECIEVE
      </p>
      <div className="tracking-xlwidest  -mb-5 text-center text-xs 2xl:mt-4 2xl:text-xl">
        SOCIAL BADGE
      </div>
      <div className="3xl:w-10/12 3xl:mb-30  w-9/12 xl:w-full 2xl:mb-24 2xl:-mt-2 2xl:w-full ">
        <Image loader={({ src }) => src} src={TwitterCard} alt="twitter card" />
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
