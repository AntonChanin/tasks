const workSpace = document.querySelector('canvas');
const matrixs = document.querySelector('.matrixs');
const colors = document.querySelector('.colors');
const sizeInput = document.querySelector('#size');
const bucket = document.querySelector('#paint-bucket');
const chooseTool = document.querySelector('#choose-color');
const currentColorTool = document.querySelector('.current-color');
const prevColorTool = document.querySelector('.prev-color');
const small = matrixs.querySelector('#small');
const medium = matrixs.querySelector('#medium');
const big = matrixs.querySelector('#big');
const redChoose = colors.querySelector('#red');
const blueChoose = colors.querySelector('#blue');
const ref4x = 'https://raw.githubusercontent.com/AntonChanin/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
const ref32X = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';

var currentColor = 'green';
var prevColor = undefined;
var currentTool = undefined;
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var md = false;
var chooseToolUse = false;
workSpace.addEventListener('mousedown', down);
workSpace.addEventListener('mouseup', toggledraw);
currentColorTool.style.background = currentColor;

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

let idt = localStorage.getItem('imgData') || null;
if (idt !== null) {
    let img = new Image;
    img.src = idt;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
}



small.addEventListener('click', function () {
    getJSON(ref4x,
    function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            let size = 1;
            if (sizeInput.value == '') {
                size = 1;
            } else {
                size = sizeInput.value 
            }
        let width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10 * size; // Scales the whole image by this amount, set to 1 for default size
            // Make sure the canvas is no larger than the size we need
            workSpace.width = width * scale;
            workSpace.height = height * scale;
            // Loop through each color and draw that section
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                    ctx.fillStyle = '#' + data[row][col]; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                }
            };
            localStorage.setItem('imgData', canvas.toDataURL());
        }
    });
});

medium.addEventListener('click', function () {
    getJSON(ref32X,
    function (err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            let size = 1;
            if (sizeInput.value == '') {
                size = 1;
            } else {
                size = sizeInput.value
            }
            width = data[0].length, // Get the width of the array
            height = data.length, // Get the height of the array
            scale = 10 * size; // Scales the whole image by this amount, set to 1 for default size
            // Make sure the canvas is no larger than the size we need
            workSpace.width = width * scale;
            workSpace.height = height * scale;

            // Loop through each color and draw that section
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                    ctx.fillStyle = 'rgba(' + data[row][col] + ')'; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                }
            };
            localStorage.setItem('imgData', canvas.toDataURL());
        }
    });
    workSpace.classList.remove('big');
    
});

big.addEventListener('click', function () {
    let size = 1;
    if (sizeInput.value == '') {
        size = 1;
    } else {
        size = sizeInput.value
    }
    let width = 256, // Get the width of the array
        height = 256, // Get the height of the array
        scale = 1 * size; // Scales the whole image by this amount, set to 1 for default size
    // Make sure the canvas is no larger than the size we need
    workSpace.width = width * scale;
    workSpace.height = height * scale;
    drawing = new Image();
    drawing.src = "./data/image.png"; // can also be a remote URL e.g. http://
    drawing.onload = function () {
        ctx.drawImage(drawing, 0, 0);
    };
    localStorage.setItem('imgData', canvas.toDataURL());
});

function down() {
    md = true;
}

function toggledraw() {
    md = false;
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function draw(canvas, posx, posy) {
    if (md) {
        ctx.fillRect(posx, posy, 4, 4);
    }
}

function chooseColor(context) {
    if (context == redChoose) {
        prevColor = currentColor;
        currentColor = 'red';
        currentColorTool.style.background = currentColor;
        prevColorTool.style.background = prevColor;
    } else if (context == blueChoose) {
        prevColor = currentColor;
        currentColor = 'blue';
        currentColorTool.style.background = currentColor;
        prevColorTool.style.background = prevColor;
    } else if (context == currentColor) {
        prevColor = currentColor;
        currentColorTool.style.background = currentColor;
        prevColorTool.style.background = prevColor;
    } else {
        currentColor = prevColor;
        prevColor = currentColor;
        currentColorTool.style.background = currentColor;
        prevColorTool.style.background = prevColor;
    }
    ctx.fillStyle = currentColor;
}

document.querySelector('#current-color').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#current-color');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#prev-color').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#prev-color');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#red').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#red');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#blue').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#blue');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#choose-color').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#choose-color');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#transform').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#transform');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#pencil').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#move');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#small').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#small');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#medium').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#medium');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};
document.querySelector('#big').onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#big');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};

canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
        if (chooseToolUse) {
            let index = (Math.floor(event.offsetY) * canvas.width + Math.floor(event.offsetX)) * 4;
            let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let r = imgData.data[index];
            let g = imgData.data[index + 1];
            let b = imgData.data[index + 2];
            let a = imgData.data[index + 3];
            chooseToolUse = false;
            prevColor = currentColor;
            currentColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            currentColorTool.style.background = currentColor;
            prevColorTool.style.background = prevColor;

        } else {
            currentTool = document.querySelector('#pencil');
            localStorage.setItem('imgData', canvas.toDataURL());
            let x = event.offsetX;
            let y = event.offsetY;
            ctx.fillRect(x - 5, y - 5, 10, 10);
            ctx.fillStyle = currentColor;
            ctx.fill();
        }
    };
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    };
};
function fillBucket() {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = bucket;
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    let scale = 10 * sizeInput.value;
    for (let row = 0; row < canvas.height; row++) {
        for (let col = 0; col < canvas.width; col++) { // Since there are nested arrays we need two for loops
            ctx.fillStyle = currentColor; // Set the color to the one specified
            ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
        }
    };
};
bucket.onmousedown = function () {
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = bucket;
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    let scale = 10 * sizeInput.value;
    for (let row = 0; row < canvas.height; row++) {
        for (let col = 0; col < canvas.width; col++) { // Since there are nested arrays we need two for loops
            ctx.fillStyle = currentColor; // Set the color to the one specified
            ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
        }
    };
};

chooseTool.onmousedown = function () {
    chooseToolUse = true;
    if (currentTool != undefined) { currentTool.style.background = '#ffffff'; };
    currentTool = document.querySelector('#choose-color');
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)';
    currentColorTool.style.background = currentColor;
};

window.onkeyup = function (event) {
    switch (event.key) {
        case 'B': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = bucket; currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; fillBucket(); chooseToolUse = false; break;
        case 'P': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = document.querySelector('#pencil'); currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; chooseToolUse = false;  break;
        case 'C': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = document.querySelector('#choose-color'); currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; chooseToolUse = true; break;
        case 'b': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = bucket; currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; fillBucket(); chooseToolUse = false; break;
        case 'p': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = document.querySelector('#pencil'); currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; chooseToolUse = false; break;
        case 'c': if (currentTool != undefined) { currentTool.style.background = '#ffffff'; }; currentTool = document.querySelector('#choose-color'); currentTool.style.background = 'rgba(180, 149, 255, 0.5)'; chooseToolUse = true; break;
    }
};