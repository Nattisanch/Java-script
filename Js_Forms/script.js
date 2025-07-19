'use strict';
//After the button is submitted it will do task 1 and two
/**
 When the first form is submitted. Take the data to form a sentence. "My name is [first_name] [last_name] and I am [age] years old." 
 The data in brackets should be replaced with the data from the form. 
 Display this somewhere on the page.
 **/
function handleSubmitFormOne(event){
    event.preventDefault();
    let firstName = document.querySelector("#first-name").value;
    let age = document.querySelector("#age").value;
    let lastName = document.querySelector("#last-name").value;
    let newPar = document.createElement('p');
    let newParText = document.createTextNode(`My name is ${firstName} ${lastName} and I'm ${age} years old.`)
    newPar.appendChild(newParText);
    //it prints in console but you need to make a p element and put it there.
    document.querySelector('#form_one_results').appendChild(newPar);
    
}

function handleSubmitFormTwo(event){
    event.preventDefault();
    let luckyNum = Number(document.querySelector("#luckynum").value);
    let randomNum = Number(document.querySelector("#randomnum").value);
    let sum = luckyNum + randomNum;
    document.querySelector('#form_two_results').textContent = sum;
    // console.log(luckyNum + randomNum)
}

//main function
function main(){
    let formElementOne = document.querySelector('#form_one');
    let formElementTwo = document.querySelector('#form_two');

    //Made an if statement so if we submit form one itll run the tasks for form one
    //if it submits form two itll run the tasks for form two
    if (formElementOne){
        formElementOne.addEventListener("submit",handleSubmitFormOne);
    }
    if (formElementTwo){
        formElementTwo.addEventListener("submit",handleSubmitFormTwo);

}
}

main();