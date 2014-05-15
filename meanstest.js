//Get variables for size of household and annual income

var sizeOfHousehold = $('#familysize').val('selectedvalue');
var monthlyIncome = $('#monthlyincome').val();
var annualIncome = 12 * monthlyIncome


// write if else statements to show if under the threshold

// object with one if-then statement

var requiresMeansTest = {
    '1': 41354,
    '2': 56296,
    '3': 59567,
    '4': 68566,
    '5': 76666,
    '6': 84766,
    '7': 92866,
    '8': 100966,
    '9': 109066,

}

if annualIncome > requiresMeansTest[sizeOfHousehold] {
	return <"You'll need to take the Means Test to determine if you're eligible for Chapter 7 bankruptcy. Proceed to the next step.">
}

var travisMedianIncome = {

    
}

}