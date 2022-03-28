import Image from 'next/image';
import ZKLogo from '../../public/assets/common/zk-logo.svg';

const ProveError = () => {
  return (
    <div className="flex h-screen bg-background bg-cover bg-no-repeat text-white">
      <div className="flex w-full flex-col items-center space-y-10 ">
        <div className="flex w-3/6 flex-col items-center justify-center">
          <div className="mt-36 ">
            <Image src={ZKLogo} alt=" zk logo" />
          </div>
          <div className="mt-10 flex flex-col items-center ">
            <p className="text-3.5xl font-bold leading-11">
              Sorry, the link that was
            </p>
            <p className="mb-10 text-3.5xl font-bold leading-11">
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
