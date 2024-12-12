let adj = [];
let nodes = [];
let edges = [];
let dis = [];

function initializeGraph(event) {
    event.preventDefault();
    const numNodes = parseInt(document.getElementById("num-nodes").value);
    const numEdges = parseInt(document.getElementById("num-edges").value);

    adj = Array.from({ length: numNodes }, () => []);
    nodes = Array.from({ length: numNodes }, (_, i) => ({ id: i }));
    edges = [];
    dis = Array(numNodes).fill(Infinity);

    updateGraph();
}

function addEdge(event) {
    event.preventDefault();
    const u = parseInt(document.getElementById("edge-start").value);
    const v = parseInt(document.getElementById("edge-end").value);
    const weight = parseInt(document.getElementById("edge-weight").value);

    if (u >= 0 && v >= 0 && u < nodes.length && v < nodes.length && weight > 0) {
        adj[u].push({ distance: weight, node: v });
        adj[v].push({ distance: weight, node: u });
        edges.push({ source: u, target: v, weight });
        updateGraph();
    } else {
        alert("Invalid edge parameters.");
    }
}

function runDijkstra() {
    const start = parseInt(document.getElementById("dijkstra-start").value);
    if (isNaN(start) || start < 0 || start >= nodes.length) {
        alert("Please enter a valid start node index.");
        return;
    }

    dis.fill(Infinity);
    dis[start] = 0;

    let pq = new MinPriorityQueue();
    pq.enqueue({ node: start, distance: 0 });

    while (!pq.isEmpty()) {
        const { node: u, distance: d } = pq.dequeue();
        if (dis[u] < d) continue;
        adj[u].forEach(({ node: v, distance: dist }) => {
            if (dis[u] + dist < dis[v]) {
                dis[v] = dis[u] + dist;
                pq.enqueue({ node: v, distance: dis[v] });
            }
        });
    }

    displayDistanceMatrix();
}

function displayDistanceMatrix() {
    const matrixDiv = document.getElementById("distance-matrix");
    matrixDiv.innerHTML = "";
    dis.forEach((distance, i) => {
        const p = document.createElement("p");
        p.textContent = `Distance to node ${i}: ${distance === Infinity ? "∞" : distance}`;
        matrixDiv.appendChild(p);
    });
}

function updateGraph() {
    d3.select("#graph-visualization").selectAll("*").remove();
    const width = 1200, height = 1200;
    const svg = d3.select("#graph-visualization")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(edges).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.selectAll(".link")
        .data(edges)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke-width", d => Math.sqrt(d.weight));

    const linkLabels = svg.selectAll(".link-label")
        .data(edges)
        .enter()
        .append("text")
        .attr("class", "link-label")
        .attr("dy", -5)
        .text(d => d.weight);

    const node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 20)
        .attr("fill", "lightblue")
        .attr("stroke", "steelblue");

    const labels = svg.selectAll(".label")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(d => d.id);

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        linkLabels
            .attr("x", d => (d.source.x + d.target.x) / 2)
            .attr("y", d => (d.source.y + d.target.y) / 2);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        labels
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });
}

// Min-Priority Queue for Dijkstra
class MinPriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
        this.queue.sort((a, b) => a.distance - b.distance);
    }
    dequeue() {
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}
