// Context vs Scope 
// this keyword as Context 
// proper use of call();

// What is the result of the following code? Explain your answer.

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Topi Khanna',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
// Answer
// The code prints Topi Khanna and John Doe. The reason is that the context of a function, what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.

// In the first console.log() call, getFullname() is invoked as a function of the obj.prop object. So, the context refers to the latter and the function returns the fullname property of this object. On the contrary, when getFullname() is assigned to the test variable, the context refers to the global object (window). This happens because test is implicitly set as a property of the global object. For this reason, the function returns the value of a property called fullname of window, which in this case is the one the code set in the first line of the snippet.

// Question 5: call() and apply()
// Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

// Answer
// The issue can be fixed by forcing the context of the function using either the call() or the apply() function. If you don’t know them and their difference, I suggest you to read the article What’s the difference between function.call and function.apply?. In the code below I’ll use call() but in this case apply() would produce the same result:

console.log(test.call(obj.prop));
