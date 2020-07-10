let sportsOne: string[] = ["golf", "Cricket", "Tenis", "Swimming"];

for (let tempSport of sportsOne){
    
    if (tempSport == "Cricket"){
        console.log(tempSport + "<< my favorite!");
    }
    else {
        console.log(tempSport);
    }
}