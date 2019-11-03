var ru = true;
var tabIsPressed = false;
var prev = undefined;
var hotKey = ["Shift"];
let input = document.createElement('input')
document.body.appendChild(input).id = "result";
let div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML += '<div class="klaviatura"><div class="row"><div class="key io"><span>ё</span><sup>~</sup></div><div class="key one"><span>1</span><sup>!</sup></div><div class="key two"><span>2</span><sup>@</sup></div><div class="key tree"><span>3</span><sup>#</sup></div><div class="key four"><span>4</span><sup> $</sup></div><div class="key five"><span>5</span><sup>%</sup></div><div class="key six"><span>6</span><sup>^</sup></div><div class="key seven"><span>7</span><sup>?</sup></div><div class="key eight"><span>8</span><sup>*</sup></div><div class="key nine"><span>9</span><sup>(</sup></div><div class="key zero"><span>0</span><sup>)</sup></div><div class="key sub"><span>-</span><sup>_</sup></div><div class="key equal"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key ii"><span>й</span></div><div class="key ce"><span>ц</span></div><div class="key uu"><span>у</span></div><div class="key k"><span>к</span></div><div class="key e"><span>е</span></div><div class="key n"><span>н</span></div><div class="key g"><span>г</span></div> <div class="key sh"><span>ш</span></div><div class="key sch"><span>щ</span></div><div class="key zz"><span>з</span></div><div class="key hh"><span>х</span></div><div class="key hard"><span>ъ</span></div><div class="key spec1"><span>&#92</span></div><div class="key del"><span>Del</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key ff"><span>ф</span></div><div class="key ihard"><span>ы</span></div><div class="key vv"><span>в</span></div><div class="key aa"><span>а</span></div><div class="key p"><span>п</span></div><div class="key rr"><span>р</span></div><div class="key o"><span>о</span></div><div class="key l"><span>л</span></div><div class="key d"><span>д</span></div><div class="key je"><span>ж</span></div><div class="key ie"><span>э</span></div><div class="key enter"><span>Enter</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key ia"><span>я</span></div><div class="key ch"><span>ч</span></div><div class="key se"><span>с</span></div><div class="key m"><span>м</span></div><div class="key i"><span>и</span></div><div class="key t"><span>т</span></div><div class="key soft"><span>ь</span></div><div class="key b"><span>б</span></div><div class="key iu"><span>ю</span></div><div class="key"><span>&#47</span></div><div class="key up"><span>^</span></div></div><div class="row"><div class="key ctrl"><span>Ctrl</span></div><div class="key win"><span>Win</span></div><div class="key alt"><span>Alt</span></div><div class="key space"></div><div class="key left"><span><</span></div><div class="key down"><span>v</span></div><div class="key right"><span>></span></div></div>';

window.onkeyup = function (event) {
    console.log(event.key);
    if (event.ShiftLeft) {
        tabIsPressed = false; event.preventDefault();
    }
    if (document.body.querySelector('.Backquote') != null && event.code == 'Backquote') {
        let select = document.body.querySelector('.Backquote');
        console.log(select);
        select.classList.remove('use');
    }
    switch (event.key) {
        case '1': document.body.querySelector('.one').classList.remove('use'); break;
        case '2': document.body.querySelector('.two').classList.remove('use'); break;
        case '3': document.body.querySelector('.tree').classList.remove('use'); break;
        case '4': document.body.querySelector('.four').classList.remove('use'); break;
        case '5': document.body.querySelector('.five').classList.remove('use'); break;
        case '6': document.body.querySelector('.six').classList.remove('use'); break;
        case '7': document.body.querySelector('.seven').classList.remove('use'); break;
        case '8': document.body.querySelector('.eight').classList.remove('use'); break;
        case '9': document.body.querySelector('.nine').classList.remove('use'); break;
        case '0': document.body.querySelector('.zero').classList.remove('use'); break;
        case '-': document.body.querySelector('.sub').classList.remove('use'); break;
        case '=': document.body.querySelector('.equal').classList.remove('use'); break;
        case 'Backspace': document.body.querySelector('.backspace').classList.remove('use'); break;
        case 'Tab': document.body.querySelector('.tab').classList.remove('use'); break;
        case 'Q': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'W': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'E': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'R': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'T': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'Y': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'U': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'I': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'O': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'P': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case '[': document.body.querySelector('.StartQBracket').classList.remove('use'); break;
        case ']': document.body.querySelector('.EndQBracket').classList.remove('use'); break;
        case 'A': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'S': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'D': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'F': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'G': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'H': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'J': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'K': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'L': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case ';': document.body.querySelector('.et_dot').classList.remove('use'); break;
        case "'": document.body.querySelector('.spec2').classList.remove('use'); break;
        case 'Enter': document.body.querySelector('.enter').classList.remove('use'); break;
        case 'CapsLock': document.body.querySelector('.capslock').classList.remove('use'); break;
        case 'Shift': document.body.querySelector('.shift').classList.remove('use'); break;
        case 'Alt': document.body.querySelector('.alt').classList.remove('use'); break;
        case 'Control': document.body.querySelector('.ctrl').classList.add('use'); break;
        case 'Meta': document.body.querySelector('.win').classList.remove('use'); break;
        case 'Delete': document.body.querySelector('.del').classList.remove('use'); break;
        case 'ArrowUp': document.body.querySelector('.up').classList.remove('use'); break;
        case 'ArrowDown': document.body.querySelector('.down').classList.remove('use'); break;
        case 'ArrowLeft': document.body.querySelector('.left').classList.remove('use'); break;
        case 'ArrowRight': document.body.querySelector('.right').classList.remove('use'); break;
        case ' ': document.body.querySelector('.space').classList.remove('use'); break;
        case 'Z': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'X': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'C': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'V': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'B': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'N': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case 'M': document.body.querySelector('.' + event.key).classList.remove('use'); break;
        case ',': document.body.querySelector('.et').classList.remove('use'); break;
        case '.': document.body.querySelector('.dot').classList.remove('use'); break;
        case '/': document.body.querySelector('.spec3').classList.remove('use'); break;
        case 'q': document.body.querySelector('.Q').classList.remove('use'); break;
        case 'w': document.body.querySelector('.W').classList.remove('use'); break;
        case 'e': document.body.querySelector('.E').classList.remove('use'); break;
        case 'r': document.body.querySelector('.R').classList.remove('use'); break;
        case 't': document.body.querySelector('.T').classList.remove('use'); break;
        case 'y': document.body.querySelector('.Y').classList.remove('use'); break;
        case 'u': document.body.querySelector('.U').classList.remove('use'); break;
        case 'i': document.body.querySelector('.I').classList.remove('use'); break;
        case 'o': document.body.querySelector('.O').classList.remove('use'); break;
        case 'p': document.body.querySelector('.P').classList.remove('use'); break;
        case 'a': document.body.querySelector('.A').classList.remove('use'); break;
        case 's': document.body.querySelector('.S').classList.remove('use'); break;
        case 'd': document.body.querySelector('.D').classList.remove('use'); break;
        case 'f': document.body.querySelector('.F').classList.remove('use'); break;
        case 'g': document.body.querySelector('.G').classList.remove('use'); break;
        case 'h': document.body.querySelector('.H').classList.remove('use'); break;
        case 'j': document.body.querySelector('.J').classList.remove('use'); break;
        case 'k': document.body.querySelector('.K').classList.remove('use'); break;
        case 'l': document.body.querySelector('.L').classList.remove('use'); break;
        case 'z': document.body.querySelector('.Z').classList.remove('use'); break;
        case 'x': document.body.querySelector('.X').classList.remove('use'); break;
        case 'c': document.body.querySelector('.C').classList.remove('use'); break;
        case 'v': document.body.querySelector('.V').classList.remove('use'); break;
        case 'b': document.body.querySelector('.B').classList.remove('use'); break;
        case 'n': document.body.querySelector('.N').classList.remove('use'); break;
        case 'm': document.body.querySelector('.M').classList.remove('use'); break;

        case 'Й': document.body.querySelector('.ii').classList.remove('use'); break;
        case 'Ц': document.body.querySelector('.ce').classList.remove('use'); break;
        case 'У': document.body.querySelector('.uu').classList.remove('use'); break;
        case 'К': document.body.querySelector('.k').classList.remove('use'); break;
        case 'Е': document.body.querySelector('.e').classList.remove('use'); break;
        case 'Н': document.body.querySelector('.n').classList.remove('use'); break;
        case 'Г': document.body.querySelector('.g').classList.remove('use'); break;
        case 'Ш': document.body.querySelector('.sh').classList.remove('use'); break;
        case 'Щ': document.body.querySelector('.sch').classList.remove('use'); break;
        case 'З': document.body.querySelector('.zz').classList.remove('use'); break;
        case 'Х': document.body.querySelector('.hh').classList.remove('use'); break;
        case 'Ъ': document.body.querySelector('.hard').classList.remove('use'); break;
        case 'Ф': document.body.querySelector('.ff').classList.remove('use'); break;
        case 'Ы': document.body.querySelector('.ihard').classList.remove('use'); break;
        case 'В': document.body.querySelector('.vv').classList.remove('use'); break;
        case 'А': document.body.querySelector('.aa').classList.remove('use'); break;
        case 'П': document.body.querySelector('.p').classList.remove('use'); break;
        case 'Р': document.body.querySelector('.rr').classList.remove('use'); break;
        case 'О': document.body.querySelector('.o').classList.remove('use'); break;
        case 'Л': document.body.querySelector('.l').classList.remove('use'); break;
        case 'Д': document.body.querySelector('.d').classList.remove('use'); break;
        case 'Ж': document.body.querySelector('.je').classList.remove('use'); break;
        case 'Э': document.body.querySelector('.ie').classList.remove('use'); break;
        case 'Я': document.body.querySelector('.ia').classList.remove('use'); break;
        case 'Ч': document.body.querySelector('.ch').classList.remove('use'); break;
        case 'С': document.body.querySelector('.se').classList.remove('use'); break;
        case 'М': document.body.querySelector('.m').classList.remove('use'); break;
        case 'И': document.body.querySelector('.i').classList.remove('use'); break;
        case 'Т': document.body.querySelector('.t').classList.remove('use'); break;
        case 'Ь': document.body.querySelector('.soft').classList.remove('use'); break;
        case 'Б': document.body.querySelector('.b').classList.remove('use'); break;
        case 'Ю': document.body.querySelector('.iu').classList.remove('use'); break;
        case 'Ё': document.body.querySelector('.io').classList.remove('use'); break;

        case 'й': document.body.querySelector('.ii').classList.remove('use'); break;
        case 'ц': document.body.querySelector('.ce').classList.remove('use'); break;
        case 'у': document.body.querySelector('.uu').classList.remove('use'); break;
        case 'к': document.body.querySelector('.k').classList.remove('use'); break;
        case 'е': document.body.querySelector('.e').classList.remove('use'); break;
        case 'н': document.body.querySelector('.n').classList.remove('use'); break;
        case 'г': document.body.querySelector('.g').classList.remove('use'); break;
        case 'ш': document.body.querySelector('.sh').classList.remove('use'); break;
        case 'щ': document.body.querySelector('.sch').classList.remove('use'); break;
        case 'з': document.body.querySelector('.zz').classList.remove('use'); break;
        case 'х': document.body.querySelector('.hh').classList.remove('use'); break;
        case 'ъ': document.body.querySelector('.hard').classList.remove('use'); break;
        case 'ф': document.body.querySelector('.ff').classList.remove('use'); break;
        case 'ы': document.body.querySelector('.ihard').classList.remove('use'); break;
        case 'в': document.body.querySelector('.vv').classList.remove('use'); break;
        case 'а': document.body.querySelector('.aa').classList.remove('use'); break;
        case 'п': document.body.querySelector('.p').classList.remove('use'); break;
        case 'р': document.body.querySelector('.rr').classList.remove('use'); break;
        case 'о': document.body.querySelector('.o').classList.remove('use'); break;
        case 'л': document.body.querySelector('.l').classList.remove('use'); break;
        case 'д': document.body.querySelector('.d').classList.remove('use'); break;
        case 'ж': document.body.querySelector('.je').classList.remove('use'); break;
        case 'э': document.body.querySelector('.ie').classList.remove('use'); break;
        case 'я': document.body.querySelector('.ia').classList.remove('use'); break;
        case 'ч': document.body.querySelector('.ch').classList.remove('use'); break;
        case 'с': document.body.querySelector('.se').classList.remove('use'); break;
        case 'м': document.body.querySelector('.m').classList.remove('use'); break;
        case 'и': document.body.querySelector('.i').classList.remove('use'); break;
        case 'т': document.body.querySelector('.t').classList.remove('use'); break;
        case 'ь': document.body.querySelector('.soft').classList.remove('use'); break;
        case 'б': document.body.querySelector('.b').classList.remove('use'); break;
        case 'ю': document.body.querySelector('.iu').classList.remove('use'); break;
        case 'ё': document.body.querySelector('.io').classList.remove('use'); break;
        default:
    }
};
window.onkeydown = function (event) {
  
    if (hotKey.includes(event.key)) {
        prev = event;
    }
    if (event.ShiftLeft) {
        tabIsPressed = true; event.preventDefault();
    }
    function checkPrevKey(prev, event) {
        if (prev.key == "Shift")  {
            if (event.key == "Alt") {
                ru = !ru; 
            }
        }
    }
    setTimeout(checkPrevKey(prev, event), 1000);
    if (ru) {
        if (document.body.querySelector('.klaviatura') != null) {
            document.body.querySelector('.klaviatura').remove();
        }
        console.log(document.body.querySelector('input'));
        div.innerHTML += '<div class="klaviatura"><div class="row"><div class="key io"><span>ё</span><sup>~</sup></div><div class="key one"><span>1</span><sup>!</sup></div><div class="key two"><span>2</span><sup>@</sup></div><div class="key tree"><span>3</span><sup>#</sup></div><div class="key four"><span>4</span><sup> $</sup></div><div class="key five"><span>5</span><sup>%</sup></div><div class="key six"><span>6</span><sup>^</sup></div><div class="key seven"><span>7</span><sup>?</sup></div><div class="key eight"><span>8</span><sup>*</sup></div><div class="key nine"><span>9</span><sup>(</sup></div><div class="key zero"><span>0</span><sup>)</sup></div><div class="key sub"><span>-</span><sup>_</sup></div><div class="key equal"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key ii"><span>й</span></div><div class="key ce"><span>ц</span></div><div class="key uu"><span>у</span></div><div class="key k"><span>к</span></div><div class="key e"><span>е</span></div><div class="key n"><span>н</span></div><div class="key g"><span>г</span></div> <div class="key sh"><span>ш</span></div><div class="key sch"><span>щ</span></div><div class="key zz"><span>з</span></div><div class="key hh"><span>х</span></div><div class="key hard"><span>ъ</span></div><div class="key spec1"><span>&#92</span></div><div class="key del"><span>Del</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key ff"><span>ф</span></div><div class="key ihard"><span>ы</span></div><div class="key vv"><span>в</span></div><div class="key aa"><span>а</span></div><div class="key p"><span>п</span></div><div class="key rr"><span>р</span></div><div class="key o"><span>о</span></div><div class="key l"><span>л</span></div><div class="key d"><span>д</span></div><div class="key je"><span>ж</span></div><div class="key ie"><span>э</span></div><div class="key enter"><span>Enter</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key ia"><span>я</span></div><div class="key ch"><span>ч</span></div><div class="key se"><span>с</span></div><div class="key m"><span>м</span></div><div class="key i"><span>и</span></div><div class="key t"><span>т</span></div><div class="key soft"><span>ь</span></div><div class="key b"><span>б</span></div><div class="key iu"><span>ю</span></div><div class="key"><span>&#47</span></div><div class="key up"><span>^</span></div></div><div class="row"><div class="key ctrl"><span>Ctrl</span></div><div class="key win"><span>Win</span></div><div class="key alt"><span>Alt</span></div><div class="key space"></div><div class="key left"><span><</span></div><div class="key down"><span>v</span></div><div class="key right"><span>></span></div></div>';
    } else {
        if (document.body.querySelector('.klaviatura') != null) {
            document.body.querySelector('.klaviatura').remove();
        }
        div.innerHTML += '<div class="klaviatura"><div class="row"><div class="key Backquote"><span>~</span><sup>`</sup></div><div class="key one"><span>1</span><sup>!</sup></div><div class="key two"><span>2</span><sup>@</sup></div><div class="key tree"><span>3</span><sup>#</sup></div><div class="key four"><span>4</span><sup>$</sup></div><div class="key five"><span>5</span><sup>%</sup></div><div class="key six"><span>6</span><sup>^</sup></div><div class="key seven"><span>7</span><sup>?</sup></div><div class="key eight"><span>8</span><sup>*</sup></div><div class="key nine"><span>9</span><sup>(</sup></div><div class="key zero"><span>0</span><sup>)</sup></div><div class="key sub"><span>-</span><sup>_</sup></div><div class="key equal"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key Q"><span>Q</span></div><div class="key W"><span>W</span></div><div class="key E"><span>E</span></div><div class="key R"><span>R</span></div><div class="key T"><span>T</span></div><div class="key Y"><span>Y</span></div><div class="key U"><span>U</span></div><div class="key I"><span>I</span></div><div class="key O"><span>O</span></div><div class="key P"><span>P</span></div><div class="key StartQBracket"><span>[</span></div><div class="key EndQBracket"><span>]</span></div><div class="key spec1"><span>&#92</span><sup>/</sup></div><div class="key del"><span>Del</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key A"><span>A</span></div><div class="key S"><span>S</span></div><div class="key D"><span>D</span></div><div class="key F"><span>F</span></div><div class="key G"><span>G</span></div><div class="key H"><span>H</span></div><div class="key J"><span>J</span></div><div class="key K"><span>K</span></div><div class="key L"><span>L</span></div><div class="key et_dot"><span>;</span></div><div class="key spec2"><span>&#39</span></div><div class="key enter"><span>Enter</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key Z"><span>Z</span></div><div class="key X"><span>X</span></div><div class="key C"><span>C</span></div><div class="key V"><span>V</span></div><div class="key B"><span>B</span></div><div class="key N"><span>N</span></div><div class="key M"><span>M</span></div><div class="key et"><span>,</span></div><div class="key dot"><span>.</span></div><div class="key spec3"><span>&#47</span></div><div class="key up"><span>^</span></div></div><div class="row"><div class="key ctrl"><span>Ctrl</span></div><div class="key win"><span>Win</span></div><div class="key alt"><span>Alt</span></div><div class="key space"></div><div class="key left"><span><</span></div><div class="key down"><span>v</span></div><div class="key right"><span>></span></div></div>';
    }
    switch (event.key) {
        case '1': document.body.querySelector('.one').classList.add('use'); break;
        case '2': document.body.querySelector('.two').classList.add('use'); break;
        case '3': document.body.querySelector('.tree').classList.add('use'); break;
        case '4': document.body.querySelector('.four').classList.add('use'); break;
        case '5': document.body.querySelector('.five').classList.add('use'); break;
        case '6': document.body.querySelector('.six').classList.add('use'); break;
        case '7': document.body.querySelector('.seven').classList.add('use'); break;
        case '8': document.body.querySelector('.eight').classList.add('use'); break;
        case '9': document.body.querySelector('.nine').classList.add('use'); break;
        case '0': document.body.querySelector('.zero').classList.add('use'); break;
        case '-': document.body.querySelector('.sub').classList.add('use'); break;
        case '=': document.body.querySelector('.equal').classList.add('use'); break;
        case 'Backspace': document.body.querySelector('.backspace').classList.add('use'); break;
        case 'Tab': document.body.querySelector('.tab').classList.add('use'); break;
        case 'Q': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'W': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'E': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'R': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'T': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'Y': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'U': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'I': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'O': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'P': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case '[': document.body.querySelector('.StartQBracket').classList.add('use'); break;
        case ']': document.body.querySelector('.EndQBracket').classList.add('use'); break;
        case 'A': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'S': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'D': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'F': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'G': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'H': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'J': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'K': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'L': document.body.querySelector('.' + event.key).classList.add('use'); break;

        case 'Й': document.body.querySelector('.ii').classList.add('use'); break;
        case 'Ц': document.body.querySelector('.ce').classList.add('use'); break;
        case 'У': document.body.querySelector('.uu').classList.add('use'); break;
        case 'К': document.body.querySelector('.k').classList.add('use'); break;
        case 'Е': document.body.querySelector('.e').classList.add('use'); break;
        case 'Н': document.body.querySelector('.n').classList.add('use'); break;
        case 'Г': document.body.querySelector('.g').classList.add('use'); break;
        case 'Ш': document.body.querySelector('.sh').classList.add('use'); break;
        case 'Щ': document.body.querySelector('.sch').classList.add('use'); break;
        case 'З': document.body.querySelector('.zz').classList.add('use'); break;
        case 'Х': document.body.querySelector('.hh').classList.add('use'); break;
        case 'Ъ': document.body.querySelector('.hard').classList.add('use'); break;
        case 'Ф': document.body.querySelector('.ff').classList.add('use'); break;
        case 'Ы': document.body.querySelector('.ihard').classList.add('use'); break;
        case 'В': document.body.querySelector('.vv').classList.add('use'); break;
        case 'А': document.body.querySelector('.aa').classList.add('use'); break;
        case 'П': document.body.querySelector('.p').classList.add('use'); break;
        case 'Р': document.body.querySelector('.rr').classList.add('use'); break;
        case 'О': document.body.querySelector('.o').classList.add('use'); break;
        case 'Л': document.body.querySelector('.l').classList.add('use'); break;
        case 'Д': document.body.querySelector('.d').classList.add('use'); break;
        case 'Ж': document.body.querySelector('.je').classList.add('use'); break;
        case 'Э': document.body.querySelector('.ie').classList.add('use'); break;
        case 'Я': document.body.querySelector('.ia').classList.add('use'); break;
        case 'Ч': document.body.querySelector('.ch').classList.add('use'); break;
        case 'С': document.body.querySelector('.se').classList.add('use'); break;
        case 'М': document.body.querySelector('.m').classList.add('use'); break;
        case 'И': document.body.querySelector('.i').classList.add('use'); break;
        case 'Т': document.body.querySelector('.t').classList.add('use'); break;
        case 'Ь': document.body.querySelector('.soft').classList.add('use'); break;
        case 'Б': document.body.querySelector('.b').classList.add('use'); break;
        case 'Ю': document.body.querySelector('.iu').classList.add('use'); break;
        case 'Ё': document.body.querySelector('.io').classList.add('use'); break;

        case 'й': document.body.querySelector('.ii').classList.add('use'); break;
        case 'ц': document.body.querySelector('.ce').classList.add('use'); break;
        case 'у': document.body.querySelector('.uu').classList.add('use'); break;
        case 'к': document.body.querySelector('.k').classList.add('use'); break;
        case 'е': document.body.querySelector('.e').classList.add('use'); break;
        case 'н': document.body.querySelector('.n').classList.add('use'); break;
        case 'г': document.body.querySelector('.g').classList.add('use'); break;
        case 'ш': document.body.querySelector('.sh').classList.add('use'); break;
        case 'щ': document.body.querySelector('.sch').classList.add('use'); break;
        case 'з': document.body.querySelector('.zz').classList.add('use'); break;
        case 'х': document.body.querySelector('.hh').classList.add('use'); break;
        case 'ъ': document.body.querySelector('.hard').classList.add('use'); break;
        case 'ф': document.body.querySelector('.ff').classList.add('use'); break;
        case 'ы': document.body.querySelector('.ihard').classList.add('use'); break;
        case 'в': document.body.querySelector('.vv').classList.add('use'); break;
        case 'а': document.body.querySelector('.aa').classList.add('use'); break;
        case 'п': document.body.querySelector('.p').classList.add('use'); break;
        case 'р': document.body.querySelector('.rr').classList.add('use'); break;
        case 'о': document.body.querySelector('.o').classList.add('use'); break;
        case 'л': document.body.querySelector('.l').classList.add('use'); break;
        case 'д': document.body.querySelector('.d').classList.add('use'); break;
        case 'ж': document.body.querySelector('.je').classList.add('use'); break;
        case 'э': document.body.querySelector('.ie').classList.add('use'); break;
        case 'я': document.body.querySelector('.ia').classList.add('use'); break;
        case 'ч': document.body.querySelector('.ch').classList.add('use'); break;
        case 'с': document.body.querySelector('.se').classList.add('use'); break;
        case 'м': document.body.querySelector('.m').classList.add('use'); break;
        case 'и': document.body.querySelector('.i').classList.add('use'); break;
        case 'т': document.body.querySelector('.t').classList.add('use'); break;
        case 'ь': document.body.querySelector('.soft').classList.add('use'); break;
        case 'б': document.body.querySelector('.b').classList.add('use'); break;
        case 'ю': document.body.querySelector('.iu').classList.add('use'); break;
        case 'ё': document.body.querySelector('.io').classList.add('use'); break;

        case ';': document.body.querySelector('.et_dot').classList.add('use'); break;
        case "'": document.body.querySelector('.spec2').classList.add('use'); break;
        case 'Enter': document.body.querySelector('.enter').classList.add('use'); break;
        case 'CapsLock': document.body.querySelector('.capslock').classList.add('use'); break;
        case 'Shift': document.body.querySelector('.shift').classList.add('use'); break;
        case 'Alt': document.body.querySelector('.alt').classList.add('use'); break;
        case 'Control': document.body.querySelector('.ctrl').classList.add('use'); break;
        case 'Meta': document.body.querySelector('.win').classList.add('use'); break;
        case 'Delete': document.body.querySelector('.del').classList.add('use'); break;
        case 'ArrowUp': document.body.querySelector('.up').classList.add('use'); break;
        case 'ArrowDown': document.body.querySelector('.down').classList.add('use'); break;
        case 'ArrowLeft': document.body.querySelector('.left').classList.add('use'); break;
        case 'ArrowRight': document.body.querySelector('.right').classList.add('use'); break;
        case ' ': document.body.querySelector('.space').classList.add('use'); break;
        case 'Z': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'X': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'C': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'V': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'B': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'N': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case 'M': document.body.querySelector('.' + event.key).classList.add('use'); break;
        case ',': document.body.querySelector('.et').classList.add('use'); break;
        case '.': document.body.querySelector('.dot').classList.add('use'); break;
        case '/': document.body.querySelector('.spec3').classList.add('use'); break;
        case 'q': document.body.querySelector('.Q').classList.add('use'); break;
        case 'w': document.body.querySelector('.W').classList.add('use'); break;
        case 'e': document.body.querySelector('.E').classList.add('use'); break;
        case 'r': document.body.querySelector('.R').classList.add('use'); break;
        case 't': document.body.querySelector('.T').classList.add('use'); break;
        case 'y': document.body.querySelector('.Y').classList.add('use'); break;
        case 'u': document.body.querySelector('.U').classList.add('use'); break;
        case 'i': document.body.querySelector('.I').classList.add('use'); break;
        case 'o': document.body.querySelector('.O').classList.add('use'); break;
        case 'p': document.body.querySelector('.P').classList.add('use'); break;
        case 'a': document.body.querySelector('.A').classList.add('use'); break;
        case 's': document.body.querySelector('.S').classList.add('use'); break;
        case 'd': document.body.querySelector('.D').classList.add('use'); break;
        case 'f': document.body.querySelector('.F').classList.add('use'); break;
        case 'g': document.body.querySelector('.G').classList.add('use'); break;
        case 'h': document.body.querySelector('.H').classList.add('use'); break;
        case 'j': document.body.querySelector('.J').classList.add('use'); break;
        case 'k': document.body.querySelector('.K').classList.add('use'); break;
        case 'l': document.body.querySelector('.L').classList.add('use'); break;
        case 'z': document.body.querySelector('.Z').classList.add('use'); break;
        case 'x': document.body.querySelector('.X').classList.add('use'); break;
        case 'c': document.body.querySelector('.C').classList.add('use'); break;
        case 'v': document.body.querySelector('.V').classList.add('use'); break;
        case 'b': document.body.querySelector('.B').classList.add('use'); break;
        case 'n': document.body.querySelector('.N').classList.add('use'); break;
        case 'm': document.body.querySelector('.M').classList.add('use'); break;
        default:
    }
   if (document.body.querySelector('.Backquote') != null && event.code == 'Backquote') {
        let select = document.body.querySelector('.Backquote');
       
        select.classList.add('use');
       // let input = document.querySelector('input').value += document.body.querySelector('.Backquote').childNodes[0].innerHTML;
   }
   
}
    