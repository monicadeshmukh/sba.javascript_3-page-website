function secondGradeProblem() {
    var ans, text;
    //var count=0;
  
    // Get the value of the answer field
    let num1 = Number(document.getElementById("number1").innerHTML);
    let num2 = Number(document.getElementById("number2").innerHTML);
    ans= num1 + num2;
    let userAnswer = document.getElementById("answer");
  //window.alert("ans: " + ans);
  if (ans == userAnswer)
      text = "You are right!";
    else 
        text = "Hmm! Try Again."
    
      document.getElementById("result").innerHTML = text;
      document.getElementById("secondGradeProblem").reset();
  }