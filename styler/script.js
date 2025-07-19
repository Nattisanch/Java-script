'use strict';
function handleFormSubmit(event){
    event.preventDefault();

    let fontsSize = document.querySelector("#fonts_size").value;
    let fontColor = document.querySelector("#font-color").value;
    let backgroundColor = document.querySelector("#background_color").value;
    let webTheme = document.querySelector('input[name="webTheme"]:checked').value;
    //this changes the font size i added it in `` so It can have the number and then px after it how css would
    document.body.style.fontSize = (`${fontsSize}px`);
    document.body.style.color = fontColor;

    //made a dark mode light mode and custom background color 
    if(webTheme === "dark_mode"){
        document.body.style.backgroundColor="#282828ff";
        document.body.style.color = fontColor;
    }else if (webTheme === "light_mode"){
        document.body.style.backgroundColor= "#ffffffff";
        document.body.style.color = fontColor;
    }else if (webTheme === "custom_mode"){
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = fontColor;
    }
        //to show the values of each one
    let newPar = document.createElement('p');
    let newParText = document.createTextNode(`
        Font Color: ${fontColor}
        Font Size: ${fontsSize}
        Background Color: ${backgroundColor}
        Theme: ${webTheme}`);
    let results = document.querySelector("#results");
    //this is a while loop I learned in class to make sure everytime the text updates it doesn't create a new p element
    while(results.children.length>0){
        results.removeChild(results.firstElementChild);
    }

    newPar.appendChild(newParText);
    results.appendChild(newPar);
}


function main(){
    let formElement = document.querySelector('#my-form');
    formElement.addEventListener('submit', handleFormSubmit);
}
main()