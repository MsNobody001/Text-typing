const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor')
const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi id quia officiis animi mollitia ex numquam reiciendis omnis corporis obcaecati. Accusantium, laboriosam! Magni repellendus, fugit mollitia temporibus illum odit labore!"

//parametry
let textIndex = 0;
const time = 100;

//animacja kursora
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

//dodanie litery 
function textTyping() {
    spanText.textContent += text[textIndex];
    textIndex++;
    if (textIndex === text.length) clearInterval(indexInterval);
}

setInterval(cursorAnimation, 400);
const indexInterval = setInterval(textTyping, time);