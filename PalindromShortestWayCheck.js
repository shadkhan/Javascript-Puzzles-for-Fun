/**
 It is simple and easist  function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.
The following one line function will return true if str is a palindrome; otherwise, it returns false.
**/

function isPalindrome(str) {
	str = str.replace(/\W/g, '').toLowerCase();
	return (str == str.split('').reverse().join(''));
	}
console.log(isPalindrome("A car, a man, a maraca"));
/**

view in console
1	console.log(isPalindrome("level"));                   // logs 'true'
2	console.log(isPalindrome("levels"));                  // logs 'false'
3	console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true
**/