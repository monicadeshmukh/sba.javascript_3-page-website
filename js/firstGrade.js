function firstGradeProblem() {
  var cnt, ans, text;
  //var count=0;

  // Get the value of the answer field
  ans= document.getElementById("answer").value;

  cnt = document.getElementById("beadBox").childElementCount;
//window.alert("ans: " + ans);
if (ans == cnt){
    text = "You are right!";
    document.getElementById("hifi").style.display = "inline";
}
  else {
      text = "Hmm! Try Again."
      document.getElementById("hifi").style.display = "none";
  }
  
    document.getElementById("result").innerHTML = text;
    document.getElementById("problem").reset();
}