let textInputValue = document.getElementById("textbox");
textInputValue.addEventListener("input", function () {
  let text = this.value;
  console.log(text);
  text = text.trim();
  document.getElementById("character").innerHTML = text.length;
  let countWords = text.split(" ");
  let replaceElement = countWords.filter((wordCount) => {
    return wordCount !== "";
  });
  document.getElementById("word").innerHTML = replaceElement.length;
});
