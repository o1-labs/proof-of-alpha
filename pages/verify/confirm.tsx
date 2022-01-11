import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import AuroConfirm from '../../public/assets/verify/confirm/auro-confirm.png';

const Confirm: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat text-white">
      <Header />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-120">
          <p className="text-5xl leading-14 mb-5">Confirm to Continue</p>
          <p className="text-4xl leading-13 mb-16">
            You’ll need to click Confirm' in the Auro Wallet browser extension
            to continue.
          </p>
          <Link href={'/prove'}>
            <Button label="CONTINUE >>" buttonStyle="w-1/2" />
          </Link>
        </div>
        <div>
          {/* Using the priority prop to preload this image that was detected as
        the Largest Contentful Paint (LCP).
        https://nextjs.org/docs/api-reference/next/image#priority */}
          <Image src={AuroConfirm} alt="auro confirm" priority />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
