// Task: Ceasar Cypher Project
// Author: Arnold Twala 

// function for user input message
function userMessage() {
    let message = prompt("Enter the message you want to change into a cypher:");
    return message;
}

// Define a constant "shift" and set its value to 15
let shift = 15;
// Define a function "encrypt" with a parameter "message":
function encrypt(message) {
    // Initialize an empty string called "encryptedMessage"
    let encryptedMessage = "";
    // Loop through each character "c" in the "message":
    for (let c of message) {
        // Check if "c" is an uppercase letter or a lowercase letter
        // Use the "toUpperCase" and "toLowerCase" methods to check and compare "c" to its uppercase and lowercase versions
        let isUpperCase = c.toUpperCase() === c && c.match(/[A-Z]/i);
        let isLowerCase = c.toLowerCase() === c && c.match(/[a-z]/i);

        // If "c" is an uppercase letter:
        if (isUpperCase) {
            // Convert "c" to its corresponding ASCII code
            let asciiCode = c.charCodeAt();
            // Add "shift" to the ASCII code
            asciiCode += shift;
            // If the result is greater than the ASCII code for 'Z', subtract 26 to keep it within the uppercase letter range
            if (asciiCode > 90) {
                asciiCode -= 26;
            }
            // Convert the updated ASCII code back to a character and append it to "encryptedMessage"
            encryptedMessage += String.fromCharCode(asciiCode);
        }

        // Else if "c" is a lowercase letter:
        else if (isLowerCase) {
            // Convert "c" to its corresponding ASCII code
            let asciiCode = c.charCodeAt();
            // Add "shift" to the ASCII code
            asciiCode += shift
            // If the result is greater than the ASCII code for 'z', subtract 26 to keep it within the lowercase letter range
            if (asciiCode > 122) {
                asciiCode -= 26;
            }
            // Convert the updated ASCII code back to a character and append it to "encryptedMessage"
            encryptedMessage += String.fromCharCode(asciiCode);
        }

        // Else(spaces, punctuation marks, etc.):
        else {
            // Append "c" directly to "encryptedMessage"
            encryptedMessage += c;
        }
    }

    // Return "encryptedMessage"
    return encryptedMessage;
}

// Call the "encrypt" function with a sample message and store the result in a variable "encryptedMessage"
let encryptedMessage = encrypt(userMessage());

// Print out the encoded message
console.log(encryptedMessage);
alert(encryptedMessage);

