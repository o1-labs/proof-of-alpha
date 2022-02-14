import { Fragment, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

interface modalPropTypes {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isModalOpen, setIsModalOpen }: modalPropTypes) => {
  const router = useRouter();
  const handleModalClose = () => {
    setIsModalOpen(false);
    router.push('/auro');
  };
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleModalClose}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-700"
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
                <div className="3xl:w-7/12 flex w-7/12 justify-around 2xl:w-auto">
                  <div className="3xl:w-7/12 w-9/12 2xl:w-9/12">
                    <Dialog.Title className="3xl:text-5xl text-2xl 2xl:text-4xl ">
                      Please use a desktop browser.
                    </Dialog.Title>

                    <p className="3xl:text-3xl 3xl:mt-10 mt-6 text-base 2xl:mt-8 2xl:text-2xl ">
                      Auro Wallet for Google Chrome on desktop is required to
                      proceed.
                    </p>
                  </div>

                  <div className="hidden sm:block ">
                    <button
                      type="button"
                      className=""
                      onClick={handleModalClose}
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
