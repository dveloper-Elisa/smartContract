import hardhat from "hardhat";
const { ethers } = hardhat;

async function main() {
  const contractAddress = "0x847f7eBA5d0393f226a50E70D74888F558630917";
  const HelloCore = await ethers.getContractAt("HelloCore", contractAddress);

  console.log("Message:", await HelloCore.message());

  const tx = await HelloCore.setMessage("Core is awesome!");
  await tx.wait();

  console.log("Updated message:", await HelloCore.message());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
