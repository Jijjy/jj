var jj = {
    lerp: function (a, b, f) {
        return a + (b - a) * f;
    },
    clamp: function (f, min, max) {
        return Math.min(max, Math.max(min, f));
    },
    rand: function (min, max) {
        return this.lerp(min, max, Math.random());
    },
    randi: function (min, max) {
        return Math.floor(this.lerp(min, max, Math.random()));
    },
    randv: function (len) {
        return new vec(this.rand(-len, len), this.rand(-len, len));
    }
};

function vec(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.fromPolar = function () { return new vec(Math.sin(this.x) * this.y, Math.cos(this.x) * this.y); };
    this.mult = function (m) { return new vec(this.x * m, this.y * m); };
    this.div = function (m) { return this.mult(1 / m); };
    this.add = function (a, b) { return isNaN(a) ? new vec(this.x + a.x, this.y + a.y) : new vec(this.x + a, this.y + b); };
    this.neg = function (a, b) { return (!a && !b) ? this.mult(-1) : isNaN(a) ? new vec(this.x - a.x, this.y - a.y) : new vec(this.x - a, this.y - b); };
    this.magnitude = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    this.normalized = function () {
        var m = this.magnitude();
        if (m === 0) {
            return new vec();
        } else {
            return new vec(this.x / m, this.y / m);
        }
    };
}

vec.lerp = function (a, b, f) {
    return new vec(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
};

vec.distance = function (a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

Array.prototype.randomElement = function () { return this[jj.randi(0, this.length)]; };
