// Variables.
const Wei = 1000000000000000000;

const Chains = {
  56: "BNBChain Mainnnet",
  97: "BNBChain Testnet"
};

//Checks if the Metamask is installed.
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

//Connect to Metamask.
const ethereumButton = document.querySelector(".enableEthereumButton");
const showAccount = document.querySelector(".showAccount");

ethereumButton.addEventListener("click", () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  showAccount.innerHTML = "Connected to " + account;
}
