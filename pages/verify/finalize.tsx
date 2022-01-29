import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import LightButton from '../../components/common/LightButton';
import ReturnsAndTradeBadge from '../../components/finalize/ReturnsAndTradeBadge';
import SocialBadge from '../../components/finalize/SocialBadge';

import AuroNoWalletError from '../../components/verify/AuroNoWalletError';
import AuroNoTestnetError from '../../components/verify/AuroNoTestnetError';
import AuroNoTokensError from '../../components/verify/AuroNoTokensError';

const Finalize: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string>('returnsAndHistory');
  const [isDisabled, setIsdisabled] = useState<boolean>(false);
  useEffect(() => {
    // if (
    //   errorType === 'wallet' ||
    //   errorType === 'testnet' ||
    //   errorType === 'tokens'
    // ) {
    //   setIsdisabled(true);
  }, []);

  const renderSocialBadges = (): React.ReactElement => {
    return activeButton === 'returnsAndHistory' ? (
      <ReturnsAndTradeBadge />
    ) : (
      <SocialBadge />
    );
  };

  const handleButtonSelection = (event: any): void => {
    setActiveButton(event.target.value);
  };

  const renderErrors = (errorType?: string) => {
    switch (errorType) {
      case 'wallet':
        return <AuroNoWalletError visible={true} />;
        break;
      case 'testnet':
        return <AuroNoTestnetError visible={true} />;
      case 'tokens':
        return <AuroNoTokensError visible={true} />;
      default:
        break;
    }
  };
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col  w-7/12 md:w-6/12 3xl:w-6/12 2xl:w-7/12  container  h-screen">
          <div className="flex">
            <span className="border-t-6  border-white w-full "></span>
          </div>
          {/* progress bar end */}

          <div className="flex flex-col h-screen space-y-3 2xl:space-y-7 3xl:space-y-14 text-white">
            <p className="text-sm 2xl:text-lg 3xl:text-xl tracking-wider mt-2">
              FINALIZE SETTINGS
            </p>
            <p className="text-1.5xl 2xl:text-4xl 3xl:text-4xl font-medium ">
              How much do you want to disclose?
            </p>
            {/* button selection */}
            <div className="flex justify-center 2xl:justify-start 2xl:ml-28">
              <div className="flex w-8/12">
                <LightButton
                  label="RETURNS & TRADE HISTORY"
                  value="returnsAndHistory"
                  onClick={handleButtonSelection}
                />
                <LightButton
                  label="PERCENTAGE & RETURNS ONLY"
                  value="returns"
                  onClick={handleButtonSelection}
                />
              </div>
            </div>
            {/* button selection */}
            <div className="flex items-center 2xl:items-left justify-center 2xl:justify-start mb-5">
              {renderSocialBadges()}
            </div>
            {/* end social badges */}
            {/* nav buttons */}
            {/* "wallet " "testnet" 'tokens' */}
            {renderErrors()}
            <div className="flex justify-between mt-10">
              <Link href="/verify/review" passHref>
                <TransparentButton
                  buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl "
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/generate">
                <Button
                  buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl"
                  label="CONTINUE  >>"
                  disabled={isDisabled}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalize;
