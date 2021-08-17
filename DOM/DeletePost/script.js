document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("delete-info").style.display = "none";
});

document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
      document.getElementById("delete-btn").removeAttribute("disabled");
    }
    //type: deletexxxetc it will be unabled.. to control overflow after delete add this else consition
    else {
      document.getElementById("delete-btn").setAttribute("disabled", true);
    }
  });
