import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import ArrowIcon from '../../public/assets/prove/arrow-icon.png';
import TwitterCard from '../../public/assets/prove/twitter-card-prove.png';
import TwitterLogo from '../../public/assets/prove/twitter-logo.png';
import MinaLogo from '../../public/assets/prove/mina-icon-primary.png';
import ProofOfTradeStatment from '../../public/assets/prove/proof-of-trade-statement.png';
// mina orange FF603B
const Prove: NextPage = () => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat text-white">
      <p>Your zk-proof has been submitted to Mina’s chain.</p>
      <a target="_blank" href={'https://minaexplorer.com/'}>
        <Image src={ArrowIcon} alt="arrow icon" />
        <TransparentButton label="VIEW PROOF IN MINA EXPLORER" />
      </a>
      <Image src={TwitterCard} alt="twitter card" />
      <Button label="TWEET IT" />

      <p>PROVE MORE PROFITS</p>

      <div>
        <Image src={MinaLogo} alt="mina logo" />
        <div>MADE ON MINA</div>
      </div>
      <p>zero-knowledge proof-powered dApps</p>
      <a target="_blank" href="https://docs.minaprotocol.com/en/snapps">
        <Button label="LEARN MORE" />
      </a>
      <div>
        <Image src={ProofOfTradeStatment} alt="proof of trade statement" />
        <Button label="SHARE IT" />

        <p>HOW WILL IT LOOK?</p>
      </div>
    </div>
  );
};

export default Prove;
