import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import ProofOfAlphaStatment from '../../public/assets/prove/proof-of-alpha-statement-prove.png';
import StatementTopStamp from '../../public/assets/prove/prove-stamp-statment.png';
import ShareIcon from '../../public/assets/prove/share-icon.png';
import ShareButton from '../../components/prove/ShareButton';
import ProofOfAlphaStatement from './ProofOfAlphaStatement';

const StatementSection = () => {
  return (
    <div className="bg-prove-background  relative min-h-screen bg-cover bg-no-repeat text-white">
      <div className="" id="trade"></div>

      <div className=" 3xl:w-7/12 absolute top-0  right-0 w-6/12 2xl:w-7/12">
        <Image src={StatementTopStamp} alt="Stamp" />
      </div>

      <div className="3xl:space-y-4 3xl:mt-10 flex  flex-col items-center 2xl:pt-8">
        <div className="3xl:w-3/12 relative flex flex-col items-center justify-center">
          <div>
            <div className="">
              <ProofOfAlphaStatement />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:right-100 absolute top-28 flex flex-col items-center space-y-7">
        <Link href={'prove/shared'}>
          <ShareButton label="SHARE IT" />
        </Link>

        <p className="tracking-widest">HOW WILL IT LOOK?</p>
      </div>
    </div>
  );
};

export default StatementSection;
