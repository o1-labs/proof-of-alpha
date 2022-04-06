import Dropdown from '../../common/Dropdown';
const TokenPairGroup = () => {
  return (
    <div className="flex items-center">
      <span className="w-1/3 text-lg leading-loose  2xl:text-4xl">
        Token pair
      </span>
      <div className="flex w-2/3">
        <Dropdown />
      </div>
    </div>
  );
};

export default TokenPairGroup;
