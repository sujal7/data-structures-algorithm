/**
 * Represents a Graph.
 */
class Graph {
  /**
   * Initializes an empty graph.
   */
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  /**
   * Adds a vertext to the graph.
   * @param {String} node - The node/vertex to be added in the graph.
   */
  addVertex(node) {
    this.numberOfNodes++;
    this.adjacentList[node] = [];
  }

  /**
   * Adds an edge between the two nodes.
   * @param {String} node1
   * @param {String} node2
   */
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  /**
   * Displays the graph.
   */
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '2');
myGraph.addEdge('2', '4');
myGraph.addEdge('1', '2');
myGraph.addEdge('5', '3');
myGraph.addEdge('1', '4');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
