//Get Input Element
const getInput = document.querySelector("#inputField");
console.log(getInput);

//Get All Buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);

//Store finall result in this variable
let result = "";

// store All buttons in this array then all buttons iterate
let arr = Array.from(buttons);
console.log(arr);
arr.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      getInput.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      getInput.value = result;
    } else if (e.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      getInput.value = result;
    } else {
      result += e.target.innerHTML;
      getInput.value = result;
    }
  });
});
