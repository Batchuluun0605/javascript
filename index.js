let container = document.createElement('div');
let body = document.querySelector('body');
let hero = document.createElement('div');
let button1 = document.createElement('button')
let box = document.createElement('div')
container.className = 'container'
hero.className = 'hero'
button1.className = 'button1'
box.className = 'box'
body.appendChild(container); 
container.appendChild(button1);
button1.innerText = "нэмэх";
container.appendChild(hero);
hero.appendChild(box);
box.innerText = "1";
button1.addEventListener("click", function click() {
    addwith(box)
})

for (let i = 0; i < 100; i++) {
    if (box[i] = 0) {
        
    }
    
}
