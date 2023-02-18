const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNumber = 1; /**number on the image */
const length = images.length;

/** This code block below is for the bottom section using a loop  function to repeat 4 images
 * and the code executed in the loop creates an element div with DOM and the createElement method and stored in var called div
 * "button" is then created as a class and and appendChild method attaches the div to bottom class which was grabbed using DOM above then assigned to bottom
*/
for (i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
};
/*below using DOM querySelector method grabs all the button class and assigns it to buttons */
const buttons = document.querySelectorAll(".button") //I understand this to be a DOM manipulation and storing value in buttons const variable
buttons[0].style.backgroundColor = "white"; //JS styling the first button using index 0 and dotnotation to access the style in that order

/**This function called resetBg means to reset the color of the background on the button */
const resetBg = () => {
    buttons.forEach(button => {
        /**The forEach method acts on all the classes named button stored in buttons collectively using DOM querySelectorAll method,
         the argument is the button class and anonymous
        function to style the bg to transparent using a js */
        button.style.backgroundColor = "transparent";
    });
};
/** This below is the function name forEach done on buttons class that for each button is clicked
 * it changes to the image number on the button and button color ie
 * the button color will reset when another button is clicked
 */
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg(); //function to reset the button to transparent
        slider.style.transform = `translateX(-${i * 800}px)`;
        slideNumber = i + 1; //this line makes sure i dont click twice to the next image
        button.style.backgroundColor = "white"; //changes the color of the active button
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
}
const getfirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
const getlastSlide = () => {
    slider.style.transform = `translateX(${-(length - 1) * 800}px)`;
    slideNumber = length;
}

//refactoring by creating a function for resetBg()
const changeColor = () =>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor="white";
}

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getfirstSlide();
   changeColor()
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getlastSlide();
   changeColor()
});

