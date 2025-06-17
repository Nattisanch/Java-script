//making the array of planets
let multPlanets = 
['Neptune',
'Venus',
'earth',
'Mars',
'saturn',
'Uranus',
'Mercury',
'Pluto'];

//output before I remove Pluto
console.log(multPlanets);
console.log(multPlanets.length);

multPlanets.pop();
//output after I removed Pluto
console.log(multPlanets.length);
console.log(multPlanets);

//Me swapping Neptune and Mercury
multPlanets.shift();
multPlanets.pop();

multPlanets.unshift('Mercury');
multPlanets.push('Neptune');
console.log(multPlanets.length)
console.log(multPlanets)

//fixing earth and saturn capitolization

multPlanets = 
['Mercury', 
    'Venus',
     'Earth',
      'Mars',
       'Saturn',
        'Uranus',
         'Neptune'];
console.log(multPlanets)

//Inserting Jupiter into the list after Mars.

multPlanets.splice(4, 0, 'Jupiter');
console.log(multPlanets)
console.log(multPlanets.length);

//Use the array to print out the name of last planet to the console without using a hard coded value for the index.
let i = multPlanets[7]
console.log(i)

//Use the array to print each planet to the console in order, one on each line
console.log(multPlanets[0])
console.log(multPlanets[1])
console.log(multPlanets[2])
console.log(multPlanets[3])
console.log(multPlanets[4])
console.log(multPlanets[5])
console.log(multPlanets[6])
console.log(multPlanets[7])
console.log(multPlanets.length)
//Use the array to print each planet to the console in reverse order, one on each line.
console.log(multPlanets[7])
console.log(multPlanets[6])
console.log(multPlanets[5])
console.log(multPlanets[4])
console.log(multPlanets[3])
console.log(multPlanets[2])
console.log(multPlanets[1])
console.log(multPlanets[0])