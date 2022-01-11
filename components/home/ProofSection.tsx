import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import Checkmark from '../../public/assets/common/checkmark.png';
import ZKBorderLogo from '../../public/assets/home/zk-border-logo.png';

const ProofSection = () => {
  return (
    <div
      className="flex min-h-screen bg-blue-background bg-cover bg-no-repeat mt-0 "
      id="proof"
    >
      <div className="flex mt-48 ml-64 ">
        <div className="container h-full flex flex-col space-y-8 w-124  text-white ">
          <p className="text-6xl leading-snug font-normal mb-10 ">
            Your Proof of Trade Statement:
          </p>
          <div className="flex space-x-4 text-4xl ">
            <div className="w-10 h-10 relative">
              <Image src={Checkmark} alt="Blue checkmark" />
            </div>
            <p>Verifies your trades, over any time peroid</p>
          </div>
          <div className="flex space-x-4 text-4xl ">
            <div className="w-10 h-10 relative">
              <Image src={Checkmark} alt="Blue checkmark" />
            </div>
            <p>Showcases your gains</p>
          </div>
          <div className="flex space-x-4 text-4xl ">
            <div className="w-10 h-10 relative">
              <Image src={Checkmark} alt="Blue checkmark" />
            </div>
            <p>Preserves your privacy</p>
          </div>
          <div className="flex space-x-4 text-4xl">
            <div className="w-10 h-10 relative">
              <Image src={Checkmark} alt="Blue checkmark" />
            </div>
            <p>Keeps you in control of what you share</p>
          </div>
          <div className="flex space-x-4 text-4xl mb-24 ">
            <div className="w-10 h-10 relative">
              <Image src={Checkmark} alt="Blue checkmark" />
            </div>
            <p>100% open source & on-chain</p>
          </div>

          <div className="">
            <div className="flex justify-between w-2/3 mt-30">
              <Link href={'/start'} passHref>
                <Button buttonStyle="px-8" label="Launch App" />
              </Link>

              <Link href={'#exchange'}>
                <TransparentButton buttonStyle="-ml-3" label="Learn More" />
              </Link>

              {/* <a>Learn More</a> */}
            </div>
          </div>
        </div>
        {/* container */}
        <div className="w-86 h-86 mt-44 ml-64 relative">
          <Image src={ZKBorderLogo} alt="ZK logo" />
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
