import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import SocialBadgeSection from '../../components/result/SocialBadgeSection';
import StatementSection from '../../components/result/StatementSection';

const Prove: NextPage = () => {
  const router = useRouter();
  const { txid } = router.query;
  return (
    <>
      <SocialBadgeSection txid={txid} />
      <StatementSection txid={txid} />
    </>
  );
};

export default Prove;
