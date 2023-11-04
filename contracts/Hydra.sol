// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Hydra is ERC721A {
    address public owner;
    string public prompt="illustration of a dragon blowing fire, a portrait, Dragon, 2d game art, dark scary background";
    uint256 public maxQuantity = 5;
    string baseUrl="https://gateway.pinata.cloud/ipfs/QmTK76pEHrqpijCu4M8S4ybp7pMjR7t99iTu4vHVUZvZSp";


    function promptDescription() external view returns (string memory) {
        return prompt;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    constructor() ERC721A("Hydra", "HYD") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }

    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

}
