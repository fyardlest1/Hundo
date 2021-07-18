// Get the value from the interface.
// Start or Controller function or Entry point.
const getValues = () => {
    
    // get value from page.
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // we need to validate the input before
    // parse the input value into integer value
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // we call generatenumbers
        let numbers = generateNumbers(startValue, endValue)
        // we call displayNumbers
        displayNumbers(numbers)

    } else {
        alert('Please enter valid integers')
    }

}

// Generate numbers from the start value to the end value.
// Our logic function(s)
const generateNumbers = (startNum, endNum) => {
    let numbers = [];

    // we want to get all numbers from start to end
    for (let i = startNum; i <= endNum; i++) {
        // this will execute in a loop until i = endNum
        numbers.push(i)
    }

    return numbers;
}

// Display the even numbers in bold.
// Display or view functions
const displayNumbers = (numbers) => {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = 'even'        
        let number = numbers[index];

        if (number % 2 === 0) {
			// you can also do this to bold the even numbers
            // Please refer to the source code for details concerning the following line of code
            // Prism did not show the tag in the template literal
			// templateRows += `<tr><td><strong>${number}</strong></td></tr>`
			className = 'even'
        } else {
            // Please refer to the source code for details concerning the following line of code
            // Prism did not show the tag in the template literal
            // templateRows += `<tr><td>${number}</td></tr>`
            className = 'odd'
        }

        // Please refer to the source code for details concerning the following line of code
        // Prism did not show the tag in the template literal
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById('results').innerHTML = templateRows;
}