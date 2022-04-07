const {ethers} = require('hardhat');
require("@nomiclabs/hardhat-waffle");

async function main() {

  const SuperMarioWorld = await hre.ethers.getContractFactory('SuperMarioWorld')
  const superMarioWorld = await SuperMarioWorld.deploy('SuperMarioWorld', 'SPRM')

  await superMarioWorld.deployed()

  console.log('Success! Contract was deployed to: ', superMarioWorld.address);

  await superMarioWorld.mint('https://ipfs.io/ipfs/QmNQbvs461u2LitsQAHGigSYuRmnFspQwd8J3JKVHSDeNY')

  console.log("NFT successfully deployed");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
