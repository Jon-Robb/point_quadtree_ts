class Vec2D {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  normalize() {
    const magnitude = Math.sqrt(this._x * this._x + this._y * this._y);
    if (magnitude > 0) {
      this._x /= magnitude;
      this._y /= magnitude;
    }
  }
}

let point = new Vec2D(10,15)
console.log(point)
point.normalize()
console.log(point)