document.getElementById('nameGroup').innerText = 'Ersin Gabbas, SE-2201';

const updateDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const date = now.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const time = now.toTimeString().split(' ')[0];

    document.getElementById('currentDateTime').innerHTML = `
        Year: ${year}<br>
        Today is: ${day}<br>
        Date: ${date}<br>
        Month: ${month}<br>
        Current time is: ${time}
    `;
};

updateDateTime();
setInterval(updateDateTime, 1000); // Update the time every second

const graduationDate = new Date('2025-06-29'); // Set your graduation date here
const daysUntilGraduation = Math.ceil((graduationDate - new Date()) / (1000 * 60 * 60 * 24));
document.getElementById('daysUntilGraduation').innerText = `${daysUntilGraduation} days left until the freedom!`;

const multiply = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').innerText = `The Result is: ${num1 * num2}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
};

const divide = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            document.getElementById('result').innerText = `The Result is: ${num1 / num2}`;
        } else {
            document.getElementById('result').innerText = 'Division by zero is not allowed';
        }
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
};
