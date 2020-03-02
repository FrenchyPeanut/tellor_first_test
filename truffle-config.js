const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "girl inside hen profit demand stereo fashion word mom sport laundry grunt";
//console.log("mnemonic1", mnemonic1)

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6721975, // default ganache-cli value
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/d46032dfaaf04137b7b350656b98a3e6'),
      network_id: 4,
    },
    // mainnet: {
    //   provider: () =>
    //     new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${accessToken}`),
    //   network_id: 1,
    //   gas: 4700000,
    //   gasPrice: 4000000000,
    // },
    mocha: {
      enableTimeouts: false,
      before_timeout: 210000, // Here is 2min but can be whatever timeout is suitable for you.
    },
  }
};