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
				account: '0.0.34055459',
				privateKey:'0x3fb15b11e402b39359f3dc5d47bae3eaaeb148e5bc73f572244e6f5701e37d97'
			},
			{
				account: '0.0.34055460',
				privateKey:'0x1bd5adb0f6b733927ab06ae5080103b0518e40f7fe99233833c5e567b218aa2a',
			},
			{
				account: '0.0.34055461',
				privateKey:'0x9ae98a83a04f8ef2420b9edf4751a1acd7f0abec14e24ff23ef9345158ff74e7'
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