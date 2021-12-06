const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const button_5 = document.getElementById("5%-btn");
const button_10 = document.getElementById("10%-btn");
const button_15 = document.getElementById("15%-btn");
const button_25 = document.getElementById("25%-btn");
const button_50 = document.getElementById("50%-btn");
const tipAmountText = document.getElementById("tip-result-text");
const totalText = document.getElementById("total-result-text");
const resetBtn = document.querySelector(".reset-btn");
const errormsg = document.querySelector(".error-msg");
const customInput = document.querySelector(".custom-input");

let billValue;
let peopleValue;
let customValue;
let tip = 0;
let tipPercent = 0;

// Event Listener

button_5.addEventListener("click", function () {
  tipPercent = 0.05;
  calculateTip();
  calculateTotal();
});
button_10.addEventListener("click", function () {
  tipPercent = 0.1;
  calculateTip();
  calculateTotal();
});
button_15.addEventListener("click", function () {
  tipPercent = 0.15;
  calculateTip();
  calculateTotal();
});
button_25.addEventListener("click", function () {
  tipPercent = 0.25;
  calculateTip();
  calculateTotal();
});
button_50.addEventListener("click", function () {
  tipPercent = 0.5;
  calculateTip();
  calculateTotal();
});
customInput.addEventListener("keyup", function () {
  // Convert to custom number to percentage
  tipPercent = customInput.value / 100;
  calculateTip();
  calculateTotal();
});

// Reset all input and variables
resetBtn.addEventListener("click", function () {
  billValue = 0;
  peopleValue = 0;
  tipPercent = 0;
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";
  tipAmountText.innerHTML = "$0.00";
  totalText.innerHTML = "$0.00";
});

// Functions
// checks if people input is 0
function validation() {
  const peopleValue = peopleInput.value;
  if (peopleValue == 0) {
    errormsg.classList.add("show");
    peopleInput.classList.add("show");
  } else {
    errormsg.classList.remove("show");
    peopleInput.classList.remove("show");
  }
}

// calculates tip in $ for each person
function calculateTip() {
  billValue = billInput.value;
  peopleValue = peopleInput.value;
  //   Formula
  tip = (billValue / peopleValue) * tipPercent;

  //   Checks if fields are empty
  if (billValue == "" || peopleValue == "" || tip == NaN || tipPercent == NaN) {
    //   set default
    tipAmountText.innerHTML = "$0.00";
  } else {
    //   Show result
    tipAmountText.innerHTML = "$" + parseFloat(tip).toFixed(2);
  }
  return tip;
}

// calculates total $ for each person
function calculateTotal() {
  billValue = billInput.value;
  peopleValue = peopleInput.value;
  //   Get tip from calculate tip function
  let tipAmount = calculateTip();
  //   Formula
  let total = billValue / peopleValue + tipAmount;
  //   Checks if fields are empy
  if (billValue == " " || peopleValue == "") {
    //   set default
    totalText.innerHTML = "$0.00";
  } else {
    //   Show result
    totalText.innerHTML = "$" + parseFloat(total).toFixed(2);
  }
}
