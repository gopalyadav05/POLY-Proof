const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Hydra.sol/Hydra.json");

const tokenAddress = "0x494ba781B500ba5c7Fce37741Cabd6555d01aDeE"; // Ethereum address of the deployed contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x63265F61dd177Fc68beEBAb427b409eF642bf4C0"; // Ethereum public address for the wallet

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
