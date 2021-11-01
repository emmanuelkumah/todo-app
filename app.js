//select the text input and button
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submit-btn");

//add event listener to the button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputText.value);
  //clear input field
  inputText.value = "";
});
