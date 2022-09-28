
//pseudo code below
//Create a function that on click adds a class to the navigation menu, this class should include display content/display none to make it apppear and disappear
//

//on click of the menu icon, add class of hidden on current nav ie. display none, simultaneously, addClass of slideoutNav2 to the slideout nav.


//setting my varibles to be able to target the menu icon and the exit icon
const menuButton = document.querySelector('.menuIcon')
const closeNav = document.querySelector('.exit');
const slideMenu = document.querySelector('.slideOutNav')

//attaching an event listener to my menu so that on click it adds the class of .open
menuButton.addEventListener ("click", function(){
    slideMenu.classList.add('open');
});

//attaching an event listener to my exit icon such that when clicked it removes the class of .open
closeNav.addEventListener ("click", function(){
    slideMenu.classList.remove('open');
});


