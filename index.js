var inputFirst = document.createElement("input");
inputFirst.type = "number";
var inputSecond = document.createElement("input");
inputSecond.type = "number";
var button = document.createElement("button");
button.textContent = "+";
var minusbutton = document.createElement("button");
minusbutton.textContent = "-";
var multiplybutton = document.createElement("button");
multiplybutton.textContent = "*";
var divisionbutton = document.createElement("button");
divisionbutton.textContent = "/";
var h1 = document.createElement("h1");
h1.className = " h1";
var calculator = function (symbol) {
    var firstNumber = +inputFirst.value;
    var secondtNumber = +inputSecond.value;
    var sum;
    if (symbol === "+") {
        sum = firstNumber + secondtNumber;
        h1.innerText = "Result: ".concat(sum);
    }
    else if (symbol === "-") {
        sum = firstNumber - secondtNumber;
        h1.innerText = "Result: ".concat(sum);
    }
    else if (symbol === "*") {
        sum = firstNumber * secondtNumber;
        h1.innerText = "Result: ".concat(sum);
    }
    else if (symbol === "/") {
        sum = firstNumber / secondtNumber;
        h1.innerText = "Result: ".concat(sum);
    }
    inputFirst.value = "";
    inputSecond.value = "";
    document.body.append(h1);
};
button.addEventListener("click", function () { return calculator("+"); });
minusbutton.addEventListener("click", function () { return calculator("-"); });
multiplybutton.addEventListener("click", function () { return calculator("*"); });
divisionbutton.addEventListener("click", function () { return calculator("/"); });
document.body.append(inputFirst, inputSecond, button, minusbutton, multiplybutton, divisionbutton);
