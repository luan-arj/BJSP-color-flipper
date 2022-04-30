const colors = ['rgb(253, 90, 90)', 'rgb(253, 155, 90)', 'rgb(253, 229, 90)', 'rgb(117, 253, 90)', 'rgb(90, 180, 253)', 'rgb(180, 90, 253)', 'rgb(253, 90, 253)']
const colorsName = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colorsName[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}