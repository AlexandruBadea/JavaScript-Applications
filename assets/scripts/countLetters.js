const arr = [1, "A", "BB", ["C", 2, ["ceva", "altceva", 3], "ex", 4]];

function countLetters(arr){
  let output = {}; // object
  for(let i = 0; i < arr.length; i++)
  {
    if(typeof arr[i] === "string")
    {
      for(let j = 0; j < arr[i].length; j++)
      {
          output[arr[i][j]] = output[arr[i][j]] + 1 || 1;
      }
    }
    if(Array.isArray(arr[i]))
    {
      let count = countLetters(arr[i]);
      // console.log(count);
      for(let k in count)
      {
        output[k] = output[k] + count[k] || count[k];
      }
    }
  }
  return output;
};

console.log(countLetters(arr));

document.getElementsByClassName("array")[0].innerHTML = JSON.stringify(arr);
document.getElementsByClassName("result")[0].innerHTML = JSON.stringify(countLetters(arr));