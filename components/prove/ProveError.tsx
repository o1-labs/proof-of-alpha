import Image from 'next/image';
import ZKOutlineLogo from '../../public/assets/prove/zk-outline-logo.png';
const ProveError = () => {
  return (
    <div className="bg-background flex h-screen bg-cover bg-no-repeat text-white">
      <div className="flex w-full flex-col items-center space-y-10 ">
        <div className="flex w-3/6 flex-col items-center justify-center">
          <div className="mt-36 ">
            <Image src={ZKOutlineLogo} alt=" zk logo" />
          </div>
          <div className="mt-10 flex flex-col items-center ">
            <p className="text-3.5xl leading-11 font-bold">
              Sorry, the link that was
            </p>
            <p className="text-3.5xl leading-11 mb-10 font-bold">
              shared with you is invalid.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-light">
              The zero-knowledge proof for this data was
            </p>
            <p className="text-2xl font-light">
              not accepted into the Mina blockchain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProveError;
