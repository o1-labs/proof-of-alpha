const DataSection = () => {
  return (
    <div className="mx-auto w-11/12 md:mx-0 md:mb-32 md:w-auto">
      <p className="mb-14 text-center  text-xl  md:text-left lg:text-4xl 2xl:mb-14 3xl:mb-16 3xl:text-6xl">
        Your Data Stays Private
      </p>
      {/* 3xl:text-4xl xl:text-2xl */}
      <p className="mb-5 text-base leading-loose md:leading-11 xl:text-2xl  2xl:mb-10 3xl:mb-12 3xl:text-4xl">
        We are a team of engineers, cryptographers, and crypto traders.
      </p>
      <p className="text-base leading-loose md:leading-11 xl:text-2xl  2xl:mb-10 3xl:mb-12 3xl:text-4xl">
        We use zero-knowledge proofs to ensure the privacy of your data.
      </p>
      <p className="my-4 text-base leading-loose md:leading-11  xl:text-2xl 3xl:text-4xl">
        Whether your account is anon or KYC'ed, your data will stay private.
      </p>
    </div>
  );
};

export default DataSection;
