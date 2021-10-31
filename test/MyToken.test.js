const MyToken = artifacts.require("MyToken")

contract("MyToken", (accounts) => {
    before(async () => {
        mytoken = await MyToken.deployed()
    })

    it("gives the owner of the token 1M token", async () => {
        let balance = await mytoken.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance, "ether")
        assert.equal(balance, "1000000", "Balance should be 1M for contract creator")
    })
    it("can transfer tokens between accounts", async () => {
        let amount = web3.utils.toWei("1000", "ether")
        await mytoken.transfer(accounts[1], amount, { from: accounts[0] })

        let balance = await mytoken.balanceOf(accounts[1]);
        balance = web3.utils.fromWei(balance, "ether")

    })
})