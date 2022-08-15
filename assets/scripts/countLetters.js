const arr = [1, "A", "BB", ["C", 2, ["ceva", "altceva", 3], "ex", 4]];

function countLetters(arr){
    let output = {};
    arr.forEach(item => {
        if(typeof item === "string"){
            item.split("").forEach((letter) => {
                if(output[letter]){
                    output[letter] += 1;
                }else{
                    output[letter] = 1;
                }
            });
        }
        if(Array.isArray(item)){
            let temp = countLetters(item);
            for(let k in temp){
                if(output[k]){
                    output[k] += temp[k];
                }else{
                    output[k] = temp[k];
                }
            }
        }
    });
    return output;
};

console.log(countLetters(arr));

document.getElementsByClassName("array")[0].innerHTML = JSON.stringify(arr);
document.getElementsByClassName("result")[0].innerHTML = JSON.stringify(countLetters(arr));