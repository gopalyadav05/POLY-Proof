const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.P_KEY;

  // The URL of the network provider from ChainList
  const networkAddress =
    "https://goerli.blockpi.network/v1/rpc/public";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  // The Deployed contract Address 
  const contractAddress = "0x250Ff840fe0DeD81C6575a7261D155edC2438D4D";

  const OneNFT = await ethers.getContractFactory("Hydra", signer);
  const contract = await OneNFT.attach(contractAddress);
  await contract.mint(5);
  console.log("Minted '5' NFTs.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 