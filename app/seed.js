EcommerceStore = artifacts.require("./EcommerceStore.sol");
module.exports = function(callback) {
 current_time = Math.round(new Date() / 1000);
 amt_1 = web3.utils.toWei('1', 'ether');
 amt_2 = web3.utils.toWei('2', 'ether');
 amt_3 = web3.utils.toWei('3', 'ether');
 amt_half = web3.utils.toWei('0.5', 'ether');
 amt_tenth = web3.utils.toWei('0.1', 'ether');

 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iPhone 7', 'Cell Phones & Accessories', 'Qmahtejk2dLCSXHx6SLZ5TpBUnVn64FJogkTLWP32ekoG6', 'QmbLRFj5U6UGTy3o9Zt8jEnVDuAw2GKzvrrv3RED9wyGRk', current_time, 2*amt_1, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('Antique Carpet', 'Art', 'QmdjmyRUQCGGRBgrpRfCZqgRVXaG6WJ29xGMmNKZXZKJ48', 'QmVw8NchonV1oXpHxDWkNuhq4aepFnGXJSJtJZvcj7h2zH', current_time, amt_2, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('Shirt', 'Clothing', 'QmYu8YbSkqFgycoeYqzvovjhvwpGSnsZxyetTmqFJbovKN', 'QmdhqKBVSF7tSMA4ZU1cfRxbgdfUZ5axpbMCKyszJiLvYG', current_time, amt_tenth, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore("Women's Jacket", 'Clothing', 'QmUaeEtNH4ErMYAUH3hMnKZCWHKhz9UdixqBBah5rMBXR8', 'QmSfWh8FHpGSVSuubxXw1d4gZEdf5UHc2qjax8D6FyKi8Z', current_time, amt_half, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore("Hydra Laptop", 'Computers & Tablets', 'QmbSeRtGrmeTZ3jhs8NNqWUNZTBEgo9GYHjMxpbd1S4x9c', 'QmdowsgFNRaXttG8WDq2FA4yiSwfK9wA9ezPNpkTkikiYK', current_time, amt_2, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore("iPad", 'Computers & Tablets', 'QmX5wPjtgZDCZKuHCNspeqxHsmi5Tb4qTdK858hC8GewQV', 'QmQKrJYWnJKjLHXzc6bJRNE8ja4RDxMmxJTwuptSLUAogG', current_time, amt_2, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore("Macbook Pro", 'Computers & Tablets', 'QmWFZ3DBTet3UqptBfif1FPzgvSbaPBRB941cdiyCgsnuy', 'QmRYuTdmJCUqdCTBopXVCggfSPYwNXABT6KvcCGSmmStcj', current_time, amt_2, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore("Drone", 'Cameras', 'QmaWR99orw8oE5N64SK7iF1pKQtP33xFdULgmZgq2qQAGZ', 'QmVjm69AhhdC2D8gZFXUjpJhaqewYMdbciGdbXtoJ11KCS', current_time, amt_2, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('Nokia', 'Cell Phones & Accessories', 'QmbtNJCeM3wvaxFQeur9PkWLyBYzCjouwsr1ksSixtHetC', 'QmSE98p8LJxxPq7udGgKfKAZUy4qeWvgBZEtGNp94y7gwN', current_time, amt_3, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('Cryptonomicon', 'Books', 'QmP7WZxJxE9JrhMf9AgprL6rPXXBNCU6VJFMAyjGbYYGT6', 'QmNWN2heQbW6wxGAZZy53fhbicWczBWbifMi71qBJago4f', current_time, amt_2, 0).then(function(f) {console.log(f)})});
}