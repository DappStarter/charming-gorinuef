require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain unknown include enter outer sleep'; 
let testAccounts = [
"0xd5749d0d840bde42edf7f789d0a8a1fd7564329f6d3a8121bf3bbc58967f9be0",
"0x43f016d382e87d1180902b619abeb706a4af71284915ff16d4c3b4a92e862583",
"0x5e0c59b3ed33bd1a6c34d6061af594a6f7315a12ac75a6a704194092129d0013",
"0x892a83e66c1bf74692f4e355744f73abf956ff77699fabacc946c398b4cc244d",
"0xb438f1f92a3b5cc7253f88f3f5b41d8e6ec61c567c816b67122893616389b155",
"0x978a7ab62589fe6e99639b1b3ac6cf60dbe424d4b537465148f7285cd2124e42",
"0x5ce6ac0da029cddbb2f275ca6269c9413b0a8a6bf9b70fe6198aa63a1849ea94",
"0xa9f19764afac5583d0c94deac59a65222002625fe356a7bdafcead5547f52832",
"0xe1d2609f30237b89386ef7e816e9c536c64b8274b4db82f9ce3a19d135d99c38",
"0xd95acea5180357b0488d842157926290c57bf5fb62afa0d20b9e8dd97c670865"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
