

/** How object behave in javascript when use as key **/

var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo";
map[bar] = "bar";

console.log(map[foo]); // what will this display??

//Answer
var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = "foo"; // --> map["[Object object]"] = "foo";
map[bar] = "bar"; // --> map["[Object object]"] = "bar";
// NOTE: second mapping REPLACES first mapping!

alert(map[foo]); // --> alert(map["[Object object]"]);
// and since map["[Object object]"] = "bar",
// this will alert "bar", not "foo"!!
//    SURPRISE! ;-)

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
/* output 
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
In the inner function, though, this no longer refers to myObject. As a result, 
this.foo is undefined in the inner function, whereas the reference to the local
variable self remains in scope and is accessible there.
*/
