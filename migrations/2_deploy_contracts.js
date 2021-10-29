const EcommerceStore = artifacts.require("EcommerceStore");

module.exports = async function(deployer, network, accounts) {
  console.log(accounts);
  await deployer.deploy(EcommerceStore, accounts[0]);
};
