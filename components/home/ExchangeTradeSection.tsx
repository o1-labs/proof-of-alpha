import Link from 'next/link';
import Image from 'next/image';
import Layout from '../common/Layout';
import Button from '../common/Button';
import Indicator from './Indicator';
import TwitterCard from '../../public/assets/common/twitter-card.png';
import ArrowButton from '../common/ArrowButton';
import ExchangeTradeSectionCopy from './ExchangeTradeSectionCopy';
import ChoiceSectionCopy from './ChoiceSectionCopy';
import DataSectionCopy from './DataSectionCopy';

import { useState } from 'react';

type sectionCopyType = 'exchange' | 'choice' | 'data';

const ExchangeTradeSection = () => {
  const [copySection, setCopySection] = useState<sectionCopyType>('exchange');

  const renderSectionCopy = (section: sectionCopyType) => {
    switch (section) {
      case 'exchange':
        return <ExchangeTradeSectionCopy />;
        break;
      case 'choice':
        return <ChoiceSectionCopy />;
      case 'data':
        return <DataSectionCopy />;
      default:
        break;
    }
  };

  const handleForwardClick = (section: sectionCopyType) => {
    switch (section) {
      case 'exchange':
        return setCopySection('choice');
        break;
      case 'choice':
        return setCopySection('data');
      default:
        break;
    }
  };

  const handleBackwardClick = (section: sectionCopyType) => {
    switch (section) {
      case 'choice':
        return setCopySection('exchange');
      case 'data':
        return setCopySection('choice');
      default:
        break;
    }
  };

  return (
    <Layout
      backGroundColor="red"
      layoutStyle="-mt-3 flex h-screen md:h-screen relative"
      id="exchange"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative  mx-auto  flex items-center justify-center  space-x-3 md:w-auto md:space-x-20">
          <div className="hidden w-1/2 md:block">
            <div className="relative -ml-[560px]  hidden w-[1013px]  md:block">
              <Image src={TwitterCard} alt="Twitter Card" priority />
            </div>
          </div>
          {/* old code location  */}
          <div className="flex h-screen flex-col items-center justify-center ">
            <div className="flex items-center  md:w-auto  md:space-x-24 ">
              <div className="relative mb-14   flex w-14 items-center  md:mb-0 md:h-40 md:w-40">
                <ArrowButton
                  arrowDirection="left"
                  navLink="/#exchange"
                  onClick={() => handleBackwardClick(copySection)}
                />
              </div>
              <div className="w-[275px] flex-col md:space-y-11 xl:w-[400px] 2xl:w-[420px] 3xl:w-115">
                {renderSectionCopy(copySection)}

                <div className="mt-24 flex flex-col items-center justify-center space-y-9 pr-10 md:mt-40 md:flex-row md:justify-between md:space-y-0">
                  <Link href={'/start'} passHref>
                    <Button
                      buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-1/3 2xl:h-12 xl:1/3"
                      label="NEXT"
                    />
                  </Link>
                  <Indicator page="second" />
                </div>
              </div>
              <div className="relative mb-14  flex  items-center  md:mb-0 md:h-40 md:w-40">
                <ArrowButton
                  arrowDirection="right"
                  navLink="/learn/data"
                  onClick={() => handleForwardClick(copySection)}
                />
              </div>
            </div>
          </div>

          {/* old code location */}
          {/* end container */}
        </div>
      </div>
    </Layout>
  );
};

export default ExchangeTradeSection;

// <div className="invisible relative mb-14 flex   w-14 items-center md:mb-0  md:hidden md:h-40 md:w-40">
//   <ArrowButton arrowDirection="left" navLink="/#exchange" />
// </div>
// {/* container */}
// <div className="mx-auto  flex h-screen w-full flex-col  justify-center md:items-center  md:space-y-5  xl:w-[500px] 2xl:w-99 3xl:w-6/12">
//   <div className=" flex  flex-col ">
//     {/* copy section */}
//     <ExchangeTradeSectionCopy />
//     {/* end copy section */}

//     {/* indicator button group  */}
//     <div className="mt-20 flex flex-col items-center justify-center space-y-9 md:mt-32 md:flex-row md:justify-between md:space-y-0">
//       <Link href={'/start'} passHref>
//         <Button
//           buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs 2xl:text-base 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-40 2xl:h-12 xl:w-38"
//           label="NEXT"
//         />
//       </Link>
//       <Indicator page="first" />
//     </div>
//     {/* end indicator button group */}
//   </div>
// </div>

// <div
//   className=" relative mb-14 flex w-14  items-center md:mb-0 md:mr-0
//     md:h-40 md:w-40 "
// >
//   <ArrowButton arrowDirection="right" navLink="/learn" />
// </div>
