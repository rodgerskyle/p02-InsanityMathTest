function run(){
var answer1 = document.getElementById("answerText").value;
var amountCorrect = 0;
if (isNaN(answer1)) {
  window.alert("The input must be a number!!");
}
else if (answer1.includes(" ")){
  window.alert("The input must be a number and/or not contain a space!!");
}
else if (answer1 == ""){
  window.alert("The input must be a number!!");
}
else if (answer1 == 7363431296){
  amountCorrect = amountCorrect + 1;
  setCookie("correct", "amountCorrect");
  console.log(amountCorrect);
  //courtesy of http://www.w3schools.com/jsref/prop_text_disabled.asp
  document.getElementById("answerText").disabled = true;
  window.alert("The answer you entered was correct!\nGo to the bottom and press Click Here for the next test.");
}
else{
document.getElementById("answerText").disabled = true;
window.alert("The answer you entered was incorrect.\nGo to the bottom and press Click Here for the next test.");
}
}
function run2();{
  var answer2 = document.getElementById("answerText").value;
  var amountCorrect = getCookie("correct");
  console.log (amountCorrect);
  if (isNaN(answer2)) {
    window.alert("The input must be a number!!");
  }
  else if (answer2.includes(" ")){
    window.alert("The input must be a number and/or not contain a space!!");
  }
  else if (answer2 == ""){
    window.alert("The input must be a number!!");
  }
  else if (answer2 == 7456){
    amountCorrect = amountCorrect + 1;
    setCookie("correct", "amountCorrect");
    console.log(amountCorrect);
    //courtesy of http://www.w3schools.com/jsref/prop_text_disabled.asp
    document.getElementById("answerText").disabled = true;
    window.alert("The answer you entered was correct!\nGo to the bottom and press Click Here for the next test.");
  }
  else{
  document.getElementById("answerText").disabled = true;
  window.alert("The answer you entered was incorrect.\nGo to the bottom and press Click Here for the next test.");
  }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
