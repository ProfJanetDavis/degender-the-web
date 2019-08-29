// Collect in a list all text nodes under an element elmnt
// Source: https://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
function textNodesUnder(elmnt){
  const array = [];
  const walk = document.createTreeWalker(elmnt,NodeFilter.SHOW_TEXT,null,false);
  let node = null;
  while (node = walk.nextNode()) array.push(node);
  return array;
}

// Heuristically and recursively determine whether the given node is editable:
// Whether it has an ancestor that is a textarea, input, or form,
// or whether an ancestor has "edit" in its id or class.
function isEditable(node) {
    if (node == null) {
        // Base case
        return false;
    } else if (node.nodeType === 1) {
        // It's an element - check for real
        return ((node != null)
            && ((node.tag == "textarea")
             || (node.tag == "input")
             || (node.tag == "form")
             || (("string" == typeof(node.className))
                 && (node.className.includes("edit")))
             || (("string" == typeof(node.id))
                 && (node.id.includes("edit")))
             || isEditable(node.parentNode)));
     } else {
         // It's probably a text node - check the parent
         return isEditable(node.parentNode);
     }
}

export { textNodesUnder, isEditable };
