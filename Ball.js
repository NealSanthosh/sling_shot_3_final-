class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,60,60);
    this.image = loadImage("sprites/fire ball.png");
  }
  display() {
    super.display();
  }
  fly(){
    ball.push(new Ball(100, 300));
  }
}
