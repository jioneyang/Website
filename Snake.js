function Snake() {
  this.x = 0;
  this.y = height;
  this.x_speed = 3;
  this.y_speed = 0;
  
  this.update = function() {
  }
  
  this.show = function() {
    fill(255);
    ellipse(x, y, 10, 10);
  }
}