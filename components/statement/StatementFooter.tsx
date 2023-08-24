import Image from "next/image";
import Button from '../common/Button';
import MinaPrimary from '../../public/assets/statement/mina-icon-primary.svg';

const StatementFooter = () => {
  return (
    <div className="absolute bottom-0 mt-20  hidden h-80 w-full bg-[#79797940]  md:block md:h-1/6   lg:h-52 xl:h-72  2xl:h-1/4 3xl:h-1/4">
      <div className="flex h-full flex-col  items-center justify-center space-y-5 2xl:space-y-9  3xl:space-y-8 ">
        <div className=" flex   flex-col items-center ">
          <div className="flex w-10 items-center justify-center xl:w-12 2xl:w-16 3xl:w-auto">
            <Image
              src={MinaPrimary}
              alt="mina logo"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <p className="mt-1 w-fit text-center text-[.4rem] tracking-xlwidest text-[#FF603B] md:text-[.44rem] 2xl:text-[10px] 3xl:mt-1 3xl:text-base ">
            MADE ON MINA
          </p>
        </div>
        <p className="w-7/12 pb-3 text-center text-base tracking-widest md:w-full 2xl:text-1.5xl 3xl:pb-3 3xl:text-3xl ">
          zero-knowledge proof-powered dApps.
        </p>
        <a
          target="_blank"
          href="https://docs.minaprotocol.com/en/zkapps
          "
        >
          <Button
            label="LEARN MORE"
            buttonStyle="w-36  mb-10 md:mb-0 2xl:w-48  3xl:w-52 text-[.6rem] md:text-[.7rem] 2xl:text-base "
            secondary={true}
          />
        </a>
      </div>
    </div>
  );
};

export default StatementFooter;
