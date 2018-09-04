# jj
Just some rough, untested personal little math helpers

# Minified:
`
var jj = { lerp: function (t, n, i) { return t + (n - t) * i }, clamp: function (t, n, i) { return Math.min(i, Math.max(n, t)) }, rand: function (t, n) { return this.lerp(t, n, Math.random()) }, randi: function (t, n) { return Math.floor(this.lerp(t, n, Math.random())) }, randv: function (t) { return new vec(this.rand(-t, t), this.rand(-t, t)) } }; function vec(t, n) { this.x = t || 0, this.y = n || 0, this.fromPolar = function () { return new vec(Math.sin(this.x) * this.y, Math.cos(this.x) * this.y) }, this.mult = function (t) { return new vec(this.x * t, this.y * t) }, this.div = function (t) { return this.mult(1 / t) }, this.add = function (t, n) { return isNaN(t) ? new vec(this.x + t.x, this.y + t.y) : new vec(this.x + t, this.y + n) }, this.neg = function (t, n) { return t || n ? isNaN(t) ? new vec(this.x - t.x, this.y - t.y) : new vec(this.x - t, this.y - n) : this.mult(-1) }, this.magnitude = function () { return Math.sqrt(this.x * this.x + this.y * this.y) }, this.normalized = function () { var t = this.magnitude(); return 0 === t ? new vec : new vec(this.x / t, this.y / t) } } vec.lerp = function (t, n, i) { return new vec(t.x + (n.x - t.x) * i, t.y + (n.y - t.y) * i) }, vec.distance = function (t, n) { return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)) }, Array.prototype.randomElement = function () { return this[jj.randi(0, this.length)] };
`
# Source:
```js
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

```
