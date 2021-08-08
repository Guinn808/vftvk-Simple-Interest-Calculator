function compute()
{
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    let currentYear = new Date().getFullYear();
    let futureYear = currentYear + years;

    if (isNaN(principal) || principal <= 0) {
        alert("Enter pos. number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML =
            "     If deposit <mark>" + principal + "</mark>,<br>\n" +
            "     at interest rate <mark>" + rate + "%</mark>.<br>\n" +
            "     You receive an amount of <mark>" + interest + "</mark>,<br>\n" +
            "     in year <mark>" + futureYear + "</mark>";
    }
}

function rangeDisplay() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value + "%";
}
