let scribllerSpan = document.querySelector(".scr");
let II = document.querySelector(".II");
let III = document.querySelector(".III");
let milk = document.querySelector(".milk");
let butter = document.querySelector(".butter");
let onion = document.querySelector(".onion");
let kiwi = document.querySelector(".kiwi");

setTimeout(() => {
    let text = "scribbler";
    let i = 0;
    let interval = setInterval(() => {
        scribllerSpan.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 70);
},2000);

setTimeout(() => {
    let text = "[Entry mode; press Ctrl+D to save and quit; press Ctrl+C to quit without saving]";
    let i = 0;
    let interval = setInterval(() => {
        II.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 40);
},4000);

setTimeout(() => {
    let text = "###todo for new year dinner party";
    let i = 0;
    let interval = setInterval(() => {
        III.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 50);
},7700);

setTimeout(() => {
    let text = "- Milk";
    let i = 0;
    let interval = setInterval(() => {
        milk.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 50);
},9700);

setTimeout(() => {
    let text = "- Butter";
    let i = 0;
    let interval = setInterval(() => {
        butter.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 50);
},10500);

setTimeout(() => {
    let text = "- Green Onion";
    let i = 0;
    let interval = setInterval(() => {
        onion.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 50);
},11200);

setTimeout(() => {
    let text = "- lots and lots of kiwis 🥝";
    let i = 0;
    let interval = setInterval(() => {
        kiwi.textContent+=text[i];
        i++;
        if(i === text.length){
            clearInterval(interval);
        }
    }, 50);
},12200);

let systems = document.querySelectorAll(".sys");
let command = document.querySelector(".command");
let commands = ['$ brew install scribbler','$ apt-get install scribbler','$ gem install scribbler']
systems.forEach((system , i) => {
    system.addEventListener("click", () => {
        command.textContent = commands[i];
        systems.forEach((s) => {
            if(s.classList.contains("active")){
            s.classList.remove("active");
            };
        });
        system.classList.add("active");
    });
});
