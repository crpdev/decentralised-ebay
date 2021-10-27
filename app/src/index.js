import Web3 from "web3";
import "./app.css";
import ecommerceStoreArtifact from "../../build/contracts/EcommerceStore.json";

const App = {
 web3: null,
 account: null,
 instance: null,

 start: async function() {
  const { web3 } = this;

  try {
   // get contract instance
   const networkId = await web3.eth.net.getId();
   const deployedNetwork = ecommerceStoreArtifact.networks[networkId];
   this.instance = new web3.eth.Contract(
    ecommerceStoreArtifact.abi,
    deployedNetwork.address,
   );

   // get accounts
   const accounts = await web3.eth.getAccounts();
   this.account = accounts[0];

   this.renderStore();

  } catch (error) {
   console.error("Could not connect to contract or chain.");
  }
 },

 renderStore: async function() {
  const { productIndex } = this.instance.methods;
  var count = await productIndex().call();
  for(var i=1; i<= count; i++) {
   this.renderProduct(i);
  }
 },

 renderProduct: async function(index) {
  const { getProduct } = this.instance.methods;
  var f = await getProduct(index).call()
  let node = $("<div/>");
  node.addClass("col-sm-3 text-center col-margin-bottom-1 product");
  node.append("<div class='title'>" + f[1] + "</div>");
  node.append("<div> Price: " + displayPrice(f[6]) + "</div>");
  if (f[8] === '0x0000000000000000000000000000000000000000') {
   $("#product-list").append(node);
  } else {
   $("#product-purchased").append(node);
  }
 },

};

function displayPrice(amt) {
 return "Ξ" + App.web3.utils.fromWei(amt, 'ether');
}

window.App = App;

window.addEventListener("load", function() {
 if (window.ethereum) {
  // use MetaMask's provider
  App.web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // get permission to access accounts
 } else {
  console.warn(
   "No web3 detected. Falling back to http://127.0.0.1:7545. You should remove this fallback when you deploy live",
  );
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  App.web3 = new Web3(
   new Web3.providers.HttpProvider("http://127.0.0.1:7545"),
  );
 }

 App.start();
});