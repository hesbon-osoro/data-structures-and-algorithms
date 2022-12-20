const canVisitAllRooms = function (rooms) {
  // Initialize a set to store the rooms that we have visited
  let visited = new Set();

  // Add room 0 to the set of visited rooms
  visited.add(0);

  // Perform DFS starting from room 0
  dfs(rooms, visited, 0);

  // Return true if we have visited all the rooms, false otherwise
  return visited.size == rooms.length;
};

function dfs(rooms, visited, room) {
  // Get the keys for the current room
  let keys = rooms[room];

  // Iterate over the keys
  for (let key of keys) {
    // If we have not visited the room that the key unlocks
    if (!visited.has(key)) {
      // Add the room to the set of visited rooms
      visited.add(key);
      // Perform DFS starting from the room that the key unlocks
      dfs(rooms, visited, key);
    }
  }
}
