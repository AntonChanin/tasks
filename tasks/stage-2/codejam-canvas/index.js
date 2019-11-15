const workSpace = document.querySelector('canvas');
const ctx =  workSpace.getContext("2d");
const matrixs = document.querySelector('.matrixs');
const colors = document.querySelector('.colors');
const sizeInput = document.querySelector('input');
const small = matrixs.querySelector('#small');
const medium = matrixs.querySelector('#medium');
const big = matrixs.querySelector('#big');
const redChoose = colors.querySelector('#red');
const blueChoose = colors.querySelector('#blue');
const ref4X = 'https://raw.githubusercontent.com/AntonChanin/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
const ref32X = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';

var currentcolor = undefined;
var md = false;
workSpace.addEventListener('mousedown', down);
workSpace.addEventListener('mouseup', toggledraw);

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

small.addEventListener('click', function () {
    getJSON(ref4X,
    function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let size = 1;
            if (sizeInput.value == '') {
                size = 1;
            } else {
                size = sizeInput.value;
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
                    ctx.fillStyle ='#' + data[row][col]; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                }
            };
        }
    });

})

medium.addEventListener('click', function () {
    getJSON(ref32X,
    function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let size = 1;
            if (sizeInput.value == '') {
                size = 1;
            } else {
                size = sizeInput.value;
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
                    ctx.fillStyle = 'rgba(' + data[row][col] + ')'; // Set the color to the one specified
                    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle 
                }
            };
        }
    });
    workSpace.classList.remove('big');
})

big.addEventListener('click', function () {
    let size = 1;
    if (sizeInput.value == '') {
        size = 1;
    } else {
        size = sizeInput.value;
    }
    let width = 256, // Get the width of the array
        height =256, // Get the height of the array
        scale = 1 * size; // Scales the whole image by this amount, set to 1 for default size
    // Make sure the canvas is no larger than the size we need
        workSpace.width = width * scale;
        workSpace.height = height * scale;
    drawing = new Image();
    drawing.src = "./data/image.png"; // can also be a remote URL e.g. http://
    drawing.onload = function () {
        ctx.drawImage(drawing, 0, 0);
    }
})

workSpace.addEventListener('mousemove',
    function(evt) {
        let mousePos = getMousePos(workSpace, evt);
        let posx = mousePos.x;
        let posy = mousePos.y;
        draw(workSpace, posx, posy);
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
    }
}

function draw(canvas, posx, posy) {
    let context = canvas.getContext('2d');
    if (md) {
        context.fillRect(posx, posy, 4, 4);
    }
}

function chooseColor(context) {
    let ctx = workSpace.getContext("2d");
    if (context == redChoose) {
        currentColor = 'red';
    } else if (context == blueChoose) {
        currentColor = 'blue';
    }
    ctx.fillStyle = currentColor;
}