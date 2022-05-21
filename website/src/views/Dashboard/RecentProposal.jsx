import { CalendarIcon, UsersIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import ViewAllBtn from '../../components/button/ViewAllBtn';
import abiGoverorContract from '../../utils/GovernorContract.json';
import { ethers } from 'ethers';

export default function RecentProposal() {

  // Contract Address & ABI
	const contractAddress = '0x41cD0081A4238cA4650A9e270862FaA381228256';
	const contractABI = abiGoverorContract.abi;

  //const onPrososalIdChange = event => {
		//setProposalId(event.target.value);
	//};

  const listProposals = async (idPositions) => {
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
        
        //let idProposals = "";

        idPositions = idPositions - 1;

        console.log('Listing Proposals..');
        const filters = await ListAProposal.filters.ProposalCreated();
        const logs = await ListAProposal.queryFilter(filters, 26377101, 26391488);

        console.log("-- Proposal 0 --")
        console.log(logs[0].address);
        console.log(logs[0].transactionHash)
        console.log(logs[0].args[8])

        console.log("On fait des tests")
        console.log(logs[idPositions].address)
        //idProposals = logs[idPositions].transactionHash.toString();

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

  const positions = [
    {
      id: 1,
      title: 'Proposal',
      type: 'Active',
      department: "00'000",
      closeDate: '2022-05-23',
      closeDateFull: 'May 25, 2022',
    }
  ]
  
  const onDisplay = async () => {
    const output = await listProposals(1);
    console.log("transactionHash: " + output)
  }
  //console.log("LFG " + listProposals(1).then());
  console.log(onDisplay());
  

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <Link to='/proposal' className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{position.title}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-sm bg-green-100 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ViewAllBtn />
    </div>
  )
}