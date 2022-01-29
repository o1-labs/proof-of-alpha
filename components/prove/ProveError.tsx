import Image from 'next/image';
import ZKOutlineLogo from '../../public/assets/prove/zk-outline-logo.png';
const ProveError = () => {
  return (
    <div className="flex h-screen bg-background bg-cover bg-no-repeat text-white">
      <div className="flex flex-col space-y-10 items-center w-full ">
        <div className="flex flex-col items-center justify-center w-3/6">
          <div className="mt-36 ">
            <Image src={ZKOutlineLogo} alt=" zk logo" />
          </div>
          <div className="flex flex-col items-center mt-10 ">
            <p className="text-3.5xl leading-11 font-bold">
              Sorry, the link that was
            </p>
            <p className="text-3.5xl leading-11 font-bold mb-10">
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
