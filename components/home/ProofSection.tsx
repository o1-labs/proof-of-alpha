import Link from 'next/link';
import Image from 'next/image';

import Button from '../common/Button';
import TransparentButton from '../common/TransparentButton';
import Checkmark from '../../public/assets/common/checkmark.png';
import ZKBorderLogo from '../../public/assets/home/zk-border-logo.png';

import CheckmarkItem from './CheckmarkItem';

const ProofSection = () => {
  return (
    <div
      className="flex min-h-screen bg-blue-background bg-cover bg-no-repeat "
      id="proof"
    >
      <div className="flex flex-col items-center justify-center h-screen mt-48 ml-64">
        <div className="container h-screen flex flex-col  space-y-8 w-124  text-white ">
          <p className="text-6xl leading-snug font-normal mb-10 ">
            Your Proof of Trade Statement:
          </p>
          <CheckmarkItem copy="Verifies your trades, over any time peroid" />
          <CheckmarkItem copy="Showcases your gains" />
          <CheckmarkItem copy="Preserves your privacy" />
          <CheckmarkItem copy="Keeps you in control of what you share" />
          <CheckmarkItem copy="100% open source & on-chain" />

          <div className="">
            <div className="flex flex-row items-center h-auto justify-between  mt-30">
              <Link href={'/start'} passHref>
                <Button
                  buttonStyle="px-12  md:w-auto  text-xl md:text-2xl"
                  label="LAUNCH APP"
                />
              </Link>

              <Link href={'#exchange'}>
                <TransparentButton
                  buttonStyle="-ml-3 text-2xl"
                  label="LEARN MORE"
                />
              </Link>
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
