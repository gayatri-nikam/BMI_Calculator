const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault()

    //Takes the height and weight
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height"
    } if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //show the result

        if (bmi < 18.6) {
            results.innerHTML = `BMI is ${bmi} , You are Under weight`
        }
        if (bmi > 18.6 && bmi < 24.9) {

            results.innerHTML = `BMI is ${bmi} , You are Normal weight`

        }
        if (bmi > 24.9) {

            results.innerHTML = `BMI is ${bmi} , You are Over weight`
        }
    }
})