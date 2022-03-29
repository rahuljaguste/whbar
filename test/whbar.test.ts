// @ts-nocheck
import hardhat from 'hardhat';
const {hethers} = hardhat;
import {expect} from 'chai';

const timeout = 120000;
describe("Wrapped Hbar Tests", function () {
	let whbar: hethers.Contract

	before(async function () {
		this.timeout(timeout);
		const WHBAR = await hethers.getContractFactory("WHBAR");
		whbar = await WHBAR.deploy({});
		await whbar.deployed();
	})

	it("Should have 0 supply after deploy", async function () {
		this.timeout(timeout);
		const supply = await whbar.totalSupply();
		expect(supply).to.equal("0");
		console.log("ZeroSupplyOnDeployment - PASS")
	});

	it('Symbol and Name', async function () {
		this.timeout(timeout);
		const symbol = await whbar.symbol();
		const name = await whbar.name();
		expect(symbol).to.equal("WHBAR");
		expect(name).to.equal("Wrapped Hbar");
		console.log("Symbol and Name - PASS")
	});

	it('Should have non-zero balance after deposit', async function () {
		this.timeout(timeout);
		const [signer] = await hethers.signers();
		const balance = await whbar.balanceOf(signer.address);
		expect(balance).to.equal("0");
		await whbar.deposit({value: hethers.utils.parseEther("1")});
		const balance2 = await whbar.balanceOf(signer.address);
		expect(balance2).to.equal("1");
		console.log("Deposit - PASS")
	});


});
