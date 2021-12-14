// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var yesBtn = document.getElementById("yesBtn");
var cancelBtn = document.getElementById("cancelBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
var body = document.getElementById("body");

function addField() {
  var yesText = document.createElement("h2");
  yesText.innerHTML = 'you just clicked "yes"';
  body.appendChild(yesText);
}

function cancelField() {
  var cancelText = document.createElement("h2");
  cancelText.innerHTML = 'you just clicked "Cancel"';
  body.appendChild(cancelText);
}
// remove the model when user clicks yes
yesBtn.onclick = function () {
  var elem = document.getElementById("myModal");
  elem.parentNode.removeChild(elem);
};

cancelBtn.onclick = function () {
  var elem = document.getElementById("myModal");
  elem.parentNode.removeChild(elem);
};

yesBtn.addEventListener("click", function (event) {
  addField();
});
cancelBtn.addEventListener("click", function (event) {
  cancelField();
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
