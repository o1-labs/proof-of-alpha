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
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';

const Finalize: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string>('returnsAndHistory');
  const [isDisabled, setIsdisabled] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>('');
  useEffect(() => {
    // if (
    //   errorType === 'wallet' ||
    //   errorType === 'testnet' ||
    //   errorType === 'tokens'
    // ) {
    //   setIsdisabled(true);
    // console.log(window.mina);
    // if (!window?.mina) {
    //   setErrorType('wallet');
    //   setIsdisabled(true);
    // }
  }, [errorType]);

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
    <div className="bg-background min-h-screen bg-cover bg-no-repeat">
      <Header />

      <div className="flex flex-col items-center">
        <div className="3xl:w-6/12 container  flex h-screen w-7/12 flex-col  md:w-6/12  2xl:w-7/12">
          <ProgressBar stage="7th" />

          <div className="3xl:space-y-14 flex h-screen flex-col space-y-3 text-white 2xl:space-y-7">
            <SubHeadLine text="FINALIZE SETTINGS" />

            <HeadLine text="How much do you want to disclose?" />
            {/* button selection */}
            <div className="mx-40 w-10/12">
              <div></div>
              <div className="flex justify-center 2xl:ml-28 2xl:justify-start">
                <div className="flex w-9/12">
                  <LightButton
                    label="RETURNS & TRADE HISTORY"
                    value="returnsAndHistory"
                    onClick={handleButtonSelection}
                    selected={activeButton === 'returnsAndHistory'}
                  />
                  <LightButton
                    label="PERCENTAGE & RETURNS ONLY"
                    value="returns"
                    onClick={handleButtonSelection}
                    buttonStyle="text-black"
                  />
                </div>
              </div>
              {/* button selection */}
              <div className="2xl:items-left mb-5 flex items-center justify-center 2xl:justify-start">
                {renderSocialBadges()}
              </div>
              {/* end social badges */}
              {/* nav buttons */}
              {/* "wallet " "testnet" 'tokens' */}
              {renderErrors(errorType)}
            </div>
            <div className="mt-10 flex justify-between">
              <Link href="/verify/review" passHref>
                <TransparentButton
                  buttonStyle="w-3/12 text-sm 2xl:text-xl 3xl:text-2xl "
                  label="<< BACK"
                />
              </Link>
              <Link href="/verify/generate">
                <Button
                  buttonStyle={`w-3/12  2xl:w-3/12 text-sm 2xl:text-base 3xl:text-base ${
                    isDisabled ? 'bg-gray-400 bg-opacity-30' : ''
                  }`}
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
