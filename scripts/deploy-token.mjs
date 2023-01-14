import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import { config } from "dotenv";
config();

// Instantiate the SDK and pass in a signer
const sdk = ThirdwebSDK.fromPrivateKey("devnet", process.env.PRIVATE_KEY);

// Define the metadata for your program
const metadata = {
  symbol: "ADI",
  description: "Token demo untuk di miliki secara publik",
  name: "Adi Token",
  initialSupply: 500000,
};

// And deploy a new program from the connected wallet
const address = await sdk.deployer.createToken(metadata);

console.log(address);
console.log("Contract deployed successfully! 🎉");

const token = await sdk.getToken(address);
const supply = await token.totalSupply();

console.log(supply);
