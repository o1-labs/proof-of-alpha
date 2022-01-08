import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TwitterCardStart from '../../public/assets/twitter-card-start.png';
import RightArrow from '../../public/assets/right-arrow.png';
import LeftArrow from '../public/assets/left-arrow.png';

function DataSection() {
  return (
    <div
      className="flex min-h-screen bg-red-background bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex items-center space-x-48">
        <div className="w-30 h-30 ml-42 relative">
          <Image src={LeftArrow} alt="Right Arrow" />
        </div>
        <div className="flex-col w-80 space-y-5">
          <p className="text-3xl   text-white">Your Data Stays Private</p>

          <p className="text-xl w-100  text-white">
            We area a team of engineers, cryptographers and crypto traders
          </p>
          <p className="text-xl w-100  text-white">
            We use zero-knowledge proofs to ensure the privacy of your data
          </p>
          <p className="text-xl w-100  text-white">
            Wether your account is anon or KYC'ed, your data will stay private.
          </p>
          <div className="w-44">
            <Link href={'/start'} passHref>
              <Button label="Next" onClick={() => console.log('click')} />
            </Link>
          </div>
        </div>

        {/* <div className="w-30 h-30 ml-42 relative">
          <Image src={RightArrow} alt="Right Arrow" />
        </div> */}
      </div>
    </div>
  );
}

export default DataSection;
