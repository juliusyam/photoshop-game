window.onload = init;

const canvas = document.getElementById("left-box");
const ctx = canvas.getContext("2d");

var newScore1 = score1;
var newScore2 = score2;
var newScore3 = score3;

var score1 = localStorage.getItem('score1-number') ? parseInt(localStorage.getItem('score1-number')) : 0;
var score2 = localStorage.getItem('score2-number') ? parseInt(localStorage.getItem('score2-number')) : 0;
var score3 = localStorage.getItem('score3-number') ? parseInt(localStorage.getItem('score3-number')) : 0;

var finalScore = score1 + score2 + score3;
console.log('total=' + finalScore);

function showScore() {
    document.getElementById("demo").innerHTML = finalScore;
}


function init(current = "") {
    if (current.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ApplyTransforms(current);
    }

    var img = document.getElementById("original-photo");
    if (img !== null) {
        unfade(img);
    }
    var img = document.getElementById("selected-photo");
    if (img !== null) {
        img.src = localStorage.getItem('selected-photo');
        unfade(img);
    }
    var img = document.getElementById("selected-photo2");
    if (img !== null) {
        img.src = localStorage.getItem('selected-photo2');
        unfade(img);
    }
    var img = document.getElementById("selected-photo3");
    if (img !== null) {
        img.src = localStorage.getItem('selected-photo3');
        unfade(img);
    }

    if (current.length) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        applyTransforms(current);
    }
} 

function applyTransforms(x){
    var img = "";
    if(x === "hue1" || x === "style1" || x === "filter1") {
        console.log("Photo 1 Displayed");
        img = document.getElementById("photo1");
        if(x === "hue1") {
            newScore1 = 10;
        }
        if(x === "style1") {
            newScore2 = 7;
        }
        if(x === "filter1") {
            newScore3 = 9;
        } 
    }
    if(x === "hue2" || x === "style2" || x === "filter2") {
        console.log("Photo 2 Displayed");
        img = document.getElementById("photo2");
        if(x === "hue2") {
            newScore1 = 8;
        }
        if(x === "style2") {
            newScore2 = 5;
        }
        if(x === "filter2") {
            newScore3 = 9;
        }
    }
    if(x === "hue3" || x === "style3" || x === "filter3") {
        console.log("Photo 3 Displayed");
        img = document.getElementById("photo3");
        if(x === "hue3") {
            newScore1 = 4;
        }
        if(x === "style3") {
            newScore2 = 6;
        }
        if(x === "filter3") {
            newScore3 = 10;
        }
    }
    if(x === "hue4" || x === "style4" || x === "filter4") {
        console.log("Photo 4 Displayed");
        img = document.getElementById("photo4");
        if(x === "hue4") {
            newScore1 = 4;
        }
        if(x === "style4") {
            newScore2 = 8;
        }
        if(x === "filter4") {
            newScore3 = 7;
        } 
    }
    unfade(img);
    console.log(newScore1);
    console.log(newScore2);
    console.log(newScore3); 
}

function saveImgPath(x, y) {
    const imgSrc = document.getElementById(y).src;
    console.log(x);
    console.log(x.includes("hue"));
    console.log(x.includes("style"));
    console.log(x.includes("filter"));
    if (x.includes("hue")) {
        localStorage.setItem('selected-photo-name', y);
        localStorage.setItem('selected-photo', imgSrc);
        localStorage.setItem('score1-number', newScore1); 
    }
    else if (x.includes("style")) {
        localStorage.setItem('selected-photo2-name', y);
        localStorage.setItem('selected-photo2', imgSrc);
        localStorage.setItem('score2-number', newScore2); 
    }
    else if (x.includes("filter")) {
        localStorage.setItem('selected-photo3-name', y);
        localStorage.setItem('selected-photo3', imgSrc);
        localStorage.setItem('score3-number', newScore3);
    }
    console.log(y);
    console.log(imgSrc); 
}

function transformAndSave(x, y) {
    applyTransforms(x);
    saveImgPath(x, y);
}

function unfade(img) {
    var op = 0.1; 
    ctx.drawImage(img, 20, 20, 550, 700);
    const timer = setInterval(function() {
        if(op >= 1) {
            clearInterval(timer);
        }
        img.style.opacity = op;
        img.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += 0.1;
    }, 1000); 
}

function downloadImage() {
    window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');
    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click() 
}



//Function to temporary store selection made on said oage
function saveLocalData() {
    var canvas = document.getElementById('left-box');
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
}