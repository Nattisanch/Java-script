'use strict';

// Leave line 4 alone.
document.addEventListener("DOMContentLoaded", function() {
    // Your code goes here!
    //messing with the list
    const ulOne = document.querySelector("#M0-MDA0MTQzODU-");
    const liOne = document.querySelectorAll('li');
    const newLi = document.createElement('li');

    newLi.textContent = 'Apples';

    ulOne.insertBefore(newLi, ulOne.firstChild);
    liOne[2].classList.remove("animal");
    ulOne.removeChild(liOne[1]);

    //now with the photos
   const img = document.querySelectorAll("#M1--MDA0MTQzODU img");
   img[3].src = '\\images\\p-earth.jpg';
   img[2].classList.add('poster');
   img[4].height = 300;

   //the rainbow part
   //this one gave me a headache :(
   const rainbowb = document.querySelector("#M2-U-MDA0MTQzOD");
   const rainbdiv = rainbowb.querySelectorAll('div');

   const red = rainbdiv[1];
   red.className = 'box red';
   red.textContent = 'R'
   //orange box
   const orangeb = document.createElement('div');
   orangeb.textContent = 'O';
   orangeb.className = 'box orange';
   //I didn't know how to make it look better without adding this
   orangeb.style.margin = '10px';

   rainbowb.appendChild(orangeb);
   rainbowb.insertBefore(rainbdiv[1],rainbdiv[0]);
   rainbowb.insertBefore(orangeb,rainbdiv[0]);
   
   //the text
   const par = document.querySelectorAll('#M3-DU-MDA0MTQzO p');
   par[0].id = 'f1';
   par[1].className ='second';
   par[1].id = 'f2';

   //last images
   const secImg = document.querySelectorAll("#M4-ODU-MDA0MTQz img");
   secImg[2].src = 'images/saturn.jpg';
   secImg[2].title = "Fact: Saturn spins fast. A day on Saturn is 10 hours and 14 minutes."
   secImg[0].height = 200;
   secImg[0].width = 200;
   
// Don't delete or change anything after this line.
});
