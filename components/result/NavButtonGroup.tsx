interface navButtonGroupProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

const NavButtonGroup = ({
  activeButton,
  setActiveButton
}: navButtonGroupProps) => {
  return (
    <div className="absolute top-30 left-10 lg:top-32 xl:top-30 xl:left-40 2xl:top-40 2xl:left-0 3xl:top-52 3xl:-left-86">
      <a href="#social">
        <div
          onClick={(event) => {
            event.preventDefault;
            setActiveButton('socialBadge');
          }}
          className={` mb-1 flex h-[36px] w-[130px] items-center bg-[#FFFFFF1A] py-4 pl-3 text-[.6rem] font-extralight text-white hover:bg-white hover:bg-opacity-20 xl:h-[38px] xl:w-[180px]  xl:pl-5 xl:text-xs 2xl:h-[48px] 2xl:w-[280px] 3xl:h-[48px] 3xl:w-[280px] ${
            activeButton === 'socialBadge' ? 'border-l-4 ' : 'border-l-0'
          }`}
        >
          SOCIAL BADGE
        </div>
      </a>
      <a href="#trade">
        <div
          onClick={(event) => {
            event.preventDefault;
            setActiveButton('tradeStatement');
          }}
          className={` mb-1 flex h-[36px] w-[130px] items-center bg-[#FFFFFF1A] py-4 pl-3 text-[.6rem] font-extralight text-white hover:bg-white hover:bg-opacity-20 xl:h-[38px] xl:w-[180px]  xl:pl-5 xl:text-xs 2xl:h-[48px] 2xl:w-[280px] 3xl:h-[48px] 3xl:w-[280px] ${
            activeButton == 'tradeStatement' ? 'border-l-4' : 'border-l-0'
          } `}
        >
          TRADE STATEMENT
        </div>
      </a>
    </div>
  );
};

export default NavButtonGroup;
