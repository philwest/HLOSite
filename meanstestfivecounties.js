//test
// var medianIncomeByCounty = {
//         'traviscounty': {
//         '1': 40389,
//         '2': 54762,
//         '3': 59276,
//         '4': 65932,
//         '5': 73432,
//         '6': 80932,
//         '7': 88432,
//         '8': 95932,
//         '9': 103432,
//         },
//         'williamsoncounty': {
//         '1': 3,
//         '2': 5,
//         '3': 59,
//         '4': 65932,
//         '5': 73432,
//         '6': 80932,
//         '7': 88432,
//         '8': 95932,
//         '9': 103432,
//         }
//     }




//check when submit info button is clicked
$("#submitInfo").on('click', function() {

    //Get variables for size of household and annual income

    var sizeOfHousehold = $('#familysize').val();
    var monthlyIncome = $('#monthlyincome').val();
    var annualIncome = 12 * monthlyIncome;
    // var countySelected = $('#county').val();

    console.log($('#county').val());
    //compare medianIncomeTravis to annual income

    // commented out for now, uncomment when all five counties done
    // var medianIncomeInCountySelected = medianIncomeByCounty[countySelected]


    
    
//keep for now, toss when five counties done
    var medianIncomeTravis = {
        '1': 40389,
        '2': 54762,
        '3': 59276,
        '4': 65932,
        '5': 73432,
        '6': 80932,
        '7': 88432,
        '8': 95932,
        '9': 103432,
    }

    //generate text explaining Means Test for over median income

    //replace mit with mibc when have all five in
    if (annualIncome > medianIncomeTravis[sizeOfHousehold]) {

        htmlString = '<span>Your annual income of </span>' + annualIncome +
            '<span> is greater than the Travis County median income for a family of </span>' + sizeOfHousehold +
            '<span>. While you are more likely to qualify for a Chapter 13 bankruptcy given your income level, your debts and expenses may be large enough to qualify you for a Chapter 7 filing. Please make an appointment with us so we can walk you through a more detailed means test and determine your options.</span>'
    } else {
        //or generate text explaining qualifying for Chapter 7
        htmlString = '<span>Your annual income of </span>' + annualIncome +
            '<span> is at or below than the Travis County median income for a family of </span>' + sizeOfHousehold + '<span>. You are likely qualified for a Chapter 7 filing based on your income level. Please make an appointment with us so we can walk you through a more detailed means test and confirm your eligibility.</span>'
    }

    $("#meansTestTravisAnswer").html(htmlString);

});