import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import LeftArrow from '../public/assets/left-arrow.png';

const DataSection = () => {
  return (
    <div
      className="bg-red-background flex min-h-screen bg-cover bg-no-repeat "
      id="exchange"
    >
      <div className="flex items-center space-x-48">
        <div className="w-30 h-30 ml-42 relative">
          <Image loader={({ src }) => src} src={LeftArrow} alt="Right Arrow" />
        </div>
        <div className="w-80 flex-col space-y-5">
          <p className="text-3xl   text-white">Your Data Stays Private</p>

          <p className="w-100 text-xl  text-white">
            We area a team of engineers, cryptographers and crypto traders
          </p>
          <p className="w-100 text-xl  text-white">
            We use zero-knowledge proofs to ensure the privacy of your data
          </p>
          <p className="w-100 text-xl  text-white">
            Wether your account is anon or KYC'ed, your data will stay private.
          </p>
          <div className="w-44">
            <Link href={'/start'} passHref>
              <Button label="Next" onClick={() => console.log('click')} />
            </Link>
          </div>
        </div>

        {/* <div className="w-30 h-30 ml-42 relative">
          <Image loader={({src})=> src} src={RightArrow} alt="Right Arrow" />
        </div> */}
      </div>
    </div>
  );
};

export default DataSection;
