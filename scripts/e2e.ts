import hardhat from 'hardhat';
// @ts-ignore
const {hethers} = hardhat;
import {expect} from "chai";
import {defaultAbiCoder, getCreate2Address, keccak256} from "ethers/lib/utils";

/**
 *
 */
async function e2e() {
    await hardhat.run('compile');
    console.log(`Running E2E tests`);

    //
    const Whbar = await hethers.getContractFactory("WHBAR");
    const whbar = await Whbar.deploy();
    await whbar.deployed();
    console.log(whbar);

    const supply = await whbar.totalSupply();
    expect(hethers.BigNumber.from(supply).toNumber()).to.be.eq(0);

    const name = await whbar.name();
    expect(name).to.be.eq('Wrapped Hbar');

    const symbol = await whbar.symbol();
    expect(symbol).to.be.eq('WHBAR');

    const decimals = await whbar.decimals();
    expect(decimals).to.be.eq(8);

    const deposit = await whbar.deposit({value: 100});
    const balance = await whbar.balanceOf(deposit.from);
    expect(hethers.BigNumber.from(balance).toNumber()).to.be.gte(100);
    console.log('PASSED');
}


module.exports = e2e;
