// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0 <0.9.0;
import './Escrow.sol';
contract EcommerceStore {

    enum ProductCondition {NEW, USED}

    uint public productIndex;

    address public arbiter;

    mapping(address => mapping(uint => Product)) stores; 

    mapping (uint => address) productIdInStore;

    mapping(uint => address) productEscrow;
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

    event NewProduct(uint _productId, string _name, string _category, string _imageLink, string _descLink, 
        uint _startTime, uint _price, uint _condition);
    constructor(address _arbiter){
        productIndex = 0;
        arbiter = _arbiter;
    }

    function addProductToStore(string memory _name, string memory _category, string memory _imageLink,
        string memory _descLink, uint _startTime, uint _price, uint _productCondition) public {
            productIndex++;
            Product memory newProduct = Product(productIndex, _name, _category, _imageLink, _descLink, _startTime, _price, ProductCondition(_productCondition), address(0));
            stores[msg.sender][productIndex] = newProduct;
            productIdInStore[productIndex] = msg.sender;
            emit NewProduct(productIndex, _name, _category, _imageLink, _descLink, _startTime, _price, _productCondition);
    }

    function getProduct(uint _productId) public view returns (uint, string memory, string memory, string memory, string memory, uint, uint, ProductCondition, address) {
        Product memory productInStore = getProductById(_productId);
        return (productInStore.id, productInStore.name, productInStore.category, productInStore.imageLink, productInStore.descLink, 
            productInStore.startTime, productInStore.price, productInStore.condition, productInStore.buyer);
    }

    function buyProductById(uint _productId) payable public {
        Product memory productInStore = getProductById(_productId);
        require(productInStore.buyer == address(0));
        require(msg.value >= productInStore.price);
        productInStore.buyer = msg.sender;
        stores[productIdInStore[_productId]][_productId] = productInStore;
        Escrow escrow = (new Escrow){value: msg.value}(_productId, payable(msg.sender), payable(productIdInStore[_productId]), arbiter); 
        productEscrow[_productId] = address(escrow);
    }

    function getProductById(uint _productId) private view returns (Product memory) {
        return stores[productIdInStore[_productId]][_productId];
    }

    function escrowInfo(uint _productId) public view returns (address, address, address, bool, uint, uint) {
        return Escrow(productEscrow[_productId]).escrowInfo();
    }

    function releaseAmountToSeller(uint _productId) public {
        Escrow(productEscrow[_productId]).releaseAmountToSeller(msg.sender);
    }

    function refundAmountToBuyer(uint _productId) public {
        Escrow(productEscrow[_productId]).refundAmountToBuyer(msg.sender);
    }

}
