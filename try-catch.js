

function checkAge() {
    const ageInput = document.getElementById('age-input');
    const ageInputText = ageInput.value;



    console.log(ageInputText);
    try {
        console.log(nothing); //this variable make error
        throw nothing;
    } catch (err) {
        console.log('ERR:: ', err);
    } finally {
        console.log('This code will run of-course')
    }


    console.log('I am a simple text');
}











