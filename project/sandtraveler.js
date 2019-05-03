// Sand Traveler
// Special commission for Sónar 2004, Barcelona
// sand painter implementation of City Traveler + complexification.net

// j.tarbell   May, 2004
// Albuquerque, New Mexico
// complexification.net

// Processing 0085 Beta syntax update
// j.tarbell   April, 2005
var dim = 1000;
var num = 200;
var maxnum = 201;
var cnt = 0;
// minimum distance to draw connections
var mind = 333;

var cities = [];

var goodcolor = ["#3a242b", "#3b2426", "#352325", "#836454", "#7d5533", "#8b7352", "#b1a181", "#a4632e", "#bb6b33", "#b47249", "#ca7239", "#d29057", "#e0b87e", "#d9b166", "#f5eabe", "#fcfadf", "#d9d1b0", "#fcfadf", "#d1d1ca", "#a7b1ac", "#879a8c", "#9186ad", "#776a8e", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];

function setup() {
    createCanvas(1000, 1000);
    //  size(dim,dim,P3D);
    background(255);

    resetAll();
}

function draw() {
    // move cities
    for (var c = 0; c < num; c++) {
        cities[c].move();
    }
    // cycle limiter
    // if (cnt++ > (120 * 30)) {
    //     cnt = 0;
    //     resetAll();
    // }
}


function mousePressed() {
    resetAll();
}

// METHODS -------------------------------------------------------------------

function resetAll() {
    background(255);
    var vt = 4.2;
    var vvt = 0.2;

    cities = [];
    for (t = 0; t < num; t++) {
        var ot = random(TWO_PI);
        var tinc = ot + (1.1 - t / num) * 2 * t * TWO_PI / num;
        var vx = vt * sin(tinc);
        var vy = vt * cos(tinc);
        cities.push(new City(dim / 2 + vx * 2, dim / 2 + vy * 2, vx, vy, t));
        vvt -= 0.00033;
        vt += vvt;
    }

    for (t = 0; t < num; t++) {
        cities[t].findFriend();
    }
}

function citydistance(a, b) {
    if (a != b) {
        // calculate and return distance between cities
        var dx = cities[b].x - cities[a].x;
        var dy = cities[b].y - cities[a].y;
        var d = sqrt(dx * dx + dy * dy);
        return d;
    } else {
        return 0.0;
    }
}


// OBJECTS ------------------------------------------------------------------

class City {

    constructor(x, y, vx, vy, idx) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.myc = somecolor();
        this.idx = idx;

        this.numsands = 3;
        this.sands = [];

        for (var n = 0; n < this.numsands; n++) {
            this.sands.push(new SandPainter());
        }
    }

    move() {
        this.vx += (cities[this.friend].x - this.x) / 1000;
        this.vy += (cities[this.friend].y - this.y) / 1000;

        this.vx *= 0.936;
        this.vy *= 0.936;
        this.x += this.vx;
        this.y += this.vy;

        this.drawTravelers();
    }

    findFriend() {
        this.friend = (this.idx + int(random(num / 5))) % num;
    }

    drawTravelers() {
        var nt = 11;
        for (var i = 0; i < nt; i++) {
            // pick random distance between city
            t = random(TWO_PI);

            // draw traveler
            var dx = sin(t) * (this.x - cities[this.friend].x) / 2 + (this.x + cities[this.friend].x) / 2;
            var dy = sin(t) * (this.y - cities[this.friend].y) / 2 + (this.y + cities[this.friend].y) / 2;
            if (random(1000) > 990) {
                // noise
                dx += random(3) - random(3);
                dy += random(3) - random(3);
            }

            stroke(
              red(cities[this.friend].myc),
              green(cities[this.friend].myc),
              blue(cities[this.friend].myc),
              48);

            point(dx, dy);

            // draw anti-traveler
            dx = -1 * sin(t) * (this.x - cities[this.friend].x) / 2 + (this.x + cities[this.friend].x) / 2;
            dy = -1 * sin(t) * (this.y - cities[this.friend].y) / 2 + (this.y + cities[this.friend].y) / 2;

            if (random(1000) > 990) {
                // noise
                dx += random(3) - random(3);
                dy += random(3) - random(3);
            }
            point(dx, dy);
        }
    }

    drawSandPainters() {
        for (var s = 0; s < this.numsands; s++) {
            this.sands[s].render(this.x, this.y, cities[this.friend].x, cities[this.friend].y);
        }
    }
}

class SandPainter {
    constructor() {

        this.p = random(1.0);
        this.c = somecolor();
        this.g = random(0.01, 0.1);
    }
    render(x, y, ox, oy) {
        // draw painting sweeps
        stroke(red(this.c), green(this.c), blue(this.c), 28);
        point(ox + (x - ox) * sin(this.p), oy + (y - oy) * sin(this.p));

        this.g += random(-0.050, 0.050);
        var maxg = 0.22;
        if (this.g < -maxg) this.g = -maxg;
        if (this.g > maxg) this.g = maxg;
        this.p += random(-0.050, 0.050);
        if (this.p < 0) this.p = 0;
        if (this.p > 1.0) this.p = 1.0;

        var w = this.g / 10.0;
        for (var i = 0; i < 11; i++) {
            var a = 0.1 - i / 110.0;
            stroke(red(this.c), green(this.c), blue(this.c), a * 256);
            point(ox + (x - ox) * sin(this.p + sin(i * w)), oy + (y - oy) * sin(this.p + sin(i * w)));
            point(ox + (x - ox) * sin(this.p - sin(i * w)), oy + (y - oy) * sin(this.p - sin(i * w)));
        }
    }

    renderPerp(x, y, ox, oy) {
        // transform perpendicular
        var mx = (x + ox) / 2;
        var my = (y + oy) / 2;

        var g = 0.42;
        var x1 = mx + (y - my) * this.g;
        var y1 = my - (x - mx) * this.g;

        var ox1 = mx + (oy - my) * this.g;
        var oy1 = my - (ox - mx) * this.g;

        // draw painting sweeps
        stroke(red(this.c), green(this.c), blue(this.c), 28);
        point(ox1 + (x1 - ox1) * sin(this.p), oy1 + (y1 - oy1) * sin(this.p));

        this.g += random(-0.050, 0.050);
        var maxg = 0.22;
        if (this.g < -maxg) this.g = -maxg;
        if (this.g > maxg) this.g = maxg;
        this.p += random(-0.050, 0.050);
        if (this.p < 0) this.p = 0;
        if (this.p > 1.0) this.p = 1.0;

        var w = this.g / 10.0;
        for (var i = 0; i < 11; i++) {
            var a = 0.1 - i / 110.0;
            stroke(red(this.c), green(this.c), blue(this.c), a * 256);
            point(ox1 + (x1 - ox1) * sin(this.p + sin(i * w)), oy1 + (y1 - oy1) * sin(this.p + sin(i * w)));
            point(ox1 + (x1 - ox1) * sin(this.p - sin(i * w)), oy1 + (y1 - oy1) * sin(this.p - sin(i * w)));
        }
    }
}


// COLOR ROUTINES -------------------------------------------------------------

function somecolor() {
    // pick some random good color
    return goodcolor[int(random(goodcolor.length))];
}


// j.tarbell   May, 2004
// Albuquerque, New Mexico
// complexification.net
