import { ethers } from "hardhat";

async function main () {
    
    const votingContract = await ethers.deployContract("Voting");

    await votingContract.waitForDeployment();

    console.log(
        `Voting_contract successfully deployed to ${votingContract.target}`
    );

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });