var fs = require('fs'),
    readline = require('readline');

var sum = 0;

var rd = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    let numArray = [];
    for(let i = 0; i < line.length; i++) {
        if(line[i]=='o'&&line[i+1]=='n'&&line[i+2]=='e') {
            if(numArray.length==0) {
                numArray.push(1);
            } else {
                numArray[1] = 1;
            }
        } else if(line[i]=='t'&&line[i+1]=='w'&&line[i+2]=='o') {
            if(numArray.length==0) {
                numArray.push(2);
            } else {
                numArray[1] = 2;
            }
        } else if(line[i]=='t'&&line[i+1]=='h'&&line[i+2]=='r'&&line[i+3]=='e'&&line[i+4]=='e') {
            if(numArray.length==0) {
                numArray.push(3);
            } else {
                numArray[1] = 3;
            }
        } else if(line[i]=='f'&&line[i+1]=='o'&&line[i+2]=='u'&&line[i+3]=='r') {
            if(numArray.length==0) {
                numArray.push(4);
            } else {
                numArray[1] = 4;
            }
        } else if(line[i]=='f'&&line[i+1]=='i'&&line[i+2]=='v'&&line[i+3]=='e') {
            if(numArray.length==0) {
                numArray.push(5);
            } else {
                numArray[1] = 5;
            }
        } else if(line[i]=='s'&&line[i+1]=='i'&&line[i+2]=='x') {
            if(numArray.length==0) {
                numArray.push(6);
            } else {
                numArray[1] = 6;
            }
        } else if(line[i]=='s'&&line[i+1]=='e'&&line[i+2]=='v'&&line[i+3]=='e'&&line[i+4]=='n') {
            if(numArray.length==0) {
                numArray.push(7);
            } else {
                numArray[1] = 7;
            }
        } else if(line[i]=='e'&&line[i+1]=='i'&&line[i+2]=='g'&&line[i+3]=='h'&&line[i+4]=='t') {
            if(numArray.length==0) {
                numArray.push(8);
            } else {
                numArray[1] = 8;
            }
        } else if(line[i]=='n'&&line[i+1]=='i'&&line[i+2]=='n'&&line[i+3]=='e') {
            if(numArray.length==0) {
                numArray.push(9);
            } else {
                numArray[1] = 9;
            }
        }else if(line[i] >= '0' && line[i] <= '9') {
            if(numArray.length==0) {
                numArray.push(+line[i]);
            } else {
                numArray[1] = +line[i];
            }
        }
    }
    if(numArray.length == 1) {
        numArray[1] = numArray[0];
    }
    let num = numArray.join('');
    sum+=+num;
});

rd.on('close', function() {
    console.log('Final Sum is ' + sum);
});