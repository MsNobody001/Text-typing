const spanText = document.querySelector('.text');
const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi id quia officiis animi mollitia ex numquam reiciendis omnis corporis obcaecati. Accusantium, laboriosam! Magni repellendus, fugit mollitia temporibus illum odit labore!"

//parametry
let textIndex = 0;
const time = 40;

//dodanie litery 
function textTyping() {
    spanText.textContent += text[textIndex];
    textIndex++;
    if (textIndex === text.length) clearInterval(indexInterval);
}

const indexInterval = setInterval(textTyping, time);