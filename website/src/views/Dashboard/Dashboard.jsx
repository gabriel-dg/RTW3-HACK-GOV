import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import RecentProposal from "./RecentProposal";
import ProposalModal from "../../components/Modal/ProposalModal";
import Vote from "./Vote";
import abiGoverorContract from '../../utils/GovernorContract.json';
import { ethers } from 'ethers';

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  //{ name: "Vote", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {

  // Contract Address & ABI
	const contractAddress = '0x41cD0081A4238cA4650A9e270862FaA381228256';
	const contractABI = abiGoverorContract.abi;

  // Component state
  const [openProposal, setOpenProposal] = useState(false);

  const listProposals = async () => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, 'any');
        const signer = provider.getSigner();
        const ListAProposal = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log('Listing Proposals..');
        const filters = await ListAProposal.filters.ProposalCreated();
        const logs = await ListAProposal.queryFilter(filters, 26377101, 26391488);

        console.log("-- Proposal 0 --")
        console.log(logs[0].address);
        console.log(logs[0].transactionHash)
        console.log(logs[0].args[8])

        console.log("-- Proposal 1 --")
        console.log(logs[1].address);
        console.log(logs[1].transactionHash)
        console.log(logs[1].args[8])

        console.log("-- Proposal 2 --")
        console.log(logs[2].address);
        console.log(logs[2].transactionHash)
        console.log(logs[2].args[8])
  
        console.log('Proposals listed!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  listProposals();

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full bg-gray-200">
        <div className="bg-indigo-600 pb-32">
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between">
              <h1 className="text-3xl font-bold text-white">
                Governance Overview
              </h1>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden lg:block"
                onClick={() => setOpenProposal(true)}
              >
                Make a new proposal
              </button>
            </div>
          </header>
        </div>

        <main className="-mt-32  mb-10 lg:mb-0">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 mb-5">
              <div className="flex flex-row justify-left text-md font-medium pb-4 border-b-2 mb-2 text-gray-500">
                Recent Proposals
              </div>
              <div className="border-2 border-line border-gray-200 rounded-lg">
                <RecentProposal />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="flex flex-row justify-left text-md font-medium pb-4 border-b-2 mb-2 text-gray-500">
                Top Addresses By Votes
              </div>
              <div className="border-2 border-line border-gray-200 rounded-lg">
                <Vote />
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
        <div className="flex flex-row justify-between border-t-2 border-main px-3 py-3 fixed bottom-0 bg-white rounded-t-xl w-full z-50 lg:hidden">
          <button
            className="text-white py-2 px-1 rounded-lg bg-indigo-600 w-full"
            onClick={() => setOpenProposal(true)}
          >
            <span className="text-md">Make a new proposal</span>
          </button>
        </div>
        <ProposalModal
          openProposal={openProposal}
          setOpenProposal={setOpenProposal}
        />
      </div>
    </>
  );
}
