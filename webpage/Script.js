const greetings = ["Enjoy Our Delicious Meals!", "Freshly Prepared Just for You!", "Indulge in Flavorful Dishes!"];
let currentGreetingIndex = 0;

function changeGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = greetings[currentGreetingIndex];
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}

setInterval(changeGreeting, 4000);

const prices = document.querySelectorAll('.price');
prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.fontSize = '25px';
    });
    price.addEventListener('mouseout', () => {
        price.style.fontSize = '20px';
    });
});

const buttons = document.querySelectorAll('.buy-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const mealImage = button.parentElement.querySelector('img');
        mealImage.src = 'images/done.jpg';
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = input.value.toUpperCase();
        input.style.color = 'gray'; 
    });
    
    const status = document.getElementById('form-status');
    status.innerText = "Form submitted successfully!";
});
