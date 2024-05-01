const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const result = document.getElementById("output");

submitButton.addEventListener("click", () => {
  if (textInput.value) {
    const palidrome = textInput.value;
    if (
      palidrome.toLowerCase().replaceAll(" ", "") ==
      palidrome.split("").reverse().join("").toLowerCase().replaceAll(" ", "")
    ) {
      result.innerText = "";
      result.innerText += textInput.value + " is a palidrome";
    } else {
      result.innerText = "";
      result.innerText += textInput.value + "  is not a palidrome";
    }
  } else {
    alert("Please input a value");
  }
});
