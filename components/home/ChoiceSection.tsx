import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TwitterCardStart from '../../public/assets/twitter-card-start.png';
import RightArrow from '../../public/assets/right-arrow.png';
import LeftArrow from '../public/assets/left-arrow.png';

function ChoiceSection() {
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
          <p className="text-3xl   text-white">The Choice is Yours</p>

          <p className="text-xl w-100  text-white">
            Certify your entire account history, or a recent time period.
          </p>
          <p className="text-xl w-100  text-white">
            Focus only on your sick gains, or share fully transparent
            transaction data.
          </p>
          <p className="text-xl w-100  text-white">It's up to you.</p>
          <div className="w-44">
            <Link href={'/start'} passHref>
              <Button label="Next" onClick={() => console.log('click')} />
            </Link>
          </div>
        </div>
        <div className="w-30 h-30 ml-42 relative">
          <Link href={'/choice'}>
            <Image src={RightArrow} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChoiceSection;
