
function validatePrincipal()
{
    var p = document.getElementById("principal").value;
    if (p<=0)
    {
        window.alert("Enter a positive number")
        document.getElementById("principal").focus();
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    //amount is the sum of the integer value of principal and the float value of interest
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    //convert the ‘No. of Years’ into the actual year in the future, by adding the number of years to the current year 
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + parseInt(years)

    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        // If you deposit $[PRINCIPAL],<br>
        // at an interest rate of [RATE]%.<br>
        // You will receive an amount of $[INTEREST],<br>
        // in the year [YEAR]<br></br>

        // and the numbers in the result are highlighted by using the mark HTML tag around each variable value
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\>You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\>in the year " + "<mark>" + futureYear + "</mark>" + "\<br\>";
    } 

    //test data:
    //Amount = 1000, Rate = 10%, No. of Years = 10
    //...You will receive... $2000 in year ...
}
        