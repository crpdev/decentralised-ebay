// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0 <0.9.0;

contract Escrow {
    address payable public buyer;
    address payable public seller;
    address public arbiter;
    uint public productId;
    uint public amount;
    mapping (address => bool) releaseAmount;
    mapping(address => bool) refundAmount;
    uint public releaseCount;
    uint public refundCount;
    bool public fundsDisbursed;
    address public owner;

    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }

    constructor(uint _productId, address payable _buyer, address payable _seller, address _arbiter) payable {
        productId = _productId;
        buyer = _buyer;
        seller = _seller;
        arbiter = _arbiter;
        fundsDisbursed = false;
        amount = msg.value;
        owner = msg.sender;
    }

    function escrowInfo() public view returns(address, address, address, bool, uint, uint) {
        return(buyer, seller, arbiter, fundsDisbursed, releaseCount, refundCount);
    }

    function releaseAmountToSeller(address caller) public onlyOwner {
        require(fundsDisbursed == false);
        if ((caller == buyer || caller == seller || caller == arbiter) && releaseAmount[caller] != true) {
            releaseAmount[caller] = true;
            releaseCount++;
        }

        if (releaseCount == 2){
            seller.transfer(amount);
            fundsDisbursed = true;
        }
    }

    function refundAmountToBuyer(address caller) public onlyOwner {
        require(fundsDisbursed == false);
        if ((caller == buyer || caller == seller || caller == arbiter) && refundAmount[caller] != true) {
            refundAmount[caller] = true;
            refundCount++;
        }

        if (refundCount == 2){
            buyer.transfer(amount);
            fundsDisbursed = true;
        }
    }
}