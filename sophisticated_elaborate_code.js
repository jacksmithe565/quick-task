/* sophisticated_elaborate_code.js */

// This code generates a random maze using the Recursive Backtracking algorithm
// and then uses the A* algorithm to find the shortest path from the start to the end point.

const WIDTH = 40;
const HEIGHT = 20;
const START_X = 0;
const START_Y = 0;
const END_X = WIDTH - 1;
const END_Y = HEIGHT - 1;

// Create a 2D grid representing the maze
let maze = Array.from({ length: HEIGHT }, () => Array.from({ length: WIDTH }, () => true));

// Recursive Backtracking algorithm to generate the maze
function generateMaze(currentX, currentY) {
    maze[currentY][currentX] = false;
    let directions = shuffleDirections();

    for (let direction of directions) {
        let nextX = currentX + direction[0] * 2;
        let nextY = currentY + direction[1] * 2;

        if (nextX >= 0 && nextX < WIDTH && nextY >= 0 && nextY < HEIGHT) {
            if (maze[nextY][nextX]) {
                maze[currentY + direction[1]][currentX + direction[0]] = false;
                generateMaze(nextX, nextY);
            }
        }
    }
}

// Helper function to shuffle directions
function shuffleDirections() {
    return [
        [0, -1], [0, 1], [-1, 0], [1, 0]
    ].sort(() => Math.random() - 0.5);
}

// A* algorithm to find the shortest path
function findShortestPath() {
    let queue = [[START_X, START_Y, []]];
    let visited = new Set();

    while (queue.length > 0) {
        let [currentX, currentY, path] = queue.shift();
        visited.add(`${currentX},${currentY}`);

        if (currentX === END_X && currentY === END_Y) {
            return { path: path, visited: visited };
        }

        let directions = [
            [0, -1], [0, 1], [-1, 0], [1, 0]
        ];

        for (let direction of directions) {
            let nextX = currentX + direction[0];
            let nextY = currentY + direction[1];

            if (nextX >= 0 && nextX < WIDTH && nextY >= 0 && nextY < HEIGHT) {
                if (!maze[nextY][nextX] && !visited.has(`${nextX},${nextY}`)) {
                    queue.push([nextX, nextY, [...path, direction]]);
                }
            }
        }
    }

    return { path: [], visited: visited };
}

// Generate the maze
generateMaze(START_X, START_Y);

// Find the shortest path in the maze
let shortestPath = findShortestPath();

// Output the maze and the shortest path
console.log("Maze:");
console.log(maze);
console.log("Shortest Path:");
console.log(shortestPath.path);
console.log("Visited Cells:");
console.log(shortestPath.visited);