const celsius = document.getElementById("cel");
const fahrenheit = document.getElementById("fah");

celsius.addEventListener("input", function () {
  let celciousCurrentValue = this.value;
  let fah = (celciousCurrentValue * 9) / 5 + 32;
  fahrenheit.value = fah.toFixed(4);
});

fahrenheit.addEventListener("input", function () {
  let fahrenheitCurrentValue = this.value;
  let cel = ((fahrenheitCurrentValue - 32) * 5) / 9;
  celsius.value = cel.toFixed(4);
});
