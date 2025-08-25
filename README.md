## Elisa 's Coin

# HelloCore Hardhat Project

This is my first sample smart contract built using Solidity and hardhat setup for compile, test, and deploy. SOme of Contract are `` HelloCore.sol ``

## what to do first

* Install node modules with packahe_lock.json
 ```
 npm install
 ```
* Create .env file on the root directory level of your system
* Past your account private key
```shell
touch .env
```
## Environment variables
```
PRIVATE_KEY=5a4f**************************************************************
```

### Run comile command
```
npx hardhat compile
```

### Run test command
```
npx hardhat test
```

### Interact with the HardHat

```
npx hardhat run scripts/deploy.js --network coretestnet
```

## Images showing how it will look like

![deploy](./deploy.png)

![Test](./test.png)

![Account](./account.png)
