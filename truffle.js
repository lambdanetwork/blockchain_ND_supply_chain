

const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "https://ropsten.infura.io/v3/edc52c91d64f4201b4c1c87f89d2283a";
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      // network_id: "5777",
      // port: 8545,
      network_id: "*", // Match any network id
    }
  },
  ganache: {
    host: "localhost",
    port: 8545,
    gas: 5000000,
    network_id: "*"
  },
   // Another network with more advanced options...
   rinkeby: {
    provider: () => new HDWallet(mnemonic, infuraKey),
    network_id: 4,
    gas : 6700000,
    gasPrice : 10000000000
  },

  // Useful for deploying to a public network.
  // NB: It's important to wrap the provider as a function.
  ropsten: {
    provider: () => new HDWallet(mnemonic, infuraKey),
    network_id: 3,       // Ropsten's id,
    gas: 4000000,        // Ropsten has a lower block limit than mainnet
  },

  compilers: {
    solc: {
      version: "0.5.1", 
    }
  }
};