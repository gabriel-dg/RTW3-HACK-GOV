import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ProposalModal({ openProposal, setOpenProposal }) {

  return (
    <Transition.Root show={openProposal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenProposal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-sm w-full p-6">
                <div className="mb-3">
                  <div className="mt-3 text-center sm:mt-5 ">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-black"
                    >
                      Make a Proposal
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius aliquam laudantium explicabo pariatur iste
                        dolorem animi vitae error totam. At sapiente aliquam
                        accusamus facere veritatis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Proposal Title
                  </label>
                  <div className="mt-1 relative rounded-sm shadow-sm">
                    <input
                      type="text"
                      name="proposal-name"
                      id="proposal-name"
                      className="ring-1 ring-offset-0 ring-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 sm:text-sm border-gray-300 rounded-md py-2"
                      placeholder="new proposal"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="ring-1 ring-offset-0 ring-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Closing Date
                  </label>
                  <div className="mt-1 relative rounded-sm shadow-sm">
                    <input
                      type="text"
                      name="close-date"
                      id="close-date"
                      className="ring-1 ring-offset-0 ring-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 sm:text-sm border-gray-300 rounded-md py-2"
                      placeholder="new proposal"
                    />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 flex flex-row justify-between items-center">
                  <button
                    type="button"
                    className="rounded-md border  w-[48%] border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black ring-1 ring-offset-0 ring-gray-300 sm:text-sm"
                    onClick={() => setOpenProposal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-md border  w-[48%] border-transparent shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white ring-1 ring-offset-0 ring-gray-300 sm:text-sm"
                    onClick={() => setOpenProposal(false)}
                  >
                    Send Proposal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
