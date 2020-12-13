
# Supply Chain
    - I use ropsten network as 

## Contract on Ropsten
                        
    Transaction Hash: 0x29329c265b499f2f1b87d2f765159fd2b19d91a21ec3a4736c9e33826db9bba1
    Contract address: 0xc5f5394aaBA480503c4832B10657d155b1FBC571
                        
## How to run:
    ```
    git clone https://github.com/lambdanetwork/blockchain_ND_supply_chain.git
    npm install
    npm run dev
    go to localhost:3000
    ```
    
    Do not forget to switch accounts in Metamask, while acting on behalf of the buyer

## How to Debug:
    ```
        1. using browser goto localhost:3000
        2. when executing any action, pay the gas-price
        3. after succeeed or failure notification, open developer-tools
        4. on the console.log, get the transaction-block
        5. https://ropsten.etherscan.io/address/0xfb0720c0715e68f80c0c0437c9c491abfed9e7ab#code
    ```

## How to run automated test?
    ```
    truffle develop
    truffle migrate --network ropsten
    truffle test --network ropsten
    ```