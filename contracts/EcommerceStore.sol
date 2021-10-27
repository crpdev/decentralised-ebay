// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0 <0.9.0;

contract EcommerceStore {

    enum ProductCondition {NEW, USED}

    uint public productIndex;

    mapping(address => mapping(uint => Product)) stores; 

    mapping (uint => address) productIdInStore;
    struct Product {
        uint id;
        string name;
        string category;
        string imageLink;
        string descLink;
        uint startTime;
        uint price;
        ProductCondition condition;
        address buyer;
    }

    constructor(){
        productIndex = 0;
    }

    function addProductToStore(string memory _name, string memory _category, string memory _imageLink,
        string memory _descLink, uint _startTime, uint _price, uint _productCondition) public {
            productIndex++;
            Product memory newProduct = Product(productIndex, _name, _category, _imageLink, _descLink, _startTime, _price, ProductCondition(_productCondition), address(0));
            stores[msg.sender][productIndex] = newProduct;
            productIdInStore[productIndex] = msg.sender;
    }

    function getProduct(uint _productId) public view returns (uint, string memory, string memory, string memory, string memory, uint, uint, ProductCondition, address) {
        Product memory productInStore = stores[productIdInStore[_productId]][_productId];
        return (productInStore.id, productInStore.name, productInStore.category, productInStore.imageLink, productInStore.descLink, 
            productInStore.startTime, productInStore.price, productInStore.condition, productInStore.buyer);
    }

}
