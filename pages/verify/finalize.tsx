import React, { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Button from '../../components/common/Button';
import TransparentButton from '../../components/common/TransparentButton';
import Header from '../../components/common/Header';
import LightButton from '../../components/common/LightButton';
import ReturnsAndTradeBadge from '../../components/finalize/ReturnsAndTradeBadge';
import SocialBadge from '../../components/finalize/SocialBadge';

const Finalize: NextPage = () => {
  const [activeButton, setActiveButton] = useState('returnsAndHistory');

  const renderBadges = (): React.ReactElement => {
    return activeButton === 'returnsAndHistory' ? (
      <ReturnsAndTradeBadge />
    ) : (
      <SocialBadge />
    );
  };

  const handleButtonSelection = (event: any): void => {
    setActiveButton(event.target.value);
  };
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      <Header />
      {/* progress bar */}
      <div className="container w-130  ml-80">
        <div className="flex">
          <span className="border-t-6  border-white w-130 "></span>
        </div>
        {/* progress bar end */}

        <div className="flex flex-col h-screen pr-14 space-y-11 text-white">
          <p className=" text-1.5xl  tracking-wider leading-9 mt-2">
            FINALIZE SETTINGS
          </p>

          <p className="text-5xl leading-14 font-medium ">
            How much do you want to disclose?
          </p>
          {/* button selection */}
          <div className="flex justify-center">
            <div className="flex w-122">
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
          <p className=" flex text-xl leading-12 tracking-2xlwidest justify-center">
            YOU'LL RECIEVE
          </p>
          {/* social badges */}
          {renderBadges()}

          {/* end social badges */}
          {/* nav buttons */}
          <div className="flex justify-between ">
            <Link href="/verify/review" passHref>
              <TransparentButton
                buttonStyle="w-3/12 items-start justify-start mt-18"
                label="<< BACK"
              />
            </Link>
            <Link href="/verify/generate">
              <Button buttonStyle="w-3/12 mt-18 " label="CONTINUE  >>" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalize;
