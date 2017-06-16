// How to check Balanced Parenthes multiple ways

// Solution #1  My Simpler version using stack
function myCheck(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '{' || str[i] == '(') {
            stack.push(str[i]);
            console.log(stack);
        } else if (str[i] == ']') {
            if (stack.length <= 0) return false;
            if (stack.pop() != '[') return false;
        } else if (str[i] == '}') {
            if (stack.length <= 0) return false;
            if (stack.pop() != '{') return false;
        } else if (str[i] == ')') {
            if (stack.length <= 0) return false;
            if (stack.pop() != '(') return false;
        }


    }
    return !stack.length;
}
var str = "[{{(dfgdfg)}})";
myCheck(str)




//Solution #2  with stack

function parenthesesAreBalanced(s) {
    var parentheses = "[]{}()",
        stack = [], //Parentheses stack
        i, //Index in the string
        c; //Character in the string

    for (i = 0; c = s[i++];) {
        var bracePosition = parentheses.indexOf(c),
            braceType;
        //~ is truthy for any number but -1
        if (!~bracePosition)
            continue;

        braceType = bracePosition % 2 ? 'closed' : 'open';

        if (braceType === 'closed') {
            //If there is no open parenthese at all, return false OR
            //if the opening parenthese does not match ( they should be neighbours )
            if (!stack.length || parentheses.indexOf(stack.pop()) != bracePosition - 1)
                return false;
        } else {
            stack.push(c);
        }
    }
    //If anything is left on the stack <- not balanced
    return !stack.length;
}

console.log('{}([]) true', parenthesesAreBalanced('{}([])'));
console.log('{{ false', parenthesesAreBalanced('{{'));
console.log('[(]) false', parenthesesAreBalanced('[(])'));
console.log("{}([]) true", parenthesesAreBalanced("{}([])"));
console.log("([}]) false", parenthesesAreBalanced("([}])"));
console.log("([]) true", parenthesesAreBalanced("([])"));
console.log("()[]{}[][]", parenthesesAreBalanced("()[]{}[][]"));




// Solution #3 similar to above but little simpler
function parenCheck(string) {
    var parentheses = "[]{}()",
        stack = [],
        i, character, bracePosition;

    for (i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);

        if (bracePosition === -1) {
            continue;
        }

        if (bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if (stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
var str = "{{[()fdgfdgdf)]}}";
parenCheck(str);

