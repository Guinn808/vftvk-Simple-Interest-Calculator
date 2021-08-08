function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    
    
    if (principal == "") { 
        alert("Amount must not be empty");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0) { 
            alert("Enter pos. number");
            document.getElementById("principal").focus();
            return false;
        }
    }

    var temp = new Date().getFullYear();
    var future= parseInt(temp,10) + parseInt(years,10);
    var interest= principal * years * rate / 100;
    var result= "If You deposit <mark>" + principal + "</mark>,<br> at interest rate of <mark>" + rate + "</mark> % <br> You get an amount of <mark>" + interest + ",</mark><br> in year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){ //Show range value in span
    document.getElementById("showRate").innerHTML=newVal + '%';
}
