import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import ProofOfAlphaStatment from '../../public/assets/prove/proof-of-alpha-statement-prove.png';
import StatementTopStamp from '../../public/assets/prove/prove-stamp-statment.png';
import ShareIcon from '../../public/assets/prove/share-icon.png';
import ShareButton from '../../components/prove/ShareButton';

const StatementSection = () => {
  return (
    <div className="relative  min-h-screen bg-prove-background bg-cover bg-no-repeat text-white">
      <div className="" id="trade"></div>

      <div className=" absolute top-0 right-0  w-6/12 2xl:w-7/12 3xl:w-7/12">
        <Image src={StatementTopStamp} alt="Stamp" />
      </div>

      <div className="flex flex-col items-center  3xl:space-y-4 2xl:pt-8 3xl:mt-10">
        <div className="relative flex flex-col items-center 3xl:w-4/12 justify-center">
          <div>
            <div className="2xl:w-8/12">
              <Image
                src={ProofOfAlphaStatment}
                alt="proof of trade statement"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-7 items-center absolute 2xl:right-100 top-28">
        <Link href={'prove/shared'}>
          <ShareButton label="SHARE IT" />
        </Link>

        <p className="tracking-widest">HOW WILL IT LOOK?</p>
      </div>
    </div>
  );
};

export default StatementSection;
