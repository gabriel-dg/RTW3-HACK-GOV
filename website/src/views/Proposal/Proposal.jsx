import Voter from "./Voter";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import History from "./History";
import VoteModal from "../../components/Modal/VoteModal";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Proposal() {

  const [openVote, setOpenVote] = useState(false);

  return (
    <>
      <div className="bg-indigo-600 pb-32">
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
            <Link to="/" className="text-left flex flex-row items-center mb-3">
              <ArrowLeftIcon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
              />
              <h1 className="text-2xl font-bold text-white ml-2">Overview</h1>
            </Link>
            <div className="flex flex-row justify-between text-3xl font-bold text-white mb-2">
              <p>Proposal</p>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden lg:block"
                onClick={() => setOpenVote(true)}
                //onClick={castVote}
              >
                Make a Vote
              </button>
            </div>
            <div className="flex flox-row ">
              <p className="px-2 inline-flex text-xs leading-6 font-semibold rounded-md bg-green-100 text-green-800">
                Active
              </p>
              <p className="text-white ml-2">Created May 17th, 2022</p>
            </div>
          </div>
        </header>
      </div>
      <main className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2 lg:gap-8 mb-5">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-1-title">
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                  <div className="flex flex-col justify-left text-left text-md font-medium p-4 border-b-2 mb-2 text-gray-500 rounded-md border-2">
                    <p>For Voters</p>
                    <p className="font-bold text-2xl text-black">00,000</p>
                  </div>
                  <div className="border-2 border-line border-gray-200 rounded-lg">
                    <Voter />
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                  <div className="flex flex-col justify-left text-left text-md font-medium p-4 border-b-2 mb-2 text-gray-500 rounded-md border-2">
                    <p>Against Voters</p>
                    <p className="font-bold text-2xl text-black">00,000</p>
                  </div>
                  <div className="border-2 border-line border-gray-200 rounded-lg">
                    <Voter />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8 mb-10 lg:mb-0">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                  <div className="flex flex-row justify-left text-md font-medium pb-4 border-b-2 mb-2  text-black">
                    Details
                  </div>
                  <div className="">
                    <p className="text-sm text-justify mb-3 tracking-tighter">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                      <br />
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                    <p className="text-sm text-justify  mb-3 tracking-tighter">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                    <p className="text-sm text-justify tracking-tighter">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4 h-full">
              <section aria-labelledby="section-2-title">
                <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 h-full">
                  <div className="flex flex-row justify-left text-md font-medium pb-4 border-b-2 mb-2 text-black">
                    Proposal History
                  </div>
                  <div className="">
                    <History />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-row justify-between border-t-2 border-main px-3 py-3 fixed bottom-0 bg-white rounded-t-xl w-full z-50 lg:hidden">
        <button className="text-white py-2 px-1 rounded-lg bg-indigo-600 w-full" onClick={() => setOpenVote(true)}>
          <span className="text-md">
            Make a Vote
          </span>
        </button>
      </div>
      <VoteModal openVote={openVote} setOpenVote={setOpenVote} />
    </>
  );
}
