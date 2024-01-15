
const inputBox = document.getElementById("item");
const ulItems = document.getElementById("to-do-box");

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (userData) => {
  const newItem = document.createElement("li");
  newItem.innerHTML = `${userData}
    <i class="fas fa-times"></i>`;
    newItem.addEventListener("click" , function () {
      this.classList.toggle("done")
    })
    newItem .querySelector("i").addEventListener("click" , function (){
      newItem.remove()
    })
  ulItems.appendChild(newItem);
};
