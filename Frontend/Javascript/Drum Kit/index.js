//Detecting Button press


var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for(var i = 0;i<numberofdrumbuttons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
        buttonAnimation(buttomInnerHTML);
        
        
    })
}

//Detecting Keyboard press
document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})


function makeSound(key) {
    switch (key) {
            case "w":
                var ton1 = new Audio("Sounds/tom-1.mp3");
        ton1.play();

                break;

                case "a" :
                    var ton2 = new Audio("Sounds/tom-2.mp3");
        ton2.play();
        break;

        case "s" :
            var ton3 = new Audio("Sounds/tom-3.mp3");
        ton3.play();
        break;

        case "d" :
            var ton4 = new Audio("Sounds/tom-4.mp3");
        ton4.play();
        break;

        case "j" :
            var snare = new Audio("Sounds/snare.mp3");
        snare.play();
        break;

        case "k" :
            var crash = new Audio("Sounds/crash.mp3");
        crash.play();
        break;

        case "l" :
            var kick = new Audio("Sounds/kick-bass.mp3");
        kick.play();
        break;


        
            default:console.log(key);
                break;
        }

}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector( "."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}
