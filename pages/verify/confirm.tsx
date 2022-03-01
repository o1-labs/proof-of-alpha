import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import Layout from '../../components/common/Layout';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import AuroConfirm from '../../public/assets/verify/confirm/auro-confirm.png';
import Container from '../../components/common/Container';

const Confirm: NextPage = () => {
  return (
    <Layout backGroundColor="gradient" layoutStyle="h-1.25*screen">
      <Header />

      <div className="mt-10 flex justify-around 2xl:mt-20">
        <div className="3xl:w-11/12 flex w-full 2xl:w-11/12">
          <div className="3xl:w-3/12 3xl:ml-100 ml-48 flex w-4/12 flex-col justify-center 2xl:ml-72 2xl:w-4/12">
            <p className="3xl:text-5xl 3xl:leading-14 mb-5 text-2xl 2xl:text-4xl">
              Submit Proof To Mina
            </p>
            <p className="3xl:text-4xl 3xl:leading-13 mb-10 text-xl 2xl:mb-16 2xl:text-3xl">
              Click on 'confirm' within Auro Wallet to submit the proof to the
              Mina chain.
            </p>
            <Link href={'/prove'} passHref>
              <Button
                label="CONTINUE &nbsp;>>"
                buttonStyle="w-1/2  text-sm 2xl:text-base 3xl:text-base"
              />
            </Link>
          </div>
          <div className="3xl:w-[520px] 3xl:ml-80 ml-24 w-2/12 xl:w-[280px] 2xl:ml-56 2xl:w-[320px]">
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
    </Layout>
  );
};

export default Confirm;
