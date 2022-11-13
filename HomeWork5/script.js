function inputNumber() {
  let a = Number(prompt("Please insert the first number"));
  let b = Number(prompt("Please insert the second number"));
  let c = a % b;

  if (c == 0) {
    alert(
      "Result is " + a / b + " division =" + c + " .The number is  integer"
    );
  } else if (c !== 0) {
    alert(
      "Result is " + a / b + " division =" + c + " .The number is not integer"
    );
  }
}
