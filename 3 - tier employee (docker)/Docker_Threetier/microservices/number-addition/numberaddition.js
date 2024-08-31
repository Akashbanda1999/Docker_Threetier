document.addEventListener('DOMContentLoaded', function() {
    let firstNumberElement = Math.ceil(Math.random() * 100);
    let secondNumberElement = Math.ceil(Math.random() * 100);

    document.getElementById('firstNumber').innerText = firstNumberElement;
    document.getElementById('secondNumber').innerText = secondNumberElement;

    document.getElementById('checkButton').addEventListener('click', function() {
        let userInput = parseInt(document.getElementById('userInput').value, 10);
        if (isNaN(userInput)) {
            document.getElementById('textResult').innerText = 'Please enter a number!';
            document.getElementById('textResult').style.backgroundColor = '#f5f7fa'; // Default background
            return;
        }
        
        console.log('User Input:', userInput);
        console.log('Sum:', firstNumberElement + secondNumberElement);
        
        if (userInput === (firstNumberElement + secondNumberElement)) {
            document.getElementById('textResult').innerText = 'Congratulations you got it right';
            document.getElementById('textResult').style.backgroundColor = '#028a0f';
        } else {
            document.getElementById('textResult').innerText = 'Please Try Again !';
            document.getElementById('textResult').style.backgroundColor = '#1e217c';
        }
    });

    document.getElementById('restartButton').addEventListener('click', function() {
        firstNumberElement = Math.ceil(Math.random() * 100);
        secondNumberElement = Math.ceil(Math.random() * 100);
        document.getElementById('firstNumber').innerText = firstNumberElement;
        document.getElementById('secondNumber').innerText = secondNumberElement;
        document.getElementById('userInput').value = '';
        document.getElementById('textResult').innerText = '';
    });
});
