let user = {};
user.bestfriendName = prompt("Please enter your bestfriend's name: ");
user.favoriteColor = prompt("Enter your favorite color: ");
user.teacherName = prompt("Enter your teacher's name:");

console.log(`You and ${user.bestfriendName} are trapped inside a haunted house filled with mysteries.`);

let choice = Number(prompt(`In the hall you both hear a knock on the door do you want to 1. open it or 2. keep walking foward? select a number`));
if (choice ===1){
    console.log(`You open the door and ${user.teacherName} is there holding a big guide rat.`);
   let opTwo = Number(prompt(`${user.teacherName} throws the rat at ${user.bestfriendName} and runs off do you 1.Chase after ${user.teacherName} or 2.help ${user.bestfriendName}? insert 1 or 2 to answer`));
    if (opTwo === 1){
        console.log(`You chase after ${user.teacherName} and you end up lost in a dark room.`);
    }else{
        console.log(`You help ${user.bestfriendName} and find a note on the rat that says to go left for a big surprise and right to find others.`);
        let opThree = Number(prompt(`${user.bestfriendName} wants to grab the surpise do you want to 1.follow after ${user.bestfriendName} or 2.go right to find others? insert 1 or 2 to answer`));
        if (opThree=== 1){
            console.log(`You decide to go with ${user.bestfriendName} and the Gift you recieve is a ${user.favoriteColor} bag with clues in it to escape and you end up leaving.`);
        }else{
            console.log(`you end up leaving ${user.bestfriendName} behind and went to find others but instead you only found ${user.teacherName} in the corner scared and you are stuck there forever.`);
        }
    }
}else {
console.log(`You both ignore the knock and keep walking in the dark hallway.`);
    opFour = Number(prompt(`After you and ${user.bestfriendName} reach the end you see a ${user.favoriteColor} button and a green bell do you 1.press the button or 2.ring the bell? insert 1 or 2 to answer`));
    if (opFour === 1){
        console.log("The floor ends up opening up and you fall into the basement.")
        opFive = Number(prompt(`you and ${user.bestfriendName} find two levers one is blue and another is pink do you 1.pull the blue one or 2. pull the pink one? insert 1 or 2 to answer`))
        if (opFive === 1){
            console.log("You pull the blue lever and a door opens for you to go home.")
        }else{
            console.log(`${user.bestfriendName} pulls the pink one and another door opens where both your parents are at telling you it's time to leave.`)
        }
    }else{
        console.log("You ring the green bell and a butler comes to show you the exit.")
    }
}

