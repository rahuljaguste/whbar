import {NetworksUserConfig} from 'hardhat/types';
import {EtherscanConfig} from '@nomiclabs/hardhat-etherscan/dist/src/types';

export const networks: NetworksUserConfig = {
    testnet: {
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
            // @ts-ignore
            {
                account: '0.0.34055460',
                privateKey: '0x1bd5adb0f6b733927ab06ae5080103b0518e40f7fe99233833c5e567b218aa2a',
            },
            // @ts-ignore
            {
                account: '0.0.34055461',
                privateKey: '0x9ae98a83a04f8ef2420b9edf4751a1acd7f0abec14e24ff23ef9345158ff74e7'
            }
        ]
    },
};

export const etherscan: EtherscanConfig = {};