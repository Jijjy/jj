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

    this._arg2v = function (args) {
        return args.length === 2 ? new vec(args[0], args[1]) : args.length === 1 ? args[0] : new vec();
    }
    this.mult = function (m) {
        return new vec(this.x * m, this.y * m);
    };
    this.div = function (m) {
        return new vec(this.x / m, this.y / m);
    };
    this.add = function () {
        let v = this._arg2v(arguments);
        return new vec(this.x + v.x, this.y + v.y)
    };
    this.neg = function () {
        if (arguments.length === 0) return this.mult(-1);
        let v = this._arg2v(arguments);
        return new vec(this.x - v.x, this.y - v.y);
    };
    this.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    this.normalized = function () {
        return this.div(this.magnitude() || 1);
    };
}

vec.lerp = function (a, b, f) {
    return new vec(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
};

vec.distance = function (a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

vec.polar = function (a, r) {
    return new vec(Math.sin(a) * r, Math.cos(a) * r);
}

Array.prototype.randomElement = function () {
    return this[jj.randi(0, this.length)];
};