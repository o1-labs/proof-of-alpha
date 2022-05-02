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
import RightStamp from '../../public/assets/home/stamp-right.png';
import { useState } from 'react';

type sectionCopyType = 'exchange' | 'choice' | 'data';

const ExchangeTradeSection = () => {
  const [copySection, setCopySection] = useState<sectionCopyType>('exchange');

  const renderSectionCopy = (section: sectionCopyType) => {
    switch (section) {
      case 'exchange':
        return <ExchangeTradeSectionCopy />;
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
        <div className="mx-auto  flex items-center justify-center  space-x-3 md:w-auto md:space-x-5 2xl:space-x-12">
          <div className="hidden w-1/2 lg:block">
            <div className="hidden md:-ml-[200px] md:block md:w-[300px]  xl:-ml-[365px]  xl:w-[650px] 3xl:-ml-[560px]  3xl:w-[1013px]">
              <Image src={TwitterCard} alt="Twitter Card" priority />
            </div>
          </div>

          <div className="flex h-screen flex-col items-center justify-center ">
            <div className="flex items-center  md:w-auto md:space-x-12 2xl:space-x-24 ">
              <div
                className={` mb-14   flex w-14 items-center  md:mb-0 md:h-40 md:w-40 ${
                  copySection === 'exchange' ? 'invisible' : ''
                }`}
              >
                <ArrowButton
                  arrowDirection="left"
                  onClick={() => handleBackwardClick(copySection)}
                />
              </div>
              <div className="w-[275px] flex-col md:space-y-11 xl:w-[400px] 2xl:w-[420px] 3xl:w-115">
                <div className="h-80 md:h-[420px] 3xl:h-108">
                  {renderSectionCopy(copySection)}
                </div>

                <div className="mt-24 flex flex-col items-center justify-center space-y-9 pr-10 md:mt-40 md:flex-row md:justify-between md:space-y-0">
                  <Link href={'/get-started'} passHref>
                    <Button
                      buttonStyle="px-20 w-40 h-10 md:w-1/3 xl:h-12 text-xs xl:text-sm 2xl:text-sm 3xl:text-xl 3xl:w-64 3xl:h-16 2xl:w-1/3 2xl:h-12 xl:1/3"
                      label="NEXT"
                    />
                  </Link>
                  <Indicator section={copySection} />
                </div>
              </div>
              <div
                className={`relative mb-14 flex items-center  md:mb-0 md:h-40 md:w-40 ${
                  copySection === 'data' ? 'invisible' : ''
                }`}
              >
                <ArrowButton
                  arrowDirection="right"
                  onClick={() => handleForwardClick(copySection)}
                />
              </div>
            </div>
          </div>
          <div
            className={`absolute right-0 hidden  xl:block ${
              copySection === 'data' ? '' : 'xl:invisible'
            }`}
          >
            <Image src={RightStamp} alt="Stamp" priority />
          </div>
          {/* end container */}
        </div>
      </div>
    </Layout>
  );
};

export default ExchangeTradeSection;
