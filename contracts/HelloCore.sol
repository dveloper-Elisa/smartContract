// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract HelloCore {
string public message = "Hello from Core!";
function setMessage(string calldata newMessage) public {
message = newMessage;
}
}