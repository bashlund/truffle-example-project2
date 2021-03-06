const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider')
const SuperProvider = require('./superprovider.js');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() { return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY) },
      gasPrice: 4000000000,
      network_id: '4'
    },
    rinkeby_metamask: {
        provider: () => {
            return new SuperProvider(process.env.SUPERBLOCKS_SESSIONID, process.env.SUPERBLOCKS_ADDRESS, {proxyUrl: process.env.WEB3_ENDPOINT})
        },
        gasPrice: 4000000000,
        network_id: '4'
    },
    ropsten: {
      provider: function() { return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY) },
      gasPrice: 4000000000,
      network_id: '3'
    },
    ropsten_metamask: {
        provider: () => {
            return new SuperProvider(process.env.SUPERBLOCKS_SESSIONID, process.env.SUPERBLOCKS_ADDRESS, {proxyUrl: process.env.WEB3_ENDPOINT})
        },
        gasPrice: 4000000000,
        network_id: '3'
    }
  }
};
