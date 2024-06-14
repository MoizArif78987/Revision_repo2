/* Menu show */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Highlight //

const materialCards = document.getElementsByClassName('material__card');

for (let i = 0; i < materialCards.length; i++) {
    materialCards[i].addEventListener('mouseover', () => {
        materialCards[i].classList.add('highlight');
        const button = document.createElement('button');
        button.className = 'highlight-button';
        button.textContent = '+';
        materialCards[i].appendChild(button);
    });

    materialCards[i].addEventListener('mouseout', () => {
        materialCards[i].classList.remove('highlight');
        const button = materialCards[i].querySelector('.highlight-button');
        if (button) {
            materialCards[i].removeChild(button);
        }
    });
}
