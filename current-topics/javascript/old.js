var r = {};
G.prototype = r;
G.prototype.r.x = 5;
g.x; // => 5

g inherits x from its constructor's prototype (r).