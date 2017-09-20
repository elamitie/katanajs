export default class Vector2 {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    cloneFrom(other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    mult(other) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    }

    div(other) {
        this.x /= other.x;
        this.y /= other.y;
        return this;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    rotate(sin, cos) {
        let x = this.x;
        let y = this.y;

        this.x = x * cos - y * sin;
        this.y = x * sin + y * cos;
        return this;
    }

    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }

    get angle() {
        return Math.atan2(this.x, this.y);
    }

    get normal() {
        let distance = this.length;
        return new Vector2(this.x / distance, this.y / distance);
    }

    normalize(to = 1) {
        let distance = this.length;

        this.x = (this.x / distance) * to;
        this.y = (this.y / distance) * to;

        return this;
    }

    static get zero() {
        return new Vector2();
    }

    static get one() {
        return new Vector2(1, 1);
    }

}
