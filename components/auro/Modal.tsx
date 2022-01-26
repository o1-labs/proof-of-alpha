import { Fragment, useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import BinanceModal from '../../public/assets/verify/binance-modal.png';
import ExportCursor from '../../public/assets/verify/export-cursor.png';

interface modalPropTypes {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isModalOpen, setIsModalOpen }: modalPropTypes) => {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setIsModalOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block flex-col  bg-[#0F3887] text-white w-full h-screen text-left overflow-hidden shadow-xl transform transition-all ">
              <div className="flex flex-col items-center mt-18 2xl:mt-30 3xl:mt-40">
                <div className="flex justify-around w-5/12 2xl:w-auto 3xl:w-5/12">
                  <div className="w-9/12 2xl:w-9/12 3xl:w-7/12">
                    <Dialog.Title className="text-2xl 2xl:text-4xl 3xl:text-5xl ">
                      Open Your Binance Account Profile Menu
                    </Dialog.Title>

                    <p className="text-base 2xl:text-2xl 3xl:text-3xl mt-6 2xl:mt-8 3xl:mt-10 ">
                      Select 'API Management' and generate a new key.
                    </p>
                    <div className="flex items-center justify-center mt-6 2xl:mt-18 3xl:mt-24">
                      <div className="items-center w-7/12  relative">
                        <div className="absolute -top-3 2xl:-top-5 left-4 2xl:left-4 3xl:left-9 bg-transparent z-10 border-[#00B4BF] border-[6px] 2xl:border-[10px] w-20 h-20 2xl:w-32 2xl:h-32 3xl:w-36 3xl:h-36  rounded-full "></div>

                        <Image layout="responsive" src={BinanceModal} />
                        <div className="absolute top-5 left-10 2xl:top-8 3xl:top-10 2xl:left-14  3xl:left-20 w-8 h-8 2xl:w-10 2xl:h-10">
                          <Image layout="responsive" src={ExportCursor} />
                        </div>
                        <div className="absolute bottom-14 2xl:bottom-20 3xl:bottom-24 left-6 2xl:left-11 3xl:left-14 bg-transparent z-10 border-[#00B4BF] border-[6px] 2xl:border-[10px] w-9/12 h-8 2xl:h-12 3xl:h-16 "></div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block ">
                    <button
                      type="button"
                      className=" hover:text-gray-500 focus:outline-none "
                      onClick={() => setIsModalOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon
                        className="w-8 h-8 2xl:h-10 2xl:w-10 3xl:h-12 3xl:w-12"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
