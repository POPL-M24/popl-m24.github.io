
a = {x: 3, y: 4};

a.x // => 3
a['x'] // =>3

a = {};
b = {};
a === b // => false

var b = 5;

var b = 5;
b = 5;
this.b = 5;

this.this // => undefined

var add = function(x,y) {
    return x+y;
};

c  = add(3, 4);  // invoking add with arguments 3,4

console.log(c);

var addStaged  = function(x) {
      return function(y) {
          return x+y;
      };
  };

var add3 = addStaged(3);
add3(5); // => 8

var a = {x : 5};
  a.incr = function() {
              this.x = this.x + 1;  
}
a.incr();  // in this call, this in the body of the function is bound to a.
a.x // => 6

var Point = function(x,y) {
    this.x = x;
    this.y = y;
};

var a = {};
a.Point = Point;
a.Point(2,3);  // populates a's x and y fields
a.x;  // => 2
a.y;  // => 3
a;    // {Point: [Function], x: 2, y: 3}

var p2 = Point(2,3) // invoking Point

p2 // => void
this.x // => 2    x is a field in the top level object =this=
x      // => 2    x is a top level field and is identical to =this.x=

add // => [Function]

add.apply(null, [1, 2]) // => 3

var a = {};
Point.apply(a, [2, 3]); 
a.x; // 2
a.y; // 3

Point.w = 5;

var p1 = new Point(2,3);
p1.x; // => 2
p1.y; // => 3

p1.constructor === Point; // => true

a = new Object();

Point.prototype // => {}

Point.prototype.z = 4;  // create a field z in the prototype object.

p3 = new Point(1,2);

p3.z // => 4

p3.constructor === Point // => true
p3.constructor.prototype.z // => 4

var G = function() {};
var g = new G();
g.constructor === G // true
G.constructor === Function // true
Function.constructor === Function // true
Object.constructor === Function // true

g.hasOwnProperty("constructor") // false
G.hasOwnProperty("constructor") // false

G.prototype.constructor === G; // => true
G.prototype.hasOwnProperty("constructor") // true

var G = function() {};
var g = new G();
g.constructor === G;  // true
g.hasOwnProperty("constructor") === false // true
g.prototype === undefined // true

var G = function() {};
var g = new G();
G.prototype.x = 5;
g.x === 5 //  true

var G = function() {};
var g = new G();
var s = new Object();
G.prototype = s;
s.z = 7;
g.z // undefined
var h = new G();
h.z === 7; // true

Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;  // any object constructed by F 
                      // henceforth will inherit from o.
    var b =  new F();
    return b;
};
a = {x:1, y:2};
b = Object.beget(a);
b.x === 1 ; // true
a.z = 5;
b.z === 5; // true

a.constructor === Object ; // true
b.constructor === Object; // true

Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;  // any object constructed by F 
                      // henceforth will inherit from o.
    var b =  new F();
    b.constructor = F;
    return b;
};

a = {x:1, y:2};

b = Object.beget(a);
b.x === 1 ; // true
a.z = 5;
b.z === 5; // true
a.constructor === Object; // true
b.constructor !== Object; // true
