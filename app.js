
//pseudo code below
//Create a function that on click adds a class to the navigation menu, this class should include display content/display none to make it apppear and disappear
//

//on click of the menu icon, add class of hidden on current nav ie. display none, simultaneously, addClass of slideoutNav2 to the slideout nav.



const menuButton = document.querySelector('.menuIcon')
const closeNav = document.querySelector('.exit');
const slideMenu = document.querySelector('.slideOutNav')

menuButton.addEventListener ("click", function(){
  
    slideMenu.className = 'slideOutNav2';
});


closeNav.addEventListener ("click", function(){
    slideMenu.className = 'slideOutNav';
});


//creating functions to open and close the nav
// const openSlideMenu = (event) => {
//     const show = event.target
//     show.className = 'slideOutNav2';
// }

// const closeSlideMenu = () => {
// }


//('click', function () {
//     // slideMunu 
//     console.log('you clicked the button')
// });

//setting the event lsiteners 
// closeNav.addEventListener("click", closeSlideMenu, { once: true })

// slideMenu.addEventListener("click", openSlideMenu)

