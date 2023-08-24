import Image from "next/legacy/image";
import TwitterCard from '../../../public/assets/step/6/twitter-card-finalize@2x.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="2xl:full flex w-9/12 flex-col items-center justify-center xl:w-11/12 2xl:mt-5">
      <p
        className="
 mb-12 mt-6 flex  text-xs tracking-2xlwidest text-[#BCBCBC] 2xl:mt-6 2xl:mr-8  2xl:text-xl 2xl:tracking-2xlwidest 3xl:mr-8"
      >
        YOU'LL RECIEVE
      </p>
      <div className="text-center  text-xs tracking-xlwidest xl:-mb-5 2xl:mt-4 2xl:text-xl">
        SOCIAL BADGE
      </div>
      <div className="w-full xl:w-full  2xl:mb-24 2xl:-mt-2 2xl:w-full 3xl:mb-30 3xl:w-10/12 ">
        <Image src={TwitterCard} alt="twitter card" priority />
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
