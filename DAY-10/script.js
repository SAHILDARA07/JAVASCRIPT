
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    button1.style.backgroundColor = 'white';
    button2.style.backgroundColor = 'white';
    button3.style.backgroundColor = 'white';
    button4.style.backgroundColor = 'white';
    button5.style.backgroundColor = 'white';
    button6.style.backgroundColor = 'white';
    button7.style.backgroundColor = 'white';
    button8.style.backgroundColor = 'white';
    button9.style.backgroundColor = 'white';
});

generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button1.style.backgroundColor = randomcolor;
});
 generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button2.style.backgroundColor = randomcolor;
});
generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button3.style.backgroundColor = randomcolor;
});
 generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button4.style.backgroundColor = randomcolor;
});
generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button5.style.backgroundColor = randomcolor;
});
 generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button6.style.backgroundColor = randomcolor;
});
generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button7.style.backgroundColor = randomcolor;
});
 generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button8.style.backgroundColor = randomcolor;
});
    generateButton.addEventListener('click', () => {
    const randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button9.style.backgroundColor = randomcolor;
});
 
    

  
