let isStarted = false;
let startButton;
let backButton;
let colorButtons = [];
let actionButtons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a start button
  startButton = createButton('Start');
  startButton.position(width / 2 - 50, height / 2);
  startButton.mousePressed(startGame);

  // Create a back button (initially hidden)
  backButton = createButton('Back');
  backButton.position(width - 120, 20);
  backButton.mousePressed(goBack);
  backButton.hide();

  // Create four color buttons with different colors and hide them initially
  for (let i = 0; i < 4; i++) {
    colorButtons[i] = createButton('Block ' + (i + 1));
    colorButtons[i].position(width / 4 * i + 50, height / 2 + 50);
    colorButtons[i].mousePressed(() => changeColor(i));
    colorButtons[i].hide();
  }

  // Create three action buttons (initially hidden)
  for (let i = 0; i < 3; i++) {
    actionButtons[i] = createButton('Action ' + (i + 1));
    actionButtons[i].position(width / 4 * i + 50, height / 2 + 150);
    actionButtons[i].hide();
  }
}

function draw() {
  if (isStarted) {
    // Add other game logic or drawing here
  } else {
    background(220);
    // Add any initial screen drawing here
  }
}

function startGame() {
  isStarted = true;

  // Remove the start button after it is pressed
  startButton.hide();

  // Show the color buttons
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].show();
  }
}

function changeColor(index) {
  if (isStarted) {
    // Change background color based on button index
    if (index === 0) {
      background(255, 0, 0); // Red
    } else if (index === 1) {
      background(0, 0, 255); // Blue
    } else if (index === 2) {
      background(255, 255, 0); // Yellow
    } else if (index === 3) {
      background(169); // Gray (nice)
    }

    // Hide the color buttons and show the action buttons after one is pressed
    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].hide();
    }
    for (let i = 0; i < actionButtons.length; i++) {
      actionButtons[i].show();
    }
    backButton.show();
  }
}

function goBack() {
  isStarted = false;

  // Show the start button and hide the color buttons, action buttons, and back button
  startButton.show();
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].hide();
  }
  for (let i = 0; i < actionButtons.length; i++) {
    actionButtons[i].hide();
  }
  backButton.hide();
}