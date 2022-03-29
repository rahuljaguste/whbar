// @ts-nocheck
import hardhat from 'hardhat';
const {hethers} = hardhat;
async function deploy() {
	await hardhat.run('compile');

	/**
	 * Deploying Greeter
	 */
	const Whbar = await hethers.getContractFactory("WHBAR");
	const whbar = await Whbar.deploy();
	await whbar.deployed();

	console.log("Whbar deployed to:", whbar.address);

	/**
	 * Verifying Contracts
	 */
	// console.log('Verifying Greeter on Etherscan...');
	// await hardhat.run('verify:verify', {
	// 	address: greeter.address,
	// 	constructorArguments: []
	// });
}

module.exports = deploy;
