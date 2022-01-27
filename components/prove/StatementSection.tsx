import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import ProofOfAlphaStatment from '../../public/assets/prove/proof-of-alpha-statement-prove.png';
import StatementTopStamp from '../../public/assets/prove/prove-stamp-statment.png';

const StatementSection = () => {
  return (
    <div className="relative min-h-screen bg-prove-background bg-cover bg-no-repeat text-white">
      <div className=" -mt-10" id="trade"></div>

      <div className=" absolute top-0 right-0  w-6/12 2xl:w-7/12 3xl:w-7/12">
        <Image src={StatementTopStamp} alt="Stamp" />
      </div>

      <div className="flex flex-col items-center  3xl:space-y-4 3xl:mt-10">
        <div className="relative flex flex-col items-center 3xl:w-4/12 justify-center">
          <div>
            <Image src={ProofOfAlphaStatment} alt="proof of trade statement" />
            <Link href={'prove/shared'}>
              <Button label="SHARE IT" />
            </Link>

            <p>HOW WILL IT LOOK?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementSection;
