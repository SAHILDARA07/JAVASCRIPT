const heading1 = document.getElementById("heading1");
const button1 = document.getElementById("btn1")



btn1.addEventListener("click", () => {
    heading1.textContent++;
})

btn2.addEventListener("click", () => {
    heading1.textContent--;
})

btn3.addEventListener("click", () => {
    heading1.textContent = 0;
    document.body.style.backgroundColor = 'white';
})

btn4.addEventListener("click", () => {
    heading1.textContent *= 2;
})

btn5.addEventListener("click", () => {
    heading1.textContent /= 2;
})
btn6.addEventListener("click", () => {
    document.body.style.backgroundColor = '	#ADD8E6';

})