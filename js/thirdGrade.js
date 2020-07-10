function thirdGradeProblem() {

    var grid = new Map();
    var key;
    var value = [];
    var val1, val2;

    key = "+";
    val1 = document.getElementById("additionNum1").value;
    val2 = document.getElementById("additionNum2").value;
    value = [val1,val2];
    grid.set(key,value);

    key = "-";
    val1 = document.getElementById("subtractionNum1").value;
    val2 = document.getElementById("subtractionNum2").value;
    value = [val1,val2];
    grid.set(key,value);

    key = "*";
    val1 = document.getElementById("multiplicationNum1").value;
    val2 = document.getElementById("multiplicationNum2").value;
    value = [val1,val2];
    grid.set(key,value);

    key = "/";
    val1 = document.getElementById("divisionNum1").value;
    val2 = document.getElementById("divisionNum2").value;
    value = [val1,val2];
    grid.set(key,value);

    var additionResult = document.getElementById("additionResult").value;
    var subtractionResult = document.getElementById("subtractionResult").value;
    var multiplicationResult = document.getElementById("multiplicationResult").value;
    var divisionResult = document.getElementById("divisionResult").value;
    
    var ans;
    var result = true;

    const iterator1 = grid[Symbol.iterator]();

    for (let item of iterator1) {
        if (item[0] === "+"){
            ans = Number(item[1][0]) + Number(item[1][1]);
            document.getElementById("additionAnswer").innerHTML = ans;
            if (Number(additionResult) != ans) result = false;
        }
        else if (item[0] === "-"){
            ans = Number(item[1][0]) - Number(item[1][1]);
            document.getElementById("subtractionAnswer").innerHTML = ans;
            if (Number(subtractionResult) != ans) result = false;
        }
        else if (item[0] === "*"){
            ans = Number(item[1][0]) * Number(item[1][1]);
            document.getElementById("multiplicationAnswer").innerHTML = ans;
            if (Number(multiplicationResult) != ans) result = false;
        }
        else if (item[0] === "/"){
            ans = Number(item[1][0]) / Number(item[1][1]);
            document.getElementById("divisionAnswer").innerHTML = ans;
            if (Number(divisionResult) != ans) result = false;
        }
    }
   
    if (result) {
        text = "You are right!";
        document.getElementById("hifi").style.display = "inline";
    }
    else {
        text = "Hmm! Try Again."
        document.getElementById("hifi").style.display = "none";
    }
    
    document.getElementById("result").innerHTML = text;
    // document.getElementById("secondGradeProblem").reset();
}