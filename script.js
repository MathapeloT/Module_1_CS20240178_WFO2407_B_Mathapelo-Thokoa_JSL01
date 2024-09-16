function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = "";
    const regexp = /^pet_\d{4}[^\d_]+$/;
    const resultElement = document.getElementById("result");

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    result = regexp.test(input) ? "Valid Syntax🐱" : "Invalid Syntax!🙄";
    document.getElementById('result').innerText = result;    
}