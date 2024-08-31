function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
  const pattern = 'pet_' + 'Year' + 'petName'
    let result = 'Valid Syntax';


   if (validateSyntax(petInput = pattern)) {
    console.log(result);
   } else {
    console.log('Invalid Syntax!');
   }

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

    document.getElementById('result').innerText = result;    
}