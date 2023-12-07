//Set game variables
let guesses
let answer
let previousGuesses

newGame();

//Start a new game
function newGame() {
    //Generate a random number
    answer = Math.floor(Math.random() * 10) + 1;

    //Let guesses
    guesses = 5;

    //Clear previous guesses
    previousGuesses = '';
    document.getElementById('previousGuesses').innerHTML = '';

    //Enable input
    document.getElementById('number').disabled = false;

    //Clear input value
    document.getElementById('number').value = '';

    //Clear input style
    document.getElementById('number').className = 'text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

    //Get focus on input
    document.getElementById('number').focus();

    //Clear result status
    document.getElementById('resultStatus').innerHTML = '';
}

//Control if user submit a number
document.getElementById('number').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        number = document.getElementById('number').value;
        document.getElementById('number').value = '';
        console.log(number);
        checkNumber(number);
    }
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'r') {
        newGame();
        console.log('New game!');
    }
});

//Control if the submitted number is correct
function checkNumber(number) {
    if(number == answer){
        document.getElementById('number').className = 'text-center bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500';
        document.getElementById('number').blur();
        document.getElementById('number').disabled = true;
        document.getElementById('number').value = number;
        document.getElementById('resultStatus').className = 'text-center mt-2 text-sm text-green-600 dark:text-green-500';
        document.getElementById('resultStatus').innerHTML = '<span class="font-medium">You win!</span> Press R to start a new game!<br>';
    }
    else {
        if(guesses > 1){
            guesses--;
            document.getElementById('number').className = 'text-center bg-red-50 border border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500';
            document.getElementById('previousGuesses').className = 'text-center mt-2 text-sm text-red-600 dark:text-red-500';
            document.getElementById('previousGuesses').innerHTML += 'Wrong! You have ' + guesses + ' guesses left.<br>' ;
        }
        else {
            document.getElementById('number').blur();
            document.getElementById('number').disabled = true;
            document.getElementById('number').value = number;
            document.getElementById('resultStatus').className = 'text-center mt-2 text-sm text-red-600 dark:text-red-500';
            document.getElementById('resultStatus').innerHTML = '<span class="font-medium">You lost!</span> Press R to start the game.<br>';
        }
        
    }

}
