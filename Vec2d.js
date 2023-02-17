class Vec2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
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
let point = new Vec2D(10, 15);
console.log(point);
point.normalize();
console.log(point);
