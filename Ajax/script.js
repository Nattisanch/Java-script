"use strict";

function makeRequest(){
      let request = new XMLHttpRequest();
    request.open("GET", "student_info.json");
    request.responseType = 'json';
    request.send();

    request.addEventListener('load', function(event){
       if (event.target.statusText !== 'OK'){
        console.error(event.target.statusText);
        console.error(event.target.status);
        return;
       }

       let dataLoaded = event.target.response;
       document.querySelector("#load_button").classList.add("hidden");
       document.querySelector("#firstname").textContent = `First Name: ${dataLoaded.firstName}`;
       document.querySelector("#lastname").textContent = `Last Name: ${dataLoaded.lastName}`;
       document.querySelector("#major").textContent = `Major: ${dataLoaded.major}`;
       document.querySelector("#courses").textContent = `Courses Needed to Graduate: ${dataLoaded.courses}`;
    });
    request.addEventListener('error', function(event){
        console.error(event);
    });

}

function main(){

    document.querySelector("#load_button").addEventListener('click', makeRequest);
}

main();