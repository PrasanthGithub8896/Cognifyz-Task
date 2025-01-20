// Task 2: Greeting based on current time
function showGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    alert(greeting);
}

window.onload = showGreeting;

// Task 1: Button that changes color
function changeColor() {
    const button = document.querySelector('.color-change-btn');
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33FF'];
    const currentColor = button.style.backgroundColor;
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor); // Avoid the same color
    button.style.backgroundColor = newColor;
}

// Task 3: Basic Calculator
function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calcResult').innerText = 'Please enter valid numbers!';
    } else {
        const sum = num1 + num2;
        document.getElementById('calcResult').innerText = 'Result: ' + sum;
    }
}
