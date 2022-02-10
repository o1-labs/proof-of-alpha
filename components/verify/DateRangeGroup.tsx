import LightButton from '../common/LightButton';

interface dateRangeGroupProps {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

const DateRangeGroup = ({
  activeButton,
  setActiveButton
}: dateRangeGroupProps) => {
  const handleButtonSelection = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setActiveButton(event.currentTarget.value);
  };
  return (
    <div className="flex items-center">
      <span className="w-1/3 text-lg leading-loose  2xl:text-4xl">
        Date range
      </span>
      <div className="flex w-2/3">
        <LightButton
          lightButtonStyle="rounded-l w-1/4 "
          label="LAST 30 DAYS"
          value="30"
          selected={activeButton === '30'}
          onClick={handleButtonSelection}
        />
        <LightButton
          lightButtonStyle="w-1/4"
          label="LAST 90 DAYS"
          value="90"
          onClick={handleButtonSelection}
        />
        <LightButton
          lightButtonStyle="w-1/4 "
          label="LAST YEAR"
          value="year"
          onClick={handleButtonSelection}
        />
        <LightButton
          lightButtonStyle="rounded-r w-1/4 "
          label="FULL HISTORY"
          value="full"
          onClick={handleButtonSelection}
        />
      </div>
    </div>
  );
};

export default DateRangeGroup;
