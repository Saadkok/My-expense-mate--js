let balance = 0;

function addTransaction(type) {
    const amount = parseFloat(prompt(`Enter amount to ${type}:`));

   // prompt(Enter amount to ${type}:): This displays a pop-up box with a message asking the user to enter an amount. The ${type} is a placeholder for the transaction type ("add" or "withdraw").

    // parseFloat(...): This function is used to convert the user's input, which is initially a string, into a floating-point number (a number with decimal places).

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (type === 'withdraw' && amount > balance) {
        alert('Insufficient funds. please do check your current balance.and try again');
        return;
    }

    if (type === 'withdraw') {
        balance -= amount;
    } else {
        balance += amount;
    }

    updateResult(`Transaction: ${type.charAt(0).toUpperCase() + type.slice(1)} ${amount.toFixed(2)}. Balance: ${balance.toFixed(2)}`);

    //type.charAt(0).toUpperCase(): This takes the first character of the type string and converts it to uppercase. For example, if type is "add", this part becomes "A"

    //type.slice(1): This takes the rest of the type string starting from the second character. For example,    if type is "add", this part becomes "dd".

    //${amount.toFixed(2)}: This converts the amount to a string with exactly two decimal places. For example, if amount is 10.567, this becomes "10.57".

    //${balance.toFixed(2)}: This converts the balance to a string with exactly two decimal places.
}

showBalances=() =>{
    updateResult(`Current Balance: ${balance.toFixed(2)}`);
}


updateResult=(message) =>{
    const resultContainer = document.querySelector('.result');
    resultContainer.textContent = message;
}

