const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log(deployer.provider);

    console.log(
    "Deploying contracts with the account:",
    deployer.address
    );
    // console.log("##### => ", await deployer.provider.getBalance())
    // const accountBalance = await deployer.accountBalance;
    // console.log("Account balance:", accountBalance);

    const MyNFT = await ethers.getContractFactory("MyNFT");
    const contract = await MyNFT.deploy();

    // console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });