# Hydra NFT Collection

This repository contains the smart contract and scripts to create and manage the "Hydra" NFT collection, which consists of 5 unique digital artworks generated using Generative AI. The NFTs are stored on IPFS using pinata.cloud, and the smart contract is deployed on the Goerli Ethereum Testnet. The collection is represented as ERC721 tokens and includes a promptDescription function that returns the prompt used to generate the images.

## Project Overview

To successfully complete the Final Challenge, this project follows the provided rubric:

1. **Generate a 5-Item Collection**: The project uses Generaive AI BING Create Using DALLE 3 to generate a 5-item NFT collection, each with a unique artwork.

2. **Store Items on IPFS using pinata.cloud**: The NFT images and metadata are stored on IPFS using the pinata.cloud service.

3. **Deploy an ERC721 to the Goerli Ethereum Testnet**: The smart contract, named "Hydra," is deployed on the Goerli Ethereum Testnet as an ERC721 token.

4. **promptDescription Function**: The smart contract includes a `promptDescription` function that allows users to retrieve the prompt used to generate the NFT images.

5. **Map Your NFT Collection using Polygon Network Token Mapper**: While not a strict requirement, the project maps the NFT collection to the Polygon network token mapper to enhance visibility and accessibility.

6. **Write a Hardhat Script to Batch Mint NFTs**: The project includes a Hardhat script to allow the contract owner to batch mint all NFTs at once. The smart contract inherits from ERC721A for optimal functionality.

7. **Write a Hardhat Script to Batch Transfer NFTs to Polygon Mumbai**: The project includes a Hardhat script to facilitate batch transfers of NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

8. **Approve NFTs for Transfer**: The script approves the NFTs for transfer before initiating the migration.

9. **Deposit NFTs to the Bridge**: The script deposits the NFTs to the FxPortal Bridge for transfer to the Polygon Mumbai network.

10. **Test `balanceOf` on Mumbai**: The project includes tests to verify the `balanceOf` function on the Polygon Mumbai network.

## Smart Contract Details

### ERC721 Token
- **Name**: Hydra
- **Symbol**: HYD
- **Deployed Address**: [0x250Ff840fe0DeD81C6575a7261D155edC2438D4D](https://goerli.etherscan.io/address/0x250Ff840fe0DeD81C6575a7261D155edC2438D4D)
> Click on Contract Address to View On Goerli Testnet Etherscan

### Contract Functions
- `promptDescription()`: Returns the prompt used to generate the NFT images.
- `mint(uint256 quantity)`: Allows the owner to mint a specified quantity( i.e. 5 ) of NFTs, respecting the maximum quantity limit.
- `getBalance(address _owner)`: Retrieves the NFT balance of a specific owner.

### Other Properties
- `owner`: The address of the contract owner.
- `prompt`: A string describing the prompt used for image generation.
- `maxQuantity`: The maximum allowed quantity of NFTs.
- `baseUrl`: The base URL for accessing NFT metadata on IPFS.

## Deployment and Usage
The contract is deployed on the Goerli Ethereum Testnet and can be interacted with using Ethereum-compatible wallets or scripts.

## Getting Started
1. Clone this repository.
2. Install the required dependencies.
3. Configure your Ethereum and Polygon accounts in Hardhat.
4. Run the provided scripts to mint and transfer NFTs.
5. Run tests to ensure contract functionality.

## Acknowledgments
This project is created as part of a challenge and is for educational purposes. The NFT collection is generated for demonstration and learning purposes.
## Author 
- Gopal Yadav 

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.