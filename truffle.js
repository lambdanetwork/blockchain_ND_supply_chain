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
  compilers: {
    solc: {
      version: "0.5.1", 
    }
  }
};