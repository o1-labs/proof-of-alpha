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
            <div className="relative inline-block h-screen w-full transform flex-col overflow-hidden bg-[#0F3887] text-left text-white shadow-xl transition-all ">
              <button
                type="button"
                className="right-18 absolute top-10"
                onClick={handleModalClose}
              >
                <span className="sr-only">Close</span>
                <XIcon
                  className="3xl:w-12 absolute h-8  w-8 rounded-full  hover:bg-gray-500 2xl:h-10 2xl:w-10 "
                  aria-hidden="true"
                />
              </button>

              <div className=" mx-auto  flex h-3/5 w-8/12 flex-col items-center justify-center space-y-14">
                <Dialog.Title className=" text-center text-2xl font-medium ">
                  Please use a desktop browser.
                </Dialog.Title>

                <p className=" text-center text-base  ">
                  Auro Wallet for Google Chrome on desktop is required to
                  proceed.
                </p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
