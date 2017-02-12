

/** Common Closure problem in development
*   Given 10 html elements, what's the output on the console if I click on the third item?


**/
var items = document.querySelectorAll('.items');
for (var i = 0, max = items.length; i < max; i++) {
    var element = items[i];
    element.addEventListener('click', function() {
        console.log('you clicked on element number ' + i);
    });
}

// It will be 10 ..... Why?  


// How to fix this behavior?


// One way  using inline IIFE it will create closure and keep the i scope as reference 
//  This will solve the problem but not great way

var items = document.querySelectorAll('.items');

for (var i = 0, max = items.length; i < max; i++) {

    var element = items[i];
    (function(i) {

        element.addEventListener('click', function() {

            console.log('you clicked on element number ' + i);

        });

    })(i)

}


// Another way similar  with little addition to present scenario but still using inline anonymous func
var body = document.getElementsByTagName('body')[0];

for (var i = 0, max = 5; i < max; i++) {

    var div = document.createElement('div');

    div.className = "items";

    div.setAttribute('style', 'width: 100%; height: 60px; margin-bottom: 30px; background-color: #000; cursor: pointer')

    body.appendChild(div)

}

var items = document.querySelectorAll('.items');

for (var i = 0, max = items.length; i < max; i++) {

    var element = items[i];

    element.addEventListener('click', (function(n) {

        return function() {

            alert('you clicked on element number ' + n);

        }

    })(i));

}



// Here we will break the code little , will use closure but not inline or IIFE
var items = document.querySelectorAll('.items');
for (var i = 0, max = items.length; i < max; i++) {
    var element = items[i];
    element.addEventListener('click', createLog(i));
}


function createLog(i) {
    return function logLocal() {
        console.log('you clicked on element number' + i);
    }
}



/**if  we can use let in this place we can solve the scope problem like this
for (var i = 0; i < letNode.length; i++) {
        let j = i;
        letNode[i].addEventListener('click', function() { console.log(j); }
 }
**/