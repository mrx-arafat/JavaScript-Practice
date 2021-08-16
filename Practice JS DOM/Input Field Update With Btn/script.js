const updateBtn = document.getElementById("update");

updateBtn.addEventListener("click", function () {
  const nameField = document.getElementById("name-field");

  //   console.log(nameField.value);
  const p = document.getElementById("get-paragraph");
  p.innerText = nameField.value;
  //clear after update
  nameField.value = "";
});
