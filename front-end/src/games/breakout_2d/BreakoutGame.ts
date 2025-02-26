class BreakoutGame {
  protected context!: CanvasRenderingContext2D;

  public init() {
    const $canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = $canvas.getContext("2d") as CanvasRenderingContext2D;
    this.context = context;
  }

  private draw() {}

  private update() {}

  public gameLoop() {
    this.update();
    setInterval(this.draw, 10);
  }
}

export default BreakoutGame;
