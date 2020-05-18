for(var i = 0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}//.button can be given too,but drum is more specific,so give that.

document.addEventListener("keydown", makeSound);


function makeSound(event)
{
	//this.style.color = "orange";wont work!!
	console.log(event);
    buttonAnimation(event.key);
	switch(event.key){
		//this.style.color = "orange";
		case "w" :
			var tom1  =  new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2  = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

	}

}

function handleClick(event)//even if event is renamed as abc it works..whever an event(click) is triggered addevent listener
//passes an event object as the first argumnet of teh function being called as response to the event.
{
	//alert("I got clickedd!");
	console.log(event);
	console.log(this.innerHTML);
	this.style.color = "cyan";
	var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
	switch(buttonInnerHTML) {
		//this.style.color = "orange";
		case "w" :
			var tom1  =  new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2  = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			console.log("You presses k");
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

			}


}
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(removeClass, 100);

     function removeClass()
    {
        activeButton.classList.remove("pressed");
    }

}
