import hardhat from 'hardhat';
// @ts-ignore
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

}

module.exports = deploy;
