import "@typechain/hardhat"
// import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
// import "hardhat-gas-reporter"
import "dotenv/config"
// import "solidity-coverage"
import "hardhat-deploy"
import { HardhatUserConfig } from "hardhat/config"


// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || "privatKey"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    // rinkeby: {
    //   url: RINKEBY_RPC_URL,
    //   accounts: [PRIVATE_KEY],
    //   chainId: 4,
    // },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      // gas: 600000, // Force the GAS due to UNPREDICTABLE_GAS_LIMIT error
      // gas: 8000000,
      // gasPrice: 30000000000,
    },
  },
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  //   gasReporter: {
  //     enabled: true,
  //     currency: "USD",
  //     outputFile: "gas-report.txt",
  //     noColors: true,
  //     // coinmarketcap: COINMARKETCAP_API_KEY,
  //   },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
  //   mocha: {
  //     timeout: 200000, // 200 seconds max for running tests
  //   },
  // }
}

export default config