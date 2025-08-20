async function main() {
const HelloCore = await ethers.getContractFactory("HelloCore");
const hello = await HelloCore.deploy();
console.log("Contract deployed to:", hello.target);
}
main().catch((error) => {
console.error(error);
process.exitCode = 1;
});