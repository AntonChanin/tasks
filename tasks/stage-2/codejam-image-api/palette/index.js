const workSpace = document.querySelector('canvas')
const matrixs = document.querySelector('.matrixs')
const colors = document.querySelector('.colors')
const findLocInput = document.querySelector('.findLoc')
const sizeInput = document.querySelector('#size')
const load = document.querySelector('#load')
const bucket = document.querySelector('#paint-bucket')
const chooseTool = document.querySelector('#choose-color')
const currentColorTool = document.querySelector('.current-color')
const prevColorTool = document.querySelector('.prev-color')
const small = matrixs.querySelector('#small')
const medium = matrixs.querySelector('#medium')
const big = matrixs.querySelector('#big')
const redChoose = colors.querySelector('#red')
const blueChoose = colors.querySelector('#blue')
const toolsList = ['#current-color', '#prev-color', '#red', '#blue', '#choose-color', '#transform', '#pencil', '#small', '#medium', '#big']
const ref4X =
  'https://raw.githubusercontent.com/AntonChanin/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json'
const ref32X =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json'
var url =
  'https://api.unsplash.com/photos/random?query=town,Minsk&client_id=fec156f271c0811c8231098435c111c587352eaffae03b1d3a898cc877dd1b33'

var prevColor = undefined
var currentColor = 'green'
var currentPlace = 'Minsk'
var currentTool = undefined
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var md = false
var chooseToolUse = false

workSpace.addEventListener('mousedown', down)
workSpace.addEventListener('mouseup', toggledraw)
currentColorTool.style.background = currentColor

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'json'
  xhr.onload = () => {
    var status = xhr.status
    if (status == 200) {
      callback(null, xhr.response)
    } else {
      callback(status)
    }
  }
  xhr.send()
}

function settingImg(data, colorFormat) {
    const size = sizeInput.value === '' ? 1 : sizeInput.value
    const width = data[0].length
    const height = data.length
    const scale = 10 * size 

    workSpace.width = width * scale
    workSpace.height = height * scale

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = colorFormat === 'hex' 
                ? '#' + data[row][col]
                : 'rgba(' + data[row][col] + ')'
            ctx.fillRect(col * scale, row * scale, scale, scale)
        }
    }
    localStorage.setItem('imgData', canvas.toDataURL())
}
function settingImgSrc(resolution, href) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const size = sizeInput.value === '' ? 1 : sizeInput.value
    const width = resolution || drawing.width 
    const height = resolution || drawing.height
    const scale = 1 * size

    workSpace.width = width * scale
    workSpace.height = height * scale

    drawing = new Image()
    drawing.setAttribute('crossOrigin', '')
    drawing.src = href || './data/image.png'
    drawing.classList.add('trueSize')
    drawing.onload = () => {
        ctx.drawImage(drawing, 0, 0)
    }
    localStorage.setItem('imgData', drawing.src)
}

function printErrorMessage(err) {
    alert('Something went wrong: ' + err)
}

function selectTool(selector) {
    document.querySelector(selector).onmousedown = () => {
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = document.querySelector(selector)
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        currentColorTool.style.background = currentColor
    }
}

let idt = localStorage.getItem('imgData') || null
if (idt !== null) {
  let img = new Image()
  img.src = idt
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 512, 512)
  }
}

small.addEventListener('click', () => {
    getJSON(ref4X, (err, data) => {
        err ? printErrorMessage(err) : settingImg(data, 'hex')
    })
})

medium.addEventListener('click', () => {
    getJSON(ref32X, (err, data) => {
        err ? printErrorMessage(err) : settingImg(data, 'rgba')
    })
})

big.addEventListener('click', () => {
    settingImgSrc(256)
})

function down() {
    md = true
}

function toggledraw() {
    md = false
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect()
    return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
    }
}

function draw(canvas, posx, posy) {
    if (md) {
    ctx.fillRect(posx, posy, 4, 4)
    }
}

function chooseColor(context) {
    if (context == redChoose) {
        prevColor = currentColor
        currentColor = 'red'
        currentColorTool.style.background = currentColor
        prevColorTool.style.background = prevColor
    } else if (context == blueChoose) {
        prevColor = currentColor
        currentColor = 'blue'
        currentColorTool.style.background = currentColor
        prevColorTool.style.background = prevColor
    } else if (context == currentColor) {
        prevColor = currentColor
        currentColorTool.style.background = currentColor
        prevColorTool.style.background = prevColor
    } else {
        currentColor = prevColor
        prevColor = currentColor
        currentColorTool.style.background = currentColor
        prevColorTool.style.background = prevColor
    }
    ctx.fillStyle = currentColor
}

toolsList.map((item) => {selectTool(item)})

canvas.onmousedown = (event) => {
    canvas.onmousemove = (event) => {
        if (chooseToolUse) {
            let index =
            (Math.floor(event.offsetY) * canvas.width + Math.floor(event.offsetX)) *
            4
            let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            let r = imgData.data[index]
            let g = imgData.data[index + 1]
            let b = imgData.data[index + 2]
            let a = imgData.data[index + 3]
            chooseToolUse = false
            prevColor = currentColor
            currentColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
            currentColorTool.style.background = currentColor
            prevColorTool.style.background = prevColor
        } else {
            currentTool = document.querySelector('#pencil')
            localStorage.setItem('imgData', canvas.toDataURL())
            let x = event.offsetX
            let y = event.offsetY
            ctx.fillRect(x - 5, y - 5, 10, 10)
            ctx.fillStyle = currentColor
            ctx.fill()
        }
    }
    canvas.onmouseup = () => {
    canvas.onmousemove = null
    }
}
function fillBucket() {
    if (currentTool != undefined) {
        currentTool.style.background = '#ffffff'
    }
    currentTool = bucket
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
    let scale = 10 * sizeInput.value
    for (let row = 0; row < canvas.height; row++) {
        for (let col = 0; col < canvas.width; col++) {
            ctx.fillStyle = currentColor 
            ctx.fillRect(col * scale, row * scale, scale, scale) 
        }
    }
}
bucket.onmousedown = () => {
    if (currentTool != undefined) {
        currentTool.style.background = '#ffffff'
    }
    currentTool = bucket
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
    let scale = 10 * sizeInput.value
    for (let row = 0; row < canvas.height; row++) {
        for (let col = 0; col < canvas.width; col++) {
            ctx.fillStyle = currentColor 
            ctx.fillRect(col * scale, row * scale, scale, scale) 
        }
    }
}

chooseTool.onmousedown = () => {
    chooseToolUse = true
    if (currentTool != undefined) {
        currentTool.style.background = '#ffffff'
    }
    currentTool = document.querySelector('#choose-color')
    currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
    currentColorTool.style.background = currentColor
}

window.onkeyup = (event) => {
    switch (event.key) {
    case 'B':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = bucket
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        fillBucket()
        chooseToolUse = false
        break
    case 'P':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = document.querySelector('#pencil')
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        chooseToolUse = false
        break
    case 'C':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = document.querySelector('#choose-color')
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        chooseToolUse = true
        break
    case 'b':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = bucket
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        fillBucket()
        chooseToolUse = false
        break
    case 'p':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = document.querySelector('#pencil')
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        chooseToolUse = false
        break
    case 'c':
        if (currentTool != undefined) {
            currentTool.style.background = '#ffffff'
        }
        currentTool = document.querySelector('#choose-color')
        currentTool.style.background = 'rgba(180, 149, 255, 0.5)'
        chooseToolUse = true
        break
    }
}
document.addEventListener('DOMContentLoaded',  () => {
    load.addEventListener('click', () => { getLinkToImage()})
    
    async function getLinkToImage()  {
        let findPlace = findLocInput.value
        if (findPlace !== '') {
            url = url.replace(currentPlace, findPlace)
            currentPlace = findPlace
        }
    
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                settingImgSrc(256, data.urls.small) 
            });
    }
})