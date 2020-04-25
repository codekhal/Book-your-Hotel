import web3 from './web3';

const address = '0x015B1b8c75fdB5467101C954BE38b3b123D60CAC';

const testing =
    [
        {
            "constant": true,
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
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
            "name": "getRooms",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "roomName",
            "outputs": [
                {
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
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "getRoomId",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_hotelOwner",
                    "type": "string"
                },
                {
                    "name": "_hotelId",
                    "type": "uint256"
                }
            ],
            "name": "AddRooms",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "fundTransfer",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
       
        {
            "inputs": [
                {
                    "name": "_name",
                    "roomType": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "receiver",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "name",
                    "type": "string"
                }
            ],
            "name": "transfer_completed",
            "type": "event"
        }
    ]

export default new web3.eth.Contract(testing, address);