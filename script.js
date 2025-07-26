function makeid(l) {
    let result = '';
    // Define all possible alphanumeric characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    // Loop 'l' times to build the string
    for (let i = 0; i < l; i++) {
        // Get a random index within the characters string
        const randomIndex = Math.floor(Math.random() * charactersLength);
        // Append the character at the random index to the result
        result += characters[randomIndex];
    }
    return result;
}


// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
