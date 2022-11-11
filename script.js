let iptext = document.getElementById("iptext");
function inputValue(value) {
    iptext.value += value;
}
function result() {
    iptext.value = eval(iptext.value);
}
function deleteResult() {
    iptext.value="";
}