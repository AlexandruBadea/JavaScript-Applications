let display = document.getElementById('display'),
 num1 = 0,
 num2 = 0,
 currentVal = "",
 operator = 9999,
 oppValue = false;

function numClick(num) {
  currentVal += num.toString();
  display.innerHTML = currentVal;
}

// Operators

function oppClick(opp) {
  
  
  if (oppValue === false) {

    num1 = parseFloat(currentVal);
    oppValue = true;
  } 
  else {

    num2 = parseFloat(currentVal);

    if (operator === 1) {
      num1 = num1 + num2;
    } 
    else if (operator === 2) {
      num1 = num1 - num2;
    } 
    else if (operator === 3) {
      num1 = num1 * num2;
    } 
    else if (operator === 4) {
      num1 = num1 / num2;
    }
  } 
  display.innerHTML = num1;
  
  num2 = 0;
  operator = opp;
  currentVal = "";
  
  if (opp === 0) {
    num1 = 0;
    num2 = 0;
    currentVal = "";
    operator = 9999;
    oppValue = false;
    display.innerHTML = num1;
  }
  
}

