function appendToResult(value) {
  var resultElement = document.getElementById("result");
  resultElement.value += value;
}

function clearResult() {
  var resultElement = document.getElementById("result");
  resultElement.value = "";
}

function calculateResult() {
  var resultElement = document.getElementById("result");
  try {
    resultElement.value = eval(resultElement.value);
  } catch (error) {
    resultElement.value = "Error";
  }
}
