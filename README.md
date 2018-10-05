# jj
Just some rough, untested personal little math helpers

# Minified:
`
var jj={lerp:function(a,b,f){return a+(b-a)*f},clamp:function(f,min,max){return Math.min(max,Math.max(min,f))},rand:function(min,max){return this.lerp(min,max,Math.random())},randi:function(min,max){return Math.floor(this.lerp(min,max,Math.random()))},randv:function(len){return new vec(this.rand(-len,len),this.rand(-len,len))},range:function(n,cbk){let result=[];for(let i=0;i<n;i++)result.push(cbk?cbk(n):n);return result}};function vec(x,y){this.x=x||0,this.y=y||0,this.mult=function(m){return new vec(this.x*m,this.y*m)},this.div=function(m){return new vec(this.x/m,this.y/m)},this.add=function(){return 1===arguments.length?new vec(this.x+arguments[0].x,this.y+arguments[0].y):new vec(this.x+arguments[0],this.y+arguments[1])},this.neg=function(){return 1===arguments.length?new vec(arguments[0].x,arguments[0].y):2===arguments.length?new vec(arguments[0],arguments[1]):this.mult(-1)},this.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},this.normalized=function(){return this.div(this.magnitude()||1)}}vec.lerp=function(a,b,f){return new vec(a.x+(b.x-a.x)*f,a.y+(b.y-a.y)*f)},vec.distance=function(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))},vec.polar=function(angle,radius){return new vec(Math.sin(angle)*radius,Math.cos(angle)*radius)},vec.poly=function(radius,numSides,orientation){orientation=orientation||0;var points=[],angle=2*Math.PI/numSides;for(let i=0;i<numSides;i++)points.push(vec.polar(i*angle+orientation*angle,radius));return points},Array.prototype.randomElement=function(){return this[jj.randi(0,this.length)]};
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
    },
    range: function (n, cbk) {
        let result = [];
        for (let i = 0; i < n; i++) result.push(cbk ? cbk(n) : n);
        return result;
    }
};

function vec(x, y) {
    this.x = x || 0;
    this.y = y || 0;

    this.mult = function (m) {
        return new vec(this.x * m, this.y * m);
    };
    this.div = function (m) {
        return new vec(this.x / m, this.y / m);
    };
    this.add = function () {
        if (arguments.length === 1)
            return new vec(this.x + arguments[0].x, this.y + arguments[0].y);
        return new vec(this.x + arguments[0], this.y + arguments[1]);
    };
    this.neg = function () {
        if (arguments.length === 1) return new vec(arguments[0].x, arguments[0].y);
        if (arguments.length === 2) return new vec(arguments[0], arguments[1]);
        return this.mult(-1);
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

vec.polar = function (angle, radius) {
    return new vec(Math.sin(angle) * radius, Math.cos(angle) * radius);
}

vec.poly = function (radius, numSides, orientation) {
    orientation = orientation || 0;
    var points = [];
    var angle = 2 * Math.PI / numSides;
    for (let i = 0; i < numSides; i++) {
        points.push(vec.polar(i * angle + orientation * angle, radius));
    }
    return points;
}

Array.prototype.randomElement = function () {
    return this[jj.randi(0, this.length)];
};
```
