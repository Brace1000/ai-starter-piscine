// start to code here
let components = ["motor", "sensor", "battery", "camera"];

let firstPart = robotParts[0];
let lastPart = robotParts[robotParts.length - 1];
let comboParts = [lastPart, firstPart];

// Part A - Replace
replaceComponents[2] = "enhanced";

// Part B - Swap
let temp = swapComponents[0];
swapComponents[0] = swapComponents[1];
swapComponents[1] = temp;
