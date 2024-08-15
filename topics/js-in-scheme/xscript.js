



// Function tests
> typeof(Function)
'function'
> Function.hasOwnProperty("prototype")
true
> var FunctionProto = Function.prototype
undefined
> typeof(FunctionProto)
'function'
> FunctionProto.hasOwnProperty("prototype")
false

// Object
> typeof(Object)
'function'
> Object.hasOwnProperty("prototype")
true

// ObjProto
> var ObjProto = Object.prototype;
undefined
> typeof(ObjProto)
'object'
> ObjProto.hasOwnProperty("prototype")
false

> var a = {x:3};
undefined
> a.x
3
> a.hasOwnProperty("prototype")
false
> a.hasOwnProperty("x");
true
> a.hasOwnProperty("y");
false
> a.y
undefined

> var Point = function(y) {this.y = y;};
undefined


> typeof(Point)
'function'
> Point.constructor === Function
true
> Point.constructor.prototype === FunctionProto
true
> var p = new Point(5)
undefined
> p.constructor === Point
true
> p.hasOwnProperty("y")
true
> p.y
5

// set a field in Point's prototype.
// It should be inherited by p

> Point.prototype.z = 2
2
> p.z
2

//  set a field in ObjProto
// All other objects should inherit this.
> ObjProto.w = 10
10
> Function.w
10
> Object.w
10
> Point.w
10
> p.w
10
> a.w
10