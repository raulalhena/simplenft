//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MyNFT is ERC721, Ownable {
    uint256 public mintPrice = 0.05 ether;
    uint256 public totalSupply;
    bool public isMintEnabled;
    mapping(address => uint256) public mintedWallets;

    constructor() payable ERC721('MyNFT', 'MYNFT') {
    }

    function toggleIsMintEnabled() external onlyOwner() {
        isMintEnabled = !isMintEnabled;
    }

    function mint() external payable {
        require(isMintEnabled, 'minting not enabled');
        require(mintedWallets[msg.sender] < 1, 'exceeds max per wallet');
        require(msg.value == mintPrice, 'wrong value');
        require(totalSupply == 1, 'sold out');

        mintedWallets[msg.sender]++;
        totalSupply++;
        uint256 tokenId = totalSupply;
        _safeMint(msg.sender, tokenId);
    }

}

