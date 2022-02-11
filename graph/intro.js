// Ways of representing a graph

// Edge List - 0 is connected to 2, 2 is connected to 3 and so on.
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List - 0 is connected to 2, 1 is connected to [2,3] and so on.
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent matrix - 1 if connected, 0 if not connected.
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
