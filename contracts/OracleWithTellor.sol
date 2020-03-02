pragma solidity ^0.5.0;

import './UsingTellor.sol';

contract OracleWithTellor is UsingTellor {

    /*Variables*/
    address public owner;

  constructor(address _userContract) UsingTellor(_userContract) public{
    owner = msg.sender;
  }

 }