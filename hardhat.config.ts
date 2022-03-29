import '@nomiclabs/hardhat-etherscan';
import 'hardhat-abi-exporter';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import 'hardhat-hethers';
import * as config from './config.sample';
import {task} from "hardhat/config";

task('deploy', 'Deploys the Wrapped Hbar contract').setAction(async () => {
    const deployment = require('./scripts/deploy');
    await deployment();
});

task('e2e', 'E2E tests on the Wrapped Hbar contract').setAction(async () => {
    const e2e = require('./scripts/e2e');
    await e2e();
})
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.4.18"
            }
        ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    hedera: {
        networks: config.networks,
        gasLimit: 3000000
    },
    defaultNetwork: 'testnet',
    // networks: config.networks,
    etherscan: config.etherscan,
    abiExporter: {
        only: [],
        except: ['.*Mock$'],
        clear: true,
        flat: true,
    },
    gasReporter: {
        enabled: true,
    }
};