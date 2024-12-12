# Dijkstra's Algorithm Visualizer

## Overview
Dijkstra's Algorithm Visualizer is an interactive web-based tool designed to visually demonstrate the working of Dijkstra's shortest path algorithm. The project enables users to create a graph, add edges with weights, and compute the shortest path from a source node to all other nodes using Dijkstra's algorithm. The visualization leverages D3.js for graph rendering and HTML/CSS/JavaScript for interactivity.

## Features
- **Graph Initialization:** Users can define the number of nodes and edges.
- **Edge Addition:** Add weighted edges between nodes interactively.
- **Shortest Path Calculation:** Compute and display the shortest path using Dijkstra's algorithm.
- **Interactive Visualization:** A graphical representation of the graph with nodes, edges, and weights.
- **Distance Matrix Display:** Shows the computed distances from the source node to all other nodes.

## Technologies Used
- **HTML/CSS:** For structuring and styling the user interface.
- **JavaScript:** For handling logic and interactivity.
- **D3.js:** For dynamic graph visualization.

## Installation
### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Steps
1. Clone the repository.
2. Navigate to the project directory.
3. Open the `index.html` file in your browser to start the visualizer.

## Usage Instructions
### Step 1: Initialize Graph
1. Enter the number of nodes and edges in the **Graph Initialization** form.
2. Click **Initialize Graph** to set up the graph structure.

### Step 2: Add Edges
1. Enter the start node, end node, and weight in the **Edge Addition** form.
2. Click **Add Edge** to add the edge to the graph.
3. Repeat for all desired edges.

### Step 3: Run Dijkstra's Algorithm
1. Enter the source node in the **Dijkstra Start Node** input field.
2. Click **Run Dijkstra** to calculate the shortest paths.

### Step 4: View Results
- Check the **Distance Matrix** section for shortest path distances.
- Observe the **Graph Visualization** section for an updated graph.

## Project Structure
```
├── index.html         # Main HTML file for the interface
├── styles.css         # CSS file for styling
├── script.js          # JavaScript file containing logic and Dijkstra's algorithm
└── README.md          # Project documentation
```

## Implementation Details
### 1. **Graph Representation**
The graph is represented using an adjacency list where each node points to its neighboring nodes and associated weights.

### 2. **Dijkstra's Algorithm**
- The algorithm uses a priority queue to efficiently fetch the next node with the smallest distance.
- The `MinPriorityQueue` class is implemented to handle the priority queue operations.

### 3. **Graph Visualization**
- D3.js is used to render nodes, edges, and labels dynamically.
- Forces are applied for better node positioning using D3's force simulation.

### 4. **User Interface**
- Forms allow users to define nodes, edges, and weights.
- The visualization and distance matrix update dynamically based on user input.

## Example
### Input:
1. Initialize a graph with 6 nodes and 7 edges.
2. Add edges with the following parameters:
   - (0, 1, 2)
   - (0, 4, 1)
   - (4, 5, 4)
   - (4, 2, 2)
   - (1, 2, 3)
   - (2, 3, 6)
   -  (5, 3, 1)
3. Run Dijkstra's algorithm starting from node 0.

### Output:
- **Distance Matrix:**
  ```
  Distance to node 0: 0
  Distance to node 1: 2
  Distance to node 2: 3
  Distance to node 3: 6
  Distance to node 4: 1
  Distance to node 5: 5
  ```
- **Graph Visualization:**
  The graph will visually display nodes, edges, and edge weights.

## Limitations
- Currently supports undirected graphs only.
- No support for negative edge weights (as Dijkstra's algorithm does not handle them).

## Future Enhancements
- Add support for directed graphs.
- Implement visualization for other graph algorithms like A* or Prim's algorithm.
- Add the ability to save and load graphs.

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request describing your changes.



## Acknowledgments
- Thanks to the D3.js community for providing an excellent library for data visualization.

---
