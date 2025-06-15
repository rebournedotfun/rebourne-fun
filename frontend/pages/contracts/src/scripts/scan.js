import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

// Connect to mainnet
const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

// Example token mint to check (you’ll swap this later)
const mintAddress = new PublicKey("So11111111111111111111111111111111111111112");

async function checkTokenActivity(mint) {
  try {
    const supply = await connection.getTokenSupply(mint);
    const largestAccounts = await connection.getTokenLargestAccounts(mint);

    console.log(`🪙 Token: ${mint.toBase58()}`);
    console.log(`💰 Total Supply: ${supply.value.uiAmountString}`);
    console.log(`📦 Largest Accounts:`);
    console.log(largestAccounts.value.map((acc) => acc.address.toBase58()));
  } catch (err) {
    console.error("❌ Error checking token:", err);
  }
}

checkTokenActivity(mintAddress);
