import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import CheckmarkItem from './CheckmarkItem';
import TransparentButton from '../common/TransparentButton';
import ZKBorderLogo from '../../public/assets/home/zk-logo-home.png';

const ProofSection = () => {
  return (
    <div className="flex h-screen  bg-blue-background bg-cover bg-no-repeat -mt-1.5">
      {/* Used to navigate user to this section from previous and fix section alignment mismatch */}
      <div className="mt-1.5" id="proof"></div>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen mt-24 md:mt-48 md:ml-64">
        <div className="container h-screen flex flex-col space-y-5 w-4/5 md:space-y-8  md:w-124  text-white ">
          <p className="text-xl w-[290px] md:w-auto text-right md:text-left md:text-6xl leading-snug font-normal mb-4 md:mb-10 ">
            Your Proof of Trade Statement:
          </p>
          <CheckmarkItem copy="Verifies your trades, over any time peroid" />
          <CheckmarkItem copy="Showcases your gains" />
          <CheckmarkItem copy="Preserves your privacy" />
          <CheckmarkItem copy="Keeps you in control of what you share" />
          <CheckmarkItem copy="100% open source & on-chain" />

          <div className="ml-12 md:ml-0">
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-center h-auto md:justify-between  md:w-2/3 mt-10 md:mt-30">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-8 text-sm md:text-2xl"
                  label="LAUNCH APP"
                />
              </Link>

              <Link href={'#exchange'}>
                <TransparentButton
                  buttonStyle="md:-ml-3 text-sm md:text-2xl"
                  label="LEARN MORE"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block mw-86 h-86  mb-100 ml-24 relative">
          <Image src={ZKBorderLogo} alt="ZK logo" />
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
