// The dimensions of the game canvas
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

// The dimensions of the paddle
const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 80;

// The dimensions of the ball
const BALL_SIZE = 20;

// The initial position of the ball
const BALL_X = CANVAS_WIDTH / 2;
const BALL_Y = CANVAS_HEIGHT / 2;

// The initial velocity of the ball
const BALL_VX = 5;
const BALL_VY = 5;

// The speed of the paddles
const PADDLE_SPEED = 10;

// Get a reference to the canvas and its context
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Create the player's paddle
const playerPaddle = {
  x: PADDLE_WIDTH / 2,
  y: CANVAS_HEIGHT / 2,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT
};

// Create the AI's paddle
const aiPaddle = {
  x: CANVAS_WIDTH - PADDLE_WIDTH / 2,
  y: CANVAS_HEIGHT / 2,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT
};

// Create the ball
const ball = {
  x: BALL_X,
  y: BALL_Y,
  size: BALL_SIZE,
  vx: BALL_VX,
  vy: BALL_VY
};

// The player's score
let playerScore = 0;

// The AI's score
let aiScore = 0;

// This function is called every frame to update the game state
function update() {
  // Update the ball position based on its velocity
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Check if the ball is hitting the top or bottom of the screen
  if (ball.y < ball.size / 2 || ball.y > CANVAS_HEIGHT - ball.size / 2) {
    // Flip the vertical velocity to make the ball bounce
    ball.vy *= -1;
  }

  // Check if the ball is hitting the player's paddle
  if (ball.x < playerPaddle.x + player
