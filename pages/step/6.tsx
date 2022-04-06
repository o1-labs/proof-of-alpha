import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Header from '../../components/common/Header';
import LightButton from '../../components/common/LightButton';
import ReturnsAndTradeBadge from '../../components/step/6/ReturnsAndTradeBadge';
import SocialBadge from '../../components/step/6/SocialBadge';
import AuroNoWalletError from '../../components/step/6/AuroNoWalletError';
import AuroNoTestnetError from '../../components/step/6/AuroNoTestnetError';
import AuroNoTokensError from '../../components/step/6/AuroNoTokensError';
import ProgressBar from '../../components/common/ProgressBar';
import SubHeadLine from '../../components/common/SubHeadLine';
import HeadLine from '../../components/common/HeadLine';
import Layout from '../../components/common/Layout';
import VerifyBottomNavButtons from '../../components/common/VerifyBottomNavButtons';

const Finalize: NextPage = () => {
  const [activeButton, setActiveButton] = useState<string>('returnsAndHistory');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
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

  const handleButtonSelection = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setActiveButton(event.currentTarget.value);
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
    <Layout backGroundColor="gradient" layoutStyle="min-container h-2*screen">
      <Header />

      <div className="flex flex-col items-center">
        <div className="container flex  h-screen w-7/12 flex-col md:w-6/12  2xl:w-7/12  3xl:w-6/12">
          <ProgressBar stage="7th" />

          <div className="flex h-4/6 flex-col space-y-3 text-white 2xl:space-y-7 3xl:space-y-14">
            <SubHeadLine text="FINALIZE SETTINGS" />

            <HeadLine
              text="How much do you want to disclose?"
              headLineStyle="2xl:pb-10 3xl:pb-4"
            />
            {/* button selection */}
            <div className=" mx-auto flex w-11/12 flex-col lg:w-9/12">
              <div className="flex justify-center  2xl:justify-start">
                <div className="flex w-[1000px] lg:w-full">
                  <LightButton
                    label="RETURNS & TRADE HISTORY"
                    lightButtonStyle="rounded-l-sm "
                    value="returnsAndHistory"
                    onClick={handleButtonSelection}
                    selected={activeButton === 'returnsAndHistory'}
                  />
                  <LightButton
                    label="PERCENTAGE RETURNS ONLY"
                    lightButtonStyle="rounded-r-sm"
                    value="returns"
                    onClick={handleButtonSelection}
                    buttonStyle="text-black"
                  />
                </div>
              </div>
              {/* button selection */}
              <div className="2xl:items-left mt-5 flex items-center justify-center  2xl:mt-5  ">
                {renderSocialBadges()}
              </div>

              {/* "wallet" "testnet" 'tokens' */}
            </div>
          </div>

          <div className="flex flex-col  xl:pt-90  2xl:space-y-4 3xl:space-y-7 ">
            {renderErrors(errorType)}
            <VerifyBottomNavButtons
              backNavLink="/step/5"
              continueNavLink="/step/send-transaction"
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Finalize;
