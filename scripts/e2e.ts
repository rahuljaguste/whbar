// @ts-nocheck
import hardhat from 'hardhat';
const {hethers} = hardhat;
async function deploy() {
    await hardhat.run('compile');

    const Whbar = await hethers.getContractFactory("WHBAR");
    const whbar = await Whbar.deploy();
    await whbar.deployed();

    const supply = await whbar.totalSupply();
    console.assert(supply == '0', "Supply should be 0");

    const name = await whbar.name();
    console.assert(name == 'Wrapped Hbar', "Name should be 'Wrapped Hbar'");

    const symbol = await whbar.symbol();
    console.assert(symbol == 'WHBAR', "Symbol should be 'WHBAR'");

    console.log('E2E passed!');
}

module.exports = deploy;
