// De functionaliteit van de knop die het menu toont / niet toont:
// ---------------------------------------------------------------
// toggleButton = de KNOP
// toggleMenu = het MENU
// toggleVisibility = de functie zichtbaar/onzichtbaar


const toggleButton = document.getElementById('toggle');
const toggleMenu = document.getElementById('menu');

// controles: heb ik de goede te pakken?
// console.log('toggleButton: ', toggleButton); // Klopt
// console.log('toggleMenu: ', toggleMenu); // Klopt: <div id="menu" class=open">..<div>
// console.log('toggleMenu.className: ', toggleMenu.className); // Klopt: open

// nu de functie declareren die de knop laat togglen: class van 'open' naar 'closed' en viceversa
const toggleVisibility = function(){
    if(toggleMenu.className == 'open') {        
        // close menu
        toggleMenu.className = 'closed';
    } else {
        // open menu
        toggleMenu.className = 'open';
    }
}
// dan de eventlistner toevoegen
// toggleButton.addEventListener('click', toggleVisibility)

// BONUS: gebruik mouseover: verschijnen, en mouseout: verdwijnen
const toggleVisibilityOn = function(){
    toggleMenu.className = 'open';
};
const toggleVisibilityOff = function(){
    setTimeout(function() { 
        toggleMenu.className = 'closed';
    }, 10);
};
toggleButton.addEventListener('mouseover', toggleVisibilityOn); // wanneer de muis over de knop is.
toggleButton.addEventListener('mouseout', toggleVisibilityOff);

toggleMenu.addEventListener('mouseover', toggleVisibilityOn); // wanneer de muis over het MENU is: menu open laten!
toggleMenu.addEventListener('mouseout', toggleVisibility); 



// De functionaliteit van het wisselen van de kleur van de body:
// -------------------------------------------------------------
// var maken voor de body sectie
const bodyBg = document.querySelector('body');
// controles:
// console.log(bodyBg); // klopt: <body class="white">..</body>
// console.log(bodyBg.className); // klopt: white

// Array met de kleuren maken
const colors = ['home', 'red', 'green', 'blue', 'yellow', 'orange', 'grey'];
// console.log(colors); // klopt: ['red', 'green', 'blue', 'yellow', 'orange', 'grey']
// console.log(colors.length); // 6
// console.log(colors[0]); // red... etc

// Knoppen voor de LI elementen
const knopHome = document.getElementById('home');
const knopRed = document.getElementById('red');
const knopGreen = document.getElementById('green');
const knopBlue = document.getElementById('blue');
const knopYellow = document.getElementById('yellow');
const knopOrange = document.getElementById('orange');
const knopGrey = document.getElementById('grey');
// controles
// console.log(knopRed); // klopt: <li id="red" class="red">..</li>
// console.log(knopRed.inputMode); // klopt: red
const kleurText = document.getElementById('kleur');

let radioDot = document.getElementsByTagName('input');
// controle:
// console.log(mk[0].checked); // false
//console.log(colors.length);

let resetRadios = function(){
    for(i=0; i<colors.length; i++) {
        radioDot[i].checked = false;
        //console.log(radioDot[i].checked);
    }
}


// functies declareren die de <body> dezelfde kleur geeft als de knop
const toggleHome = function(){
    resetRadios();
    bodyBg.className = 'home';
    kleurText.innerHTML = 'Startpagina';
    radioDot[0].checked = true;
    toggleVisibility();
};
const toggleRed = function(){
    resetRadios();
    bodyBg.className = 'red';
    kleurText.innerHTML = 'RODE';
    radioDot[1].checked = true;
    toggleVisibility();
};
const toggleGreen = function(){
    resetRadios();
    bodyBg.className = 'green'
    kleurText.innerHTML = 'GROENE';
    radioDot[2].checked = true;
    toggleVisibility();
};
const toggleBlue = function(){
    resetRadios();
    bodyBg.className = 'blue'
    kleurText.innerHTML = 'BLAUWE';
    radioDot[3].checked = true;
    toggleVisibility();
};
const toggleYellow = function(){
    resetRadios();
    bodyBg.className = 'yellow'
    kleurText.innerHTML = 'GELE';
    radioDot[4].checked = true;
    toggleVisibility();
};
const toggleOrange = function(){
    resetRadios();
    bodyBg.className = 'orange'
    kleurText.innerHTML = 'ORANJE';
    radioDot[5].checked = true;
    toggleVisibility();
};
const toggleGrey = function(){
    resetRadios();
    bodyBg.className = 'grey'
    kleurText.innerHTML = 'GRIJZE';
    radioDot[6].checked = true;
    toggleVisibility();
};


// functie die de text op de pagina veranderd aghankelijk van de kleur
// const kleurText = document.getElementById('kleur');
 // console.log(kleurText); // klopt

// const textRed = function(){
//   console.log(kleurText.innerHTML); // klopt
//    kleurText.innerHTML = 'RODE';
//};

// de listners voor de knoppen:
knopHome.addEventListener('click', toggleHome);
knopRed.addEventListener('click', toggleRed);
knopGreen.addEventListener('click', toggleGreen);
knopBlue.addEventListener('click', toggleBlue);
knopYellow.addEventListener('click', toggleYellow);
knopOrange.addEventListener('click', toggleOrange);
knopGrey.addEventListener('click', toggleGrey);

// Gebruik maken van toetsenbord aanslagen: 1 t/m 6

document.onkeyup = function(x) {
    if (x.which == 49) {
        toggleHome();
    } else if (x.which == 50) {
        toggleRed();
    } else if (x.which == 51) {
        toggleGreen();
    } else if (x.which == 52) {
        toggleBlue();
    } else if (x.which == 53) {
        toggleYellow();
    } else if (x.which == 54) {
        toggleOrange();
    } else if (x.which == 55) {
        toggleGrey();
    }
}

// TODO:
// DRY: functies universeel maken: met varibele voor de kleur (for loop)?
// Kun je variabelen 'dynamisch' aanmaken met waarden uit een array?