import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import abiGoverorContract from '../../utils/GovernorContract.json';
import { ethers } from 'ethers';

export default function VoteModal({ openVote, setOpenVote }) {

  // Contract Address & ABI
	const contractAddress = '0x41cD0081A4238cA4650A9e270862FaA381228256';
	const contractABI = abiGoverorContract.abi;

  // Component state
  const [proposalId, setProposalId] = useState('');
  const [support, setSupport] = useState('');

  const onPrososalIdChange = event => {
		setProposalId(event.target.value);
	};

	const onSupportChange = event => {
		setSupport(event.target.value);
	};

	const castVote = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum, 'any');
				const signer = provider.getSigner();
				const castAVote = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);

				console.log('Casting vote..');
				const voteTxn = await castAVote.castVote(
					proposalId ? proposalId : '8675157045210188095939651687520189040298190610588400476265601774853121372048',
					support ? support : '1'
				);

				await voteTxn.wait();

				console.log('mined ', voteTxn.hash);

				console.log('Vote casted!');

				// Clear the form fields.
				setProposalId('');
				setSupport('');
			}
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <Transition.Root show={openVote} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenVote}>
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
                      Make a Vote
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Proposal ID
                  </label>
                  <div className="mt-1 relative rounded-sm shadow-sm">
                    <input
                      type="text"
                      name="proposal-name"
                      id="proposal-name"
                      className="ring-1 ring-offset-0 ring-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 sm:text-sm border-gray-300 rounded-md py-2"
                      placeholder="Please enter the proposal ID"
                      onChange={onPrososalIdChange}
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 flex flex-row justify-between items-center">
                  <button
                    type="button"
                    className="rounded-md border  w-[48%] border-transparent shadow-sm px-4 py-2 bg-[#D64541] text-base font-medium text-white ring-1 ring-offset-0 ring-gray-300 sm:text-sm"
                    onChange={() => onSupportChange('0')}
                    onClick={castVote}
                  >
                    Vote Against
                  </button>
                  <button
                    type="button"
                    className="rounded-md border  w-[48%] border-transparent shadow-sm px-4 py-2 bg-[#3FC380] text-base font-medium text-white ring-1 ring-offset-0 ring-gray-300 sm:text-sm"
                    onChange={() => onSupportChange('1')}
                    onClick={castVote}
                  >
                    Vote For
                  </button>
                </div>
                <div className="mt-5 sm:mt-6 flex flex-row justify-between items-center">
                  <button
                    type="button"
                    className="rounded-md border  w-full border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black ring-1 ring-offset-0 ring-gray-300 sm:text-sm"
                    onClick={() => setOpenVote(false)}
                  >
                    Cancel
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
