class Ball {
  protected context!: CanvasRenderingContext2D;
  protected x!: number;
  protected y!: number;

  public init(context: CanvasRenderingContext2D, x: number, y: number) {
    this.context = context;
    this.x = x;
    this.y = y;
  }

  private draw() {
    this.context.clearRect(0, 0, 500, 500);
    this.context.beginPath();
    this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
    this.x += 2;
    this.y += 2;
  }

  private update() {
    console.log("update entity");
  }
}

export default Ball;
