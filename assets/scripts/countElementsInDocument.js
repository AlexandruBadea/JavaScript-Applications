function countElementsInDocument(document, elementName) {
    let count = 0;
    const elements = document.getElementsByTagName(elementName);
    for (let i = 0; i < elements.length; i++) {
        count++;
    }
    return count;
}

console.log(countElementsInDocument(document, "div"));
let div = document.getElementsByTagName("div");
document.getElementsByClassName("divs")[0].innerHTML = "In acest document sunt " + div.length + " elemente div";

console.log(countElementsInDocument(document, "span"));
let span = document.getElementsByTagName("span");
document.getElementsByClassName("spans")[0].innerHTML = "In acest document sunt " + span.length + " elemente span";