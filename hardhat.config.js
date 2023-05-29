require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || ""
const infuraKey = process.env.INFURA_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: privateKeys.split(','),
    }
  },
};
