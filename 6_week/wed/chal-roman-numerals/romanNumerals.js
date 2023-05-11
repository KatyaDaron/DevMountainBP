// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal
// Roman
// 1
// I
// 5
// V
// 10
// X
// 50
// L
// 100
// C
// 500
// D
// 1,000
// M
// For example:

// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'

function toRoman(num) {
    // If number is less than 1 or greater than 1000.
    if (num < 1 || num > 1000) {
      return "Number must be between 1 and 1000";
    }
  
    // Array of objects with value and roman numerals
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];
  
    // Declare result variable to an empty string
    let result = "";
  
    // Loop over each element of the array
    for (const obj of romanNumerals) {
      
      // Loop while num greater than or equal to value of the array
      while (num >= obj.value) {
  
        // Add numeral to results variable
        result += obj.numeral;
  
        // num minus found numeral
        num -= obj.value;
      }
    }
  
    return result;
  }
  
  console.log(toRoman(5));
  console.log(toRoman(715));
  console.log(toRoman(267));