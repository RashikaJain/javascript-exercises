const caesar = function (text, shift) {
    // Normalize shift to handle large or negative values
    shift = shift % 26;
    if (shift < 0) {
        shift += 26; // Convert negative shift to positive equivalent
    }

    let result = "";

    for (let char of text) {
        // Check if character is uppercasess
        if (char >= "A" && char <= "Z") {
            let newCharCode = char.charCodeAt(0) + shift;
            if (newCharCode > 90) {
                newCharCode = 65 + (newCharCode - 91);
            }
            result += String.fromCharCode(newCharCode);
        }
        // Check if character is lowercase
        else if (char >= "a" && char <= "z") {
            let newCharCode = char.charCodeAt(0) + shift;
            if (newCharCode > 122) {
                newCharCode = 97 + (newCharCode - 123);
            }
            result += String.fromCharCode(newCharCode);
        }
        // Non-alphabetic characters are added as-is
        else {
            result += char;
        }
    }

    return result;
};

// Export the function for use in other files
module.exports = caesar;
