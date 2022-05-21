import ViewAllBtn from "../../components/button/ViewAllBtn";

const people = [
  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },
  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },
  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },
  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },

  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },
  {
    address: "0x0000...0000",
    votes: "00'000",
    vote_weight: "00.00%",
    proposal_voted: "00'000",
  },
  // More people...
];

export default function Vote() {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-[60%]"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 text-right"
                    >
                      VOTES
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 text-right"
                    >
                      VOTE WEIGHT
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 text-right"
                    >
                      PROPOSAL VOTED
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-left">
                        {person.address}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                        {person.votes}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                        {person.vote_weight}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                        {person.proposal_voted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ViewAllBtn />
    </div>
  );
}
