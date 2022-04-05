import { Fragment, Dispatch, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Button from '../common/Button';
import Link from 'next/link';

interface modalPropTypes {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isModalOpen, setIsModalOpen }: modalPropTypes) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleModalClose}
      >
        <div
          className="
         flex min-h-screen  items-end justify-center 
          "
        >
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
            className=" inline-block h-screen align-middle"
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
            <div className="relative inline-block h-screen w-full transform flex-col overflow-hidden bg-[#954562] text-left text-white shadow-xl transition-all ">
              <button
                type="button"
                className="absolute right-18 top-10"
                onClick={handleModalClose}
              >
                <span className="sr-only">Close</span>
                <XIcon
                  className="absolute h-8 w-8  rounded-full hover:bg-gray-500  2xl:h-10 2xl:w-10 3xl:w-12 "
                  aria-hidden="true"
                />
              </button>

              <div className="  flex h-screen  items-center justify-center align-middle">
                <div className=" mx-auto w-8/12   space-y-14">
                  <Dialog.Title className=" text-center text-3xl font-normal ">
                    Please use a desktop browser.
                  </Dialog.Title>

                  <p className=" text-center text-3xl font-extralight  ">
                    Auro Wallet for Google Chrome on desktop is required to
                    complete this experience.
                  </p>
                  <Link href={'/step/install-auro'} passHref>
                    <Button
                      buttonStyle="w-10/12 h-10 text-xs mx-auto"
                      label="PROCEED ANYWAY"
                    />
                  </Link>
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
