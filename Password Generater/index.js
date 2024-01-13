const upperSet = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*(_+}?>./|}";

// selector
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbols");

const genreateRandomNumber = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const passwordGenrater = (password = "") => {
  if (upperInput.checked) {
    password += genreateRandomNumber(upperSet);
  }
  if (lowerInput.checked) {
    password += genreateRandomNumber(lowerSet);
  }
  if (numberInput.checked) {
    password += genreateRandomNumber(numberSet);
  }
  if (symbolInput.checked) {
    password += genreateRandomNumber(symbolSet);
  }

  if (password.length < totalChar.value) {
    return passwordGenrater(password);
  }
passBox.innerText = truncateString(password, totalChar.value);
  
};

document.getElementById("btn").addEventListener("click", function () {
  passwordGenrater();
});
const truncateString = (str, num) => {
  if (str.length > num) {
    let subr = str.substring(0, num);
    return subr;
  } else {
    return str;
  }
};
