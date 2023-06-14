const inputFirst: HTMLInputElement = document.createElement("input");
inputFirst.type = "number";

const inputSecond: HTMLInputElement = document.createElement("input");
inputSecond.type = "number";

const button: HTMLButtonElement = document.createElement("button");
button.textContent = "+";

const minusbutton: HTMLButtonElement = document.createElement("button");
minusbutton.textContent = "-";

const multiplybutton: HTMLButtonElement = document.createElement("button");
multiplybutton.textContent = "*";

const divisionbutton: HTMLElement = document.createElement("button");
divisionbutton.textContent = "/";

const h1: HTMLHeadingElement = document.createElement("h1");
h1.className = " h1";

const calculator = (symbol: string) => {
  const firstNumber: number = +inputFirst.value;
  const secondtNumber: number = +inputSecond.value;
  let sum: number;

  if (symbol === "+") {
    sum = firstNumber + secondtNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "-") {
    sum = firstNumber - secondtNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "*") {
    sum = firstNumber * secondtNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "/") {
    sum = firstNumber / secondtNumber;
    h1.innerText = `Result: ${sum}`;
  }

  inputFirst.value = "";
  inputSecond.value = "";
  document.body.append(h1);
};

button.addEventListener("click", () => calculator("+"));
minusbutton.addEventListener("click", () => calculator("-"));
multiplybutton.addEventListener("click", () => calculator("*"));
divisionbutton.addEventListener("click", () => calculator("/"));

document.body.append(
  inputFirst,
  inputSecond,
  button,
  minusbutton,
  multiplybutton,
  divisionbutton
);
