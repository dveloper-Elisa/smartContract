// hardhat.config.js
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

export default {
  solidity: "0.8.24",
  networks: {
    coretestnet: {
      url: "https://rpc.test2.btcs.network",
      chainId: 1114,
      accounts: [process.env.PRIVATE_KEY],
      type: "http",
    },
  },
};
