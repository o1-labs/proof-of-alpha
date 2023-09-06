'use client';
import type { NextPage } from 'next';
import SocialBadgeSection from '../../../components/result/SocialBadgeSection';
import StatementSection from '../../../components/result/StatementSection';

interface resultPropTypes {
  params: { txid: string };
}

const Prove: NextPage<resultPropTypes> = ({ params }) => {
  const { txid } = params;
  return (
    <>
      <SocialBadgeSection txid={txid} />
      <StatementSection txid={txid} />
    </>
  );
};

export default Prove;
