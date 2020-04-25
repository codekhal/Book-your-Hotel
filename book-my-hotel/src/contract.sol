pragma solidity ^0.4.2;


contract Hotel {

    struct Room {
        uint id;
        string name;
        string hotel_name;
        uint price;
        string status;
    }

    
    mapping (uint => Room) public rooms;
    
    uint public roomsCount;

    // Amount is send to owners address
    address owner;
    // Constructor 
    function Hotel () payable {

        // Set the contract creater as the owner
        owner = msg.sender;
        
        addRoom("Single", 1 ether);
        addRoom("Delux", 2 ether);
        addRoom("Family", 3 ether);
    }

    function addRoom(string _name, uint price) private {

        roomsCount++;
        rooms[roomsCount] = Room(roomsCount,_name,'Hotel 1',price,'available');
    }

    function bookRoom(uint _roomId) payable public {
        
        // Check that the room is a valid
        require (_roomId > 0 && _roomId <= roomsCount);

        // Check if room is available
        require (compareStrings(rooms[_roomId].status,"available"));

        // Check if amount is equal to the price of the room
        if(msg.value != rooms[_roomId].price)
        {
            // Throw exception
            throw;
        }
        
        owner.transfer(msg.value);
        // change the status of the room
        rooms[_roomId].status = "Not available";
    }

    function compareStrings (string a, string b) view returns (bool){
       return keccak256(a) == keccak256(b);
   }   
}