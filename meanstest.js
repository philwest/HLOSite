//Get variables for size of household and annual income

var sizeOfHousehold = $('#familysize').val('selectedvalue');
var monthlyIncome = $('#monthlyincome').val();
var annualIncome = 12 * monthlyIncome


// object with one if-then statement to determine if over/under the threshold

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

allUseCases = [

    {
        household: 1,
        married: true,
        county: 'travis',
        median: 43934
    },

]

if annualIncome > requiresMeansTest[sizeOfHousehold] {
	<"You'll need to take the Means Test to determine if you're eligible for Chapter 7 bankruptcy. Proceed to the next step.">
}

// get filing status variable

var filingStatus = $('#filingstatus').val('selectedvalue');

// get county variable

var whichCounty = $('#county').val('selectedvalue');


// pass through filingStatus and whichCounty to get median income -- there are 15 possibilities; what's the best solution to get one value? 


??var myMedianIncome = getMedianIncome(filingStatus, whichCounty, sizeOfHousehold)

??var getMedianIncome = function(filingStatus, whichCounty, sizeOfHousehold) {

}