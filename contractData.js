module.exports.abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_winner",
				"type": "address"
			}
		],
		"name": "sendToWinner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setupPlayer2",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player1Escrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player2",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "player2Escrow",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports.bytecode = {
	"linkReferences": {},
	"object": "60806040526000341161001157600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055506102fd806100676000396000f3fe6080604052600436106100555760003560e01c8063169746311461005a578063329f86a8146100ab578063451e408a146100d657806359a5f12d1461010157806367bf595414610158578063d30895e414610162575b600080fd5b34801561006657600080fd5b506100a96004803603602081101561007d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b9565b005b3480156100b757600080fd5b506100c061021a565b6040518082815260200191505060405180910390f35b3480156100e257600080fd5b506100eb610220565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b50610116610226565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61016061024c565b005b34801561016e57600080fd5b506101776102a3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b8073ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610216573d6000803e3d6000fd5b5050565b60035481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000341161025957600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600381905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a72315820df302524eb0c9c25713bd7e6d38f111f4ea80b4d9beb48dc87468220807224f264736f6c634300050b0032",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 CALLVALUE GT PUSH2 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x2FD DUP1 PUSH2 0x67 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x55 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x16974631 EQ PUSH2 0x5A JUMPI DUP1 PUSH4 0x329F86A8 EQ PUSH2 0xAB JUMPI DUP1 PUSH4 0x451E408A EQ PUSH2 0xD6 JUMPI DUP1 PUSH4 0x59A5F12D EQ PUSH2 0x101 JUMPI DUP1 PUSH4 0x67BF5954 EQ PUSH2 0x158 JUMPI DUP1 PUSH4 0xD30895E4 EQ PUSH2 0x162 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x66 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xA9 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x7D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x1B9 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xC0 PUSH2 0x21A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xEB PUSH2 0x220 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x10D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x116 PUSH2 0x226 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x160 PUSH2 0x24C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x177 PUSH2 0x2A3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x216 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 CALLVALUE GT PUSH2 0x259 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x3 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP INVALID LOG2 PUSH6 0x627A7A723158 KECCAK256 0xdf ADDRESS 0x25 0x24 0xeb 0xc SWAP13 0x25 PUSH18 0x3BD7E6D38F111F4EA80B4D9BEB48DC874682 KECCAK256 DUP1 PUSH19 0x24F264736F6C634300050B0032000000000000 ",
	"sourceMap": "25:564:0:-;;;237:1;225:9;:13;217:22;;;;;;259:10;249:7;;:20;;;;;;;;;;;;;;;;;;295:9;279:13;:25;;;;25:564;;;;;;"
}