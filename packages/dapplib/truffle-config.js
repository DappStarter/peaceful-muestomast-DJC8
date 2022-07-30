require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember push grace option bridge sure'; 
let testAccounts = [
"0xf51f30a9ebbc9d5e2597efbe7c40575853e31121422b52031e871c55642ebcdb",
"0xba5e6836432341e1607f185b856a13de155de4b6a2d2ca2f141892e081f41866",
"0x11922e9a233e8b9a1587e42d4756c330c0fa7280d2e65131907a573d2395613f",
"0x94b18ec2e5153ba1e7d81b258d1d9e4287c473fdd661029149039e918e4d1a57",
"0xc01dd0b2491de9d28a42683d9b2565643c7d5e98055b74174dae3a8b6500946d",
"0xfce5c63bc0a44e59114c580de2df7f08d7e5e5d6eba43b5091dd55d6826138e2",
"0x2d98e6072e478ddecd959824e3cc69b8090617c39ec3f96aae609b6f90806557",
"0xe470965a3f51da0ab5c1e4afbdd62e02c220c349ffbb7bffcb11b9719ce31b14",
"0x7b3461c8f7fc80ce8f78ea083ac60c549f071ab585a7fbee37fa8c288de8910d",
"0xea6c14c95e5b28f78fe5fa251b36e3140cddacb1e9de929e2b5f056738dcd433"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


