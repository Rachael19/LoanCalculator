document.getElementById('loan-form').addEventListener("submit", calculate);      //adds eventlistener on the submission of the form
console.log("script loaded");

function calculate(e) {
    e.preventDefault();
    console.log("Form submitted");

    const loanamt = document.getElementById('loan-amount').value;          //getting the values of all entered values
    const interest = document.getElementById('percentage').value;
    const years = document.getElementById('years').value;
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalAmount = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(loanamt);                        //converting string values to Float
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    console.log(`Principal: ${principal}, Interest: ${calculatedInterest}, Payments: ${calculatedPayments}, Monthly: ${monthly}`);

    if (isFinite(monthly)) {             //Condition to check if Monthly field is contaning values so(IS finite)
        monthlyPayment.value = monthly.toFixed(2);
        totalAmount.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        document.getElementById('loading').style.display = "block";          //displaying the loading gif on submission of form
        setTimeout(function() {
            document.getElementById('loading').style.display = "none";              //after 2 seconds hiding the loading giffy
            document.getElementById('results').style.display = "block";             //Displaying the results section
        }, 2000); // Simulating loading time
    // // } else {
    // //     showError("Please enter valid amount values.");
    // // }
}
}

// function showError(error) {
//     console.log("Error is: ", error);
//     const errorDiv = document.createElement("div");
//     errorDiv.className = "alert alert-danger";
//     errorDiv.appendChild(document.createTextNode(error));

//     const card = document.querySelector(".card");
//     const heading = document.querySelector(".heading");
//     card.insertBefore(errorDiv, heading);

//     setTimeout(function() {
//         document.querySelector('.alert').remove();
//     }, 3000);
// }
