function countElementsByLevel(srcDOMElement, childElementName){
    let count = 0,
        result = {},
        childElements = document.getElementsByTagName(srcDOMElement);
    
    for (let i = 0; i < childElements.length; i++) {
        let childElement = childElements[i];
        if (childElement.nodeName.toLowerCase() == childElementName) {
            count++;
            let level = childElement.getAttribute("data-level");
            if (level in result) {
                result[level]++;
            } else {
                result[level] = 1;
            }
        }
    
        if (childElements[i].tagName === childElementName) {
            count++;
        }
    }
    result[childElementName] = count;
    return result;

};

console.log(countElementsByLevel("DIV", "span"));