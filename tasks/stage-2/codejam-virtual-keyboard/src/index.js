var ru = true;
var tabIsPressed = false;
var prev = undefined;
var hotKey = ["Shift"];
window.onkeyup  = function (event) {
    if (event.ShiftLeft) {
        tabIsPressed = false; event.preventDefault();
    }
    console.log(event.key);
    if (event.key ) {

    }
};
window.onkeydown = function(event)  {
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
            document.body.innerHTML = '<input id="result" autofocus><div class="klaviatura"><div class="row"><div class="key"><span>¸</span><sup>~</sup></div><div class="key"><span>1</span><sup>!</sup></div><div class="key"><span>2</span><sup>@</sup></div><div class="key"><span>3</span><sup>#</sup></div><div class="key"><span>4</span><sup>$</sup></div><div class="key"><span>5</span><sup>%</sup></div><div class="key"><span>6</span><sup>^</sup></div><div class="key"><span>7</span><sup>?</sup></div><div class="key"><span>8</span><sup>*</sup></div><div class="key"><span>9</span><sup>(</sup></div><div class="key"><span>0</span><sup>)</sup></div><div class="key"><span>-</span><sup>_</sup></div><div class="key"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key"><span>é</span></div><div class="key"><span>ö</span></div><div class="key"><span>ó</span></div><div class="key"><span>ê</span></div><div class="key"><span>å</span></div><div class="key"><span>í</span></div><div class="key"><span>ã</span></div><div class="key"><span>ø</span></div><div class="key"><span>ù</span></div><div class="key"><span>ç</span></div><div class="key"><span>õ</span></div><div class="key"><span>ú</span></div><div class="key"><span>&#92</span></div><div class="key del"><span>Del</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key"><span>ô</span></div><div class="key"><span>û</span></div><div class="key"><span>â</span></div><div class="key"><span>à</span></div><div class="key"><span>ï</span></div><div class="key"><span>ð</span></div><div class="key"><span>î</span></div><div class="key"><span>ë</span></div><div class="key"><span>ä</span></div><div class="key"><span>æ</span></div><div class="key"><span>ý</span></div><div class="key enter"><span>Enter</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key"><span>ÿ</span></div><div class="key"><span>÷</span></div><div class="key"><span>ñ</span></div><div class="key"><span>ì</span></div><div class="key"><span>è</span></div><div class="key"><span>ò</span></div><div class="key"><span>ü</span></div><div class="key"><span>á</span></div><div class="key"><span>þ</span></div><div class="key"><span>&#47</span></div><div class="key up"><span>^</span></div></div><div class="row"><div class="key ctrl"><span>Ctrl</span></div><div class="key win"><span>Win</span></div><div class="key alt"><span>Alt</span></div><div class="key space"></div><div class="key left"><span><</span></div><div class="key down"><span>v</span></div><div class="key right"><span>></span></div></div>';
        } else {
            document.body.innerHTML = '<input id="result" autofocus><div class="klaviatura"><div class="row"><div class="key `"><span>~</span><sup>`</sup></div><div class="key"><span>1</span><sup>!</sup></div><div class="key"><span>2</span><sup>@</sup></div><div class="key"><span>3</span><sup>#</sup></div><div class="key"><span>4</span><sup>$</sup></div><div class="key"><span>5</span><sup>%</sup></div><div class="key"><span>6</span><sup>^</sup></div><div class="key"><span>7</span><sup>?</sup></div><div class="key"><span>8</span><sup>*</sup></div><div class="key"><span>9</span><sup>(</sup></div><div class="key"><span>0</span><sup>)</sup></div><div class="key"><span>-</span><sup>_</sup></div><div class="key"><span>=</span><sup>+</sup></div><div class="key backspace"><span>Backspace</span></div></div><div class="row"><div class="key tab"><span>Tab</span></div><div class="key"><span>Q</span></div><div class="key"><span>W</span></div><div class="key"><span>E</span></div><div class="key"><span>R</span></div><div class="key"><span>T</span></div><div class="key"><span>Y</span></div><div class="key"><span>U</span></div><div class="key"><span>I</span></div><div class="key"><span>O</span></div><div class="key"><span>P</span></div><div class="key"><span>[</span></div><div class="key"><span>]</span></div><div class="key"><span>&#92</span><sup>/</sup></div><div class="key del"><span>Del</span></div></div><div class="row"><div class="key capslock"><span>Caps Lock</span></div><div class="key"><span>A</span></div><div class="key"><span>S</span></div><div class="key"><span>D</span></div><div class="key"><span>F</span></div><div class="key"><span>G</span></div><div class="key"><span>H</span></div><div class="key"><span>J</span></div><div class="key"><span>K</span></div><div class="key"><span>L</span></div><div class="key"><span>;</span></div><div class="key"><span>&#39</span></div><div class="key enter"><span>Enter</span></div></div><div class="row"><div class="key shift"><span>Shift</span></div><div class="key"><span>Z</span></div><div class="key"><span>X</span></div><div class="key"><span>C</span></div><div class="key"><span>V</span></div><div class="key"><span>B</span></div><div class="key"><span>N</span></div><div class="key"><span>M</span></div><div class="key"><span>,</span></div><div class="key"><span>.</span></div><div class="key"><span>&#47</span></div><div class="key up"><span>^</span></div></div><div class="row"><div class="key ctrl"><span>Ctrl</span></div><div class="key win"><span>Win</span></div><div class="key alt"><span>Alt</span></div><div class="key space"></div><div class="key left"><span><</span></div><div class="key down"><span>v</span></div><div class="key right"><span>></span></div></div>';
        }

    
}
    