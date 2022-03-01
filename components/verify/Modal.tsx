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
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setIsModalOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
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
            <div className="inline-block h-screen  w-full transform flex-col overflow-hidden bg-[#0F3887] text-left text-white shadow-xl transition-all ">
              <div className="mt-18 2xl:mt-30 3xl:mt-40 flex flex-col items-center">
                <div className="3xl:w-5/12 flex w-5/12 justify-around 2xl:w-auto">
                  <div className="3xl:w-7/12 w-9/12 2xl:w-9/12">
                    <Dialog.Title className="3xl:text-5xl text-2xl 2xl:text-4xl ">
                      Open Your Binance Account Profile Menu
                    </Dialog.Title>

                    <p className="3xl:text-3xl 3xl:mt-10 mt-6 text-base 2xl:mt-8 2xl:text-2xl ">
                      Select 'API Management' and generate a new key.
                    </p>
                    <div className="2xl:mt-18 3xl:mt-24 mt-6 flex items-center justify-center">
                      <div className="relative w-7/12  items-center">
                        <div className="3xl:left-9 3xl:w-36 3xl:h-36 absolute -top-3 left-4 z-10 h-20 w-20 rounded-full border-[6px] border-[#00B4BF] bg-transparent 2xl:-top-5 2xl:left-4 2xl:h-32 2xl:w-32  2xl:border-[10px] "></div>

                        <Image
                          layout="responsive"
                          src={BinanceModal}
                          alt="binance"
                        />
                        <div className="3xl:top-10 3xl:left-20 absolute top-5 left-10 h-8  w-8 2xl:top-8 2xl:left-14 2xl:h-10 2xl:w-10">
                          <Image
                            layout="responsive"
                            src={ExportCursor}
                            alt="export cursor"
                          />
                        </div>
                        <div className="3xl:bottom-24 3xl:left-14 3xl:h-16 absolute bottom-14 left-6 z-10 h-8 w-9/12 border-[6px] border-[#00B4BF] bg-transparent 2xl:bottom-20 2xl:left-11 2xl:h-12 2xl:border-[10px] "></div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block ">
                    <button
                      type="button"
                      className=""
                      onClick={() => setIsModalOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon
                        className="3xl:w-12 absolute h-8  w-8 rounded-full  hover:bg-gray-500 2xl:h-10 2xl:w-10 "
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
