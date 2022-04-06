import Image from 'next/image';
import ProofOfAlphaStatement from '../../../public/assets/step/6/proof-of-alpha-statement@2x.png';
import TwitterCard from '../../../public/assets/step/6/twitter-card-finalize@2x.png';

const ReturnsAndTradeBadge = () => {
  return (
    <div className="flex w-9/12 flex-col  items-center justify-center 2xl:mt-5 2xl:w-auto">
      <p
        className="
 mb-12 mt-6 flex  text-xs tracking-2xlwidest text-[#BCBCBC] 2xl:mt-6 2xl:mr-8  2xl:text-xl 2xl:tracking-2xlwidest 3xl:mr-8"
      >
        YOU'LL RECIEVE
      </p>
      <div className="flex justify-center 2xl:mt-4 3xl:-ml-40">
        <div className="3xl:ml-30">
          <div className="text-center text-[.6rem] tracking-xlwidest xl:text-xs 2xl:text-xl ">
            PROOF OF ALPHA STATEMENT
          </div>
          <div className="w-[380px] xl:-mt-4 xl:w-[500px] 2xl:-mt-4 2xl:w-[600px] 3xl:-mt-9 3xl:w-[700px] ">
            <Image
              src={ProofOfAlphaStatement}
              alt="proof of alpha statement"
              priority
            />
          </div>
        </div>

        <div className="-ml-20 2xl:-ml-36 3xl:-ml-30  ">
          <div className="mr-20  text-center text-[.6rem] tracking-xlwidest xl:text-xs 2xl:ml-28  2xl:text-left 2xl:text-xl  ">
            SOCIAL BADGE
          </div>
          <div className="mt-3 -ml-12 w-[320px]  xl:mt-0 xl:-ml-24 xl:w-[400px] 2xl:mt-0 2xl:-ml-16 2xl:w-[500px] 3xl:-mt-3 3xl:-ml-20 3xl:w-[530px]">
            <Image src={TwitterCard} alt="twitter card" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsAndTradeBadge;
