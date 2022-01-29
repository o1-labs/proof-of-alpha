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
      <div className="flex justify-around mt-10 2xl:mt-20">
        <div className="flex w-full 2xl:w-11/12 3xl:w-11/12">
          <div className="flex flex-col justify-center w-4/12 2xl:w-4/12 3xl:w-3/12 ml-48 2xl:ml-72 3xl:ml-100">
            <p className="text-2xl 2xl:text-4xl 3xl:text-5xl 3xl:leading-14 mb-5">
              Submit Proof To Mina
            </p>
            <p className="text-xl 2xl:text-3xl 3xl:text-4xl 3xl:leading-13 mb-10 2xl:mb-16">
              Click on 'confirm' within Auro Wallet to submit the proof to the
              Mina chain.
            </p>
            <Link href={'/prove'} passHref>
              <Button
                label="CONTINUE >>"
                buttonStyle="w-1/2 text-sm 2xl:text-lg 3xl:text-2xl"
              />
            </Link>
          </div>
          <div className="w-2/12 2xl:w-2/12 3xl:w-2/12 ml-24 2xl:ml-56 3xl:ml-80">
            {/* Using the priority prop to preload this image that was detected as
        the Largest Contentful Paint (LCP).
        https://nextjs.org/docs/api-reference/next/image#priority */}
            <Image
              layout="responsive"
              src={AuroConfirm}
              alt="auro confirm"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
