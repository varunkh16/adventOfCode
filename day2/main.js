var fs = require('fs'),
    readline = require('readline');

var finalCount = 0;
var allGamesColorCount = 0;

const maxCubes = {
    "red": 12,
    "green": 13,
    "blue": 14
};

var rd = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    let maxRedCount = 0;
    let maxGreenCount = 0;
    let maxBlueCount = 0;
    let gameNumber = line.split(":");
    let game = gameNumber[1].trim().split(";")
    let gamePossibleFlag = true;
    for(let i=0;i<game.length;i++) {
        let chances = game[i].trim().split(",")
        for(let j=0;j<chances.length;j++) {
            let cube = chances[j].trim().split(" ");
            let count = +cube[0].trim();

            let ballColor = cube[1].trim();
            if(count>maxCubes[ballColor]) {
                gamePossibleFlag = false;
            }

            if(ballColor == "red") {
                maxRedCount = Math.max(maxRedCount, +cube[0].trim());
            }

            if(ballColor == "green") {
                maxGreenCount = Math.max(maxGreenCount, +cube[0].trim());
            }

            if(ballColor == "blue") {
                maxBlueCount = Math.max(maxBlueCount, +cube[0].trim());
            }
        }
    }
    if(gamePossibleFlag == true) {
        let number = +gameNumber[0].split(" ")[1].trim();
        finalCount+=number;
    }

    allGamesColorCount+=(maxRedCount*maxGreenCount*maxBlueCount);
});

rd.on('close', function() {
    //Game 1 Answer
    console.log('Final count is ' + finalCount);
    //Game 2 Answer
    console.log('Final Games color count is ' + allGamesColorCount);
});