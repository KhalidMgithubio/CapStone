// let startButton, backButton, playButton, back2Button;
// let isStartScreen = true;
// let isPlayScreen = false;
// let squaresVisible = false;
// let redButtons, blueButtons;
// let redSquareColor, blueSquareColor;
// let colorSequence = ["red", "blue", "yellow", "black"];
// let currentColorIndexRed, currentColorIndexBlue;


// function setup() {
//   createCanvas(windowWidth, windowHeight);


//   // Create the start button
//   startButton = createButton('Start');
//   startButton.position(width / 2 - 50, height / 2);
//   startButton.mousePressed(startGame);


//   // Create the back button but hide it initially
//   backButton = createButton('Back');
//   backButton.position(width - 80, 20);
//   backButton.hide();
//   backButton.mousePressed(goToStartScreen);


//   // Create the play button but hide it initially
//   playButton = createButton('Play');
//   playButton.position(width / 2 - 50, height - 50);
//   playButton.mousePressed(playGame);
//   playButton.hide();


//   // Create the back2 button but hide it initially
//   back2Button = createButton('Back 2');
//   back2Button.position(width - 80, 20);
//   back2Button.hide();
//   back2Button.mousePressed(goToBlackScreen);


//   // Create arrays for red and blue buttons
//   redButtons = createButtons(width / 2 - 300, height / 2, 200, 30, "red");
//   blueButtons = createButtons(width / 2 + 100, height / 2, 200, 30, "blue");


//   // Initialize square colors and color indices
//   redSquareColor = "red";
//   blueSquareColor = "blue";
//   currentColorIndexRed = colorSequence.indexOf(redSquareColor);
//   currentColorIndexBlue = colorSequence.indexOf(blueSquareColor);
// }


// function draw() {
//   if (isStartScreen) {
//     background(0, 0, 255); // Blue background for start screen
//   } else if (isPlayScreen) {
//     drawBrownScreen();
//     back2Button.show(); // Show Back 2 button
//   } else {
//     background(0); // Black background after pressing start button
//     if (squaresVisible) {
//       drawSquare(width / 2 - 200, height / 2, redSquareColor); // Red square
//       drawSquare(width / 2 + 200, height / 2, blueSquareColor); // Blue square
//       playButton.show(); // Show play button
//     }
//   }
// }


// function drawSquare(x, y, squareColor) {
//   fill(squareColor);
//   noStroke();
//   rectMode(CENTER);
//   rect(x, y, 200, 200);
// }


// function drawBrownScreen() {
//   background(139, 69, 19); // Brown background for play screen


//   // Draw lines to form a perfect square grid
//   stroke(0);
//   strokeWeight(2);
//   for (let y = 0; y < height; y += 45) {
//     line(45, y, width-45, y);
//   }
//   for (let x = 0; x < width; x += 45) {
//     line(x, 45, x, height-12);
//   }


// }


// function createButtons(x, y, width, height, buttonColor) {
//   let buttons = [];
//   buttons.push(createButton('Up').position(x, y - height - 100).size(width, height).hide().mousePressed(() => changeColor("up", buttonColor)));
//   buttons.push(createButton('Down').position(x, y + 100).size(width, height).hide().mousePressed(() => changeColor("down", buttonColor)));
//   return buttons;
// }


// function changeColor(direction, buttonColor) {
//   let currentColorIndex, otherColorIndex;


//   if (buttonColor === "red") {
//     currentColorIndex = currentColorIndexRed;
//     otherColorIndex = currentColorIndexBlue;
//   } else {
//     currentColorIndex = currentColorIndexBlue;
//     otherColorIndex = currentColorIndexRed;
//   }


//   if (direction === "up") {
//     currentColorIndex = (currentColorIndex + 1) % colorSequence.length;
//     while (currentColorIndex === otherColorIndex) {
//       currentColorIndex = (currentColorIndex + 1) % colorSequence.length;
//     }
//   } else if (direction === "down") {
//     currentColorIndex = (currentColorIndex + 3) % colorSequence.length;
//     while (currentColorIndex === otherColorIndex) {
//       currentColorIndex = (currentColorIndex + 3) % colorSequence.length;
//     }
//   }


//   if (buttonColor === "red") {
//     redSquareColor = colorSequence[currentColorIndex];
//     currentColorIndexRed = currentColorIndex;
//   } else {
//     blueSquareColor = colorSequence[currentColorIndex];
//     currentColorIndexBlue = currentColorIndex;
//   }
// }


// function startGame() {
//   isStartScreen = false;
//   isPlayScreen = false;
//   startButton.hide();
//   backButton.show();
//   squaresVisible = true;


//   // Show buttons when starting the game
//   for (let button of redButtons.concat(blueButtons)) {
//     button.show();
//   }
// }


// function goToStartScreen() {
//   isStartScreen = true;
//   isPlayScreen = false;
//   startButton.show();
//   backButton.hide();
//   back2Button.hide();
//   squaresVisible = false;


//   // Hide buttons and play button when going back to the start screen
//   for (let button of redButtons.concat(blueButtons)) {
//     button.hide();
//   }
//   playButton.hide();
// }


// function playGame() {
//   isStartScreen = false;
//   isPlayScreen = true;
//   backButton.show();
//   back2Button.hide();
//   squaresVisible = false;


//   // Hide buttons and play button when going to play screen
//   for (let button of redButtons.concat(blueButtons)) {
//     button.hide();
//   }
//   playButton.hide();
// }


// function goToBlackScreen() {
//   isStartScreen = false;
//   isPlayScreen = false;
//   backButton.show();
//   back2Button.hide();
//   squaresVisible = true;


//   // Show buttons when going back to the black screen
//   for (let button of redButtons.concat(blueButtons)) {
//     button.show();
//   }
//   playButton.show();
// }
