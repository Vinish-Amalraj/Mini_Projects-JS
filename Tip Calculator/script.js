let billamount = document.getElementById("Bill");
let Tip = document.getElementById("Tip");
let person = document.getElementById("Persons");
let Amount = document.getElementById("Amount");
let incre = document.getElementById("in");
let decre = document.getElementById("de");
let num = 1;
const total = () => {
  //Total Calculation function
  Amount.innerText = `Rs.${Math.floor(
    (Number(billamount.value) +
      (Number(billamount.value) * Number(Tip.value)) / 100) /
      num
  )}`;
};
incre.onclick = () => {
  //add Sharing Persons
  num += 1;
  person.innerText = num;
  Amount.innerText = `Rs.${Math.floor(
    (Number(billamount.value) +
      (Number(billamount.value) * Number(Tip.value)) / 100) /
      num
  )}`;
};
decre.onclick = () => {
  //decresing sharing Persons
  if (num != 1) {
    num -= 1;
  } else {
    num = 1;
    alert("If you Want Minimum 1 person");
  }
  person.innerText = num;
  Amount.innerText = `Rs.${Math.floor(
    (Number(billamount.value) +
      (Number(billamount.value) * Number(Tip.value)) / 100) /
      num
  )}`;
};
