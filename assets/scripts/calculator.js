const arr = [1, "A", "BB", ["C", 2, ["ceva", "altceva", 3], "ex", 4]];

function countLetters(arr){
  let output = {};
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
      countLetters(arr[i]);
    }
  }
  return output;
};

console.log(countLetters(arr));