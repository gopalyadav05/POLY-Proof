const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Hydra.sol/Hydra.json");

const tokenAddress = "0x250Ff840fe0DeD81C6575a7261D155edC2438D4D"; // Ethereum address of the deployed contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xBBc96616F0B18bbF43E1A0f8768B36e08Fa46f4b"; // Ethereum public address for the wallet

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
