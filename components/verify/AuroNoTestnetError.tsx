import Image from 'next/image';
import ExclamationIcon from '../../public/assets/verify/finalize/exclamation-icon.png';

const AuroNoTestnetError = () => {
  return (
    <>
      <div className="flex items-center justify-end  ">
        <Image src={ExclamationIcon} alt="info" />
        <span className="text-2xl leading-loose ml-2 ">
          Auro Wallet must be connected to Snapps Testnet to continue.
        </span>
      </div>
    </>
  );
};

export default AuroNoTestnetError;
