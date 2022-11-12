let target = document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active")
}
setInterval(blink, 500);

let sentences = ["No drink !", "Seriously"];
let sentence = sentences[Math.floor(Math.random() * sentences.length)];

let strings = sentence.split("");

function pick_sentence(){
    let sentences = ["No drink !", "Seriously"];
    let sentence = sentences[Math.floor(Math.random() * sentences.length)];
    let strings = sentence.split("");
    return strings
}

function resetPrint(){
    target.textContent = "";
}

function print_str(someStr){
    if (someStr.length > 0){
        target.textContent += someStr.shift();
        setTimeout(
            function(){
                print_str(someStr);
            }, 80);
    }
    else{
        setTimeout(resetPrint, 3000);
    }
}

print_str(sentence)
//https://www.youtube.com/watch?v=e56H5n1SvEs

