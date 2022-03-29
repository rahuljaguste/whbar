// @ts-nocheck
import { NetworksUserConfig } from 'hardhat/types';
import { EtherscanConfig } from '@nomiclabs/hardhat-etherscan/dist/src/types';

export const networks: NetworksUserConfig = {
	// Use the three accounts created and logged by createAccounts script
	testnet: {
		url: '',
		consensusNodes: [
			{
				url: '0.testnet.hedera.com:50211',
				nodeId: '0.0.3'
			},
			{
				url: '1.testnet.hedera.com:50211',
				nodeId: '0.0.4'
			},
			{
				url: '2.testnet.hedera.com:50211',
				nodeId: '0.0.5'
			},
			{
				url: '3.testnet.hedera.com:50211',
				nodeId: '0.0.6'
			}
		],
		mirrorNodeUrl: 'https://testnet.mirrornode.hedera.com',
		chainId: 293,
		accounts: [
			{
				account: '0.0.34040321',
				privateKey:'0xb4afbcaa25131e90c78d32064c28b5dcbb2171aa5760a466cbc066059c4b65da'
			},
			{
				account: '0.0.34040322',
				privateKey:'0xd5bc345d25589a861a6edf6d99c67278fd262f25251c3c9eb522f182c92dc3a1',
			},
			{
				account: '0.0.34040323',
				privateKey:'0x59b2378160e73ecb92c940c251a91b1a6d90df9e516d62706b5f5e2d826f8fdc'
			}
		]
	},
	// customHederaNetwork: {
	// 	consensusNodes: [
	// 		{
	// 			url: '127.0.0.1:50211',
	// 			nodeId: '0.0.3'
	// 		},
	// 	],
	// 	mirrorNodeUrl: '1',
	// 	chainId: 0,
	//
	// 	accounts: [
	// 		{
	// 			"account": "0.0.XXXXXX",
	// 			"privateKey": "0xPrivateKey"
	// 		}
	// 	]
	// }
};

export const etherscan: EtherscanConfig = {
	// apiKey: 'YOUR-ETHERSCAN-API-KEY',
};