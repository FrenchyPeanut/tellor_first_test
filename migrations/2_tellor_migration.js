  /****Uncomment the body below to run this with Truffle migrate for truffle testing*/
  var UsingTellor = artifacts.require("./UsingTellor.sol");
  var UserContract = artifacts.require("./UserContract.sol");
  var OracleWithTellor = artifacts.require("./OracleWithTellor.sol");
  /****Uncomment the body to run this with Truffle migrate for truffle testing*/

  /**
   *@dev Use this for setting up contracts for testing 
   *this will link the Factory and Tellor Library
   *These commands that need to be ran:
   * truffle migrate --network rinkeby
   */

  module.exports = async function (deployer) {

    // Deploying UsingTellor 
    await deployer.deploy(UsingTellor, "0x19e77D1B96978713fca53d946d4392f4b8F3c5AD");
    await deployer.link(UsingTellor, OracleWithTellor);
    await deployer.deploy(OracleWithTellor, UsingTellor.address);
  }