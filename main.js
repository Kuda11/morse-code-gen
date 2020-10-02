// for spaces and obscure inputs like commas write an if else state that will give it a 
morseGen = (input) => {
    const textArry = inputToArray(input);
    const morseCode = morseCodeDataBase(textArry)
    const h3 = document.createElement('h3');
    
    const response = document.createTextNode(morseCode);
    h3.setAttribute('id', 'response');
    h3.appendChild(response);
    document.getElementById('morseOutput').appendChild(h3);
}


inputToArray = (input) => {
    input = document.getElementById("userInput").value;
    const inputUppercase = input.toUpperCase()
    const inputArray = inputUppercase.split('');
    return inputArray
}

morseCodeDataBase = (arrInput) => {
    const dictionary = {
        " ":"/", A:".-", B:"-...", C:"-.-.", D:"-..", E:".", F:"..-.", G:"--.", H:"....", I:"..", J:".---", K:"-.-", L:".-..", M:"--", N:"-.", O:"---" ,P:".--." ,Q:"--.-", R:".-.", S:"...", T:"-", U:"..-", V:"...-", W:".--", X:"-..-", Y:"-.--", Z:"--..", 1:".----", 2:"..---", 3:"...--", 4:"....-", 5:".....", 6:"-....", 7:"--...", 8:"---..", 9:"----.", 0:"-----"}
    let morseWords = ""
    arrInput.forEach(letter => {
        return morseWords += dictionary[letter]
    });
    console.log("I am here: " + morseWords)
    return morseWords
}

