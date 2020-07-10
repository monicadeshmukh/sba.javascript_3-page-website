function secondGradeProblem() {
        var ans, text;
        var num1 = document.getElementById("number1").innerHTML;
        var num2 = document.getElementById("number2").innerHTML;
        ans= Number(num1) + Number(num2);
        var userAnswer = document.getElementById("answer").innerHTML;
        //console.log(userAnswer);
        //debugger
    if (ans == userAnswer)
        text = "You are right!";
        else 
            text = "Hmm! Try Again."
        
        document.getElementById("result").innerHTML = text;
        // document.getElementById("secondGradeProblem").reset();
  }