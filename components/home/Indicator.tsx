interface indicatorPropTypes {
  page: 'first' | 'second' | 'third';
}

/**
 * @param {string} page  String to indicate which indicator point is highlighted either 'first' | 'second' | 'third'.
 */

const Indicator = ({ page }: indicatorPropTypes) => {
  return (
    <div className="flex justify-end md:w-1/2">
      <div className="3xl:mx-6 mx-3 xl:mx-4">
        <div
          className={`${
            page === 'first' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } 3xl:w-4 3xl:h-4 h-3 w-3 rounded-full`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            page === 'second' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } 3xl:w-4 3xl:h-4 h-3 w-3 rounded-full`}
        ></div>
      </div>
      <div className="mx-3 md:mx-6">
        <div
          className={`${
            page === 'third' ? 'bg-white' : 'bg-custom-gray-indicator-dot'
          } 3xl:w-4 3xl:h-4 h-3 w-3 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default Indicator;
