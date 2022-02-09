const NavButtonGroup = ({ activeButton, setActiveButton }) => {
  console.log('active b', activeButton);
  return (
    <div className="3xl:top-52 3xl:-left-86 absolute top-24 left-14 2xl:top-36 2xl:-left-36">
      <a href="#social">
        <div
          onClick={setActiveButton('socialBadge')}
          className={`3xl:w-[280px] 3xl:h-[48px] mb-1 h-[38px] w-[180px] bg-[#FFFFFF1A] py-3 pl-5 text-xs font-extralight text-white hover:border-l-2 active:border-l-2 2xl:h-[48px] 2xl:w-[280px] ${
            activeButton === 'socialBadge' ? 'border-l-2 ' : ''
          }`}
        >
          SOCIAL BADGE
        </div>
      </a>
      <a href="#trade">
        <div
          onClick={setActiveButton('')}
          className={`3xl:w-[280px] 3xl:h-[48px] mb-1 h-[38px] w-[180px] bg-[#FFFFFF1A] py-3 pl-5 text-xs font-extralight text-white  hover:border-l-2 active:border-l-2 2xl:h-[48px] 2xl:w-[280px] ${
            activeButton == 'tradeStatment' ? 'border-l-2' : ''
          } `}
        >
          TRADE STATEMENT
        </div>
      </a>
    </div>
  );
};

export default NavButtonGroup;
