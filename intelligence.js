function run(){
var answer1 = document.getElementById("answerText").value;
var amountCorrect = 0;
if (isNaN(answer1)) {
  window.alert("The input must be a number!!");
}
else if (answer1 == 7363431296){
  amountCorrect = amountCorrect + 1;
  console.log(amountCorrect);
  //courtesy of http://www.w3schools.com/jsref/prop_text_disabled.asp
  document.getElementById("answerText").disabled = true;
}
else{
document.getElementById("answerText").disabled = true;
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
