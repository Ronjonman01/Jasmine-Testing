window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      update()
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    document.getElementById("loan-amount").value = "10000"
    document.getElementById("loan-years").value = "5"
    document.getElementById("loan-rate").value = "4"
  }
  
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(userInput) {
    const principle = parseFloat(userInput.amount);
    const numPayments = parseFloat(userInput.years) * 12;
    const interest = (parseFloat(userInput.rate) / 12) / 100;
  
    monthly = (principle * interest) / (1- Math.pow((1+ interest),-numPayments));
    if(interest === 0) {
      monthly = principle / numPayments
    }
    monthly = removeDecimals(monthly)
    return(monthly);
  
  }
  
  function removeDecimals(monthly) {
    monthly = monthly.toFixed(2);
    return(monthly);
  }
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const  userInput = getCurrentUIValues();
    const monthlyPayment = calculateMonthlyPayment(userInput);
    updateMonthly(monthlyPayment);
  }
  
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthlyPayment) {
    document.getElementById("monthly-payment").innerText = `${monthlyPayment}`;
  }  