import { Disclosure} from "@headlessui/react";
import { Fragment, useState } from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import WalletConnect from "../components/Modal/WalletConnect";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  //{ name: "Vote", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  // Component state
  const [open, setOpen] = useState(false);
	const [currentAccount, setCurrentAccount] = useState('');

	// Wallet connection logic
	const isWalletConnected = async () => {
		try {
			const { ethereum } = window;

			const accounts = await ethereum.request({ method: 'eth_accounts' });
			console.log('accounts: ', accounts);

			if (accounts.length > 0) {
				const account = accounts[0];
				console.log('wallet is connected! ' + account);
			} else {
				console.log('make sure MetaMask is connected');
			}
		} catch (error) {
			console.log('error: ', error);
		}
	};

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log('please install MetaMask');
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts'
			});

			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <div className="bg-indigo-600">
      <Disclosure
        as="nav"
        className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                <div className="px-2 flex items-center lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden lg:block lg:ml-10">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-indigo-700 text-white"
                              : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                            "rounded-md py-2 px-3 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block lg:ml-10">

                  {currentAccount ? (
                    <p className="font-bold text-white">
                      ✅ {currentAccount}
                    </p>
          		    ) : (
            		    //<button className="w-full rounded-lg bg-[#d0bb94] mt-10 py-3 text-l font-semibold hover:bg-[#ac7b58] text-white" type="button" onClick={connectWallet}> Connect your wallet </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={connectWallet}
                    >
                      Connect Wallet
                    </button>
				          )}

                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-700 text-white"
                        : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setOpen(true)}
              >
                Connect Wallet
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <WalletConnect open={open} setOpen={setOpen}/>
    </div>
  );
}
