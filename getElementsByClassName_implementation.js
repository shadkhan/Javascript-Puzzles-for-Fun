
//# Get Elements by Class Name

//Implement the `getElementsByClassName(element, className)` function in Javascript.


var customSearch = function (element, className) {
  var found  = [];
  var search = ' ' + className + ' ';

  (function traverse (node) {
    // Loop through all the child nodes
    for (var i = 0; i < node.childNodes.length; i++) {
      var currentNode  = node.childNodes[i];
      var currentClass = currentNode.className;

      // Check if the class name exists within the current nodes class
      // I believe I learnt of this technique from jQuery source code.
      if (currentClass && ~(' ' + currentClass + ' ').indexOf(search)) {
        found.push(currentNode);
      }

      // If the current node have more child nodes, continue traversing.
      currentNode.childNodes && traverse(currentNode);
    }
  })(element);

  return found;
}; 

// 'spch' is class name in html
customSearch(document, 'spch');
