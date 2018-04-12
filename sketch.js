var snake = [];
var prevSnake = [];
var food;
var scl = 20;
function setup() {
  createCanvas(600, 600);
  snake[0] = new Snake();
  food = new Food();
  frameRate(10);
  
}

function draw() {
  background(51);
  if (snake[0].gameover) {
    gameOver();
  } else {
    
    if (dist(snake[0].x, snake[0].y, food.x, food.y) < 2 ){
    food.update();
    append(snake, new Snake());
    }
  for (var i = snake.length - 1; i >= 0; i--) {
    if (i === 0) {
      snake[i].update();
    } else {
      var snakeBefore = snake[i - 1];

      snake[i].x = snakeBefore.x;
      snake[i].y = snakeBefore.y;
      var tup = []
      tup[0] = snake[i].x;
      tup[1] = snake[i].y
      prevSnake[i - 1] = [tup];
    }
    snake[i].show();
  }
  
  food.show();

  }
}

function gameOver() {
  alert("Game Over");
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if (snake.length > 1) {
      if (snake[0].yspeed != 1) {
        snake[0].dir(0, -1);
      }
    } else {
      snake[0].dir(0, -1);
    }
  } else if (keyCode == DOWN_ARROW) {
    if (snake.length > 1) {
      if (snake[0].yspeed != -1) {
        snake[0].dir(0, 1);
      }
    } else {
      snake[0].dir(0, 1);
    }
  } else if (keyCode == RIGHT_ARROW) {
    if (snake.length > 1) {
      if (snake[0].xspeed != -1 ) {
        snake[0].dir(1, 0);
      }
    } else {
      snake[0].dir(1, 0);
    }
  } else if (keyCode == LEFT_ARROW) {
    if (snake.length > 1) {
      if (snake[0].xspeed != 1) {
        snake[0].dir(-1, 0);
      }
    } else {
      snake[0].dir(-1, 0);
    }
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.gameover = false;
  
  this.update = function() {
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
    if (this.x > width - 20) {
      // this.x = width - 20;
      this.gameover = true;
    } else if (this.x < 0) {
        // this.x = 0;
      this.gameover = true;
    }
    if (this.y > height - 20) {
      // this.y = height - 20;
      this.gameover = true;
    } else if (this.y < 0) {
      // this.y = 0;
      this.gameover = true;
    }
    if (snake.length > 4) {
    
      for (var i = 4; i < snake.length; i++) {
        if (dist(this.x, this.y, snake[i].x, snake[i].y) < 2) {
          this.gameover = true;
        }
      }
    }
    
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, 20, 20);
  }
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
}

function Food() {
  var food_numbers = [];
  for (var i = 0; i <= (height - scl)/scl; i++) {
    food_numbers[i] = i*scl;
  }

  
  this.x = (random(food_numbers));
  this.y = (random(food_numbers));

  
  
  this.update = function() {
    this.x = (random(food_numbers));
    this.y = (random(food_numbers));
  }
  
  this.show = function() {
    fill(255, 0, 10);
    rect(this.x, this.y, 20, 20);
  }
}

