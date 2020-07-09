function firstGradeProblem() {
  var ans, text;
  //var count=0;

  // Get the value of the answer field
  ans= document.getElementById("answer").value;
//window.alert("ans: " + ans);
if (ans == 7)
    text = "You are right!";
  else 
      text = "Hmm! Try Again."
  
    document.getElementById("result").innerHTML = text;
    document.getElementById("problem").reset();
}