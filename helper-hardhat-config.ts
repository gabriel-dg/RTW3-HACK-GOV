// export interface networkConfigItem {
//     ethUsdPriceFeed?: string
//     blockConfirmations?: number
//   }

//   export interface networkConfigInfo {
//     [key: string]: networkConfigItem
//   }

//   export const networkConfig: networkConfigInfo = {
//     localhost: {},
//     hardhat: {},
//     // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
//     // Default one is ETH/USD contract on Kovan
//     kovan: {
//       blockConfirmations: 6,
//     },
//   }

export const developmentChains = ["hardhat", "localhost"]
export const proposalsFile = "proposals.json"

// Governor Values
export const QUORUM_PERCENTAGE = 5 // Need 5% of voters to pass
// export const MIN_DELAY = 3600 // 1 hour - after a vote passes, you have 1 hour before you can enact
export const MIN_DELAY = 86400 // 1 day - after a vote passes, you have 1 day before you can enact
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 6545 // blocks
export const VOTING_DELAY = 1 // 1 Block - How many blocks till a proposal vote becomes active
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"

export const NEW_STORE_VALUE = 30
export const FUNC = "store"
export const PROPOSAL_DESCRIPTION = "Proposal #2: Vote for 30 in the Box!"