const ethers = require('hardhat').ethers;

const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const hre = require('hardhat');

describe("MyNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test

  it('add should add 2 numbers', async () => {
    // const [owner] = await ethers.getSigners();
    // const MyNFT = await ethers.getContractFactory('MyNFT');
    // const contract = await MyNFT.deploy();
    const mynft = await ethers.deployContract('MyNFT');
    // await a.waitForDeployment();
    expect(await mynft.add(2,2)).to.equal(4);
  });
});
