!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){const o=document.querySelector("canvas"),a=document.querySelector(".matrixs"),n=document.querySelector(".colors"),r=document.querySelector(".findLoc"),l=document.querySelector("#size"),c=document.querySelector("#load"),u=document.querySelector("#blackAndWhite"),s=document.querySelector("#paint-bucket"),d=document.querySelector("#choose-color"),i=document.querySelector("#pencil"),f=document.querySelector(".current-color"),g=document.querySelector(".prev-color"),m=a.querySelector("#small"),b=a.querySelector("#medium"),y=a.querySelector("#big"),k=n.querySelector("#red"),h=n.querySelector("#blue"),S=document.querySelector("canvas"),v=S.getContext("2d");var p="https://api.unsplash.com/photos/random?query=town,Minsk&client_id=fec156f271c0811c8231098435c111c587352eaffae03b1d3a898cc877dd1b33",w=localStorage.getItem("prevColorState"),q=localStorage.getItem("currentColorState")||"green",L="Minsk",I=void 0,D=!1;function j(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="json",o.onload=()=>{var e=o.status;200==e?t(null,o.response):t(e)},o.send()}function E(e,t){const a=""===l.value?1:l.value,n=e[0].length,r=e.length,c=10*a;o.width=n*c,o.height=r*c;for(let o=0;o<r;o++)for(let a=0;a<n;a++)v.fillStyle="hex"===t?"#"+e[o][a]:"rgba("+e[o][a]+")",v.fillRect(a*c,o*c,c,c);localStorage.setItem("imgData",S.toDataURL())}function x(e,t){v.clearRect(0,0,S.width,S.height);const a=""===l.value?1:l.value,n=e||drawing.width,r=e||drawing.height,c=1*a;o.width=n*c,o.height=r*c,drawing=new Image,drawing.setAttribute("crossOrigin",""),drawing.src=t||"./data/image.png",drawing.classList.add("trueSize"),drawing.onload=()=>{v.drawImage(drawing,0,0)},localStorage.setItem("imgData",drawing.src)}function R(e){alert("Something went wrong: "+e)}function M(e){e==k?(w=q,q="red",f.style.background=q,g.style.background=w):e==h?(w=q,q="blue",f.style.background=q,g.style.background=w):e==q?(w=q,f.style.background=q,g.style.background=w):(w=q=w,f.style.background=q,g.style.background=w),localStorage.setItem("prevColorState",w),localStorage.setItem("currentColorState",q),v.fillStyle=q}o.addEventListener("mousedown",(function(){!0})),o.addEventListener("mouseup",(function(){!1})),f.style.background=q;let O=localStorage.getItem("imgData")||null;if(null!==O){let e=new Image;e.src=O,e.onload=()=>{v.drawImage(e,0,0,512,512)}}function C(){const e=10*(""===l.value?1:l.value);null!=I&&(I.style.background="#ffffff"),(I=s).style.background="rgba(180, 149, 255, 0.5)";for(let t=0;t<S.height;t++)for(let o=0;o<S.width;o++)v.fillStyle=q,v.fillRect(o*e,t*e,e,e);localStorage.setItem("imgData",S.toDataURL())}m.addEventListener("click",()=>{j("https://raw.githubusercontent.com/AntonChanin/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json",(e,t)=>{e?R(e):E(t,"hex")})}),b.addEventListener("click",()=>{j("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json",(e,t)=>{e?R(e):E(t,"rgba")})}),y.addEventListener("click",()=>{x(256)}),["#current-color","#prev-color","#red","#blue","#choose-color","#transform","#pencil","#small","#medium","#big"].map(e=>{!function(e){document.querySelector(e).onmousedown=()=>{null!=I&&(I.style.background="#ffffff"),(I=document.querySelector(e)).style.background="rgba(180, 149, 255, 0.5)",f.style.background=q}}(e)}),S.onmousedown=e=>{S.onmousemove=e=>{if(D){let t=4*(Math.floor(e.offsetY)*S.width+Math.floor(e.offsetX)),o=v.getImageData(0,0,S.width,S.height),a=o.data[t],n=o.data[t+1],r=o.data[t+2],l=o.data[t+3];D=!1,w=q,q="rgba("+a+","+n+","+r+","+l+")",f.style.background=q,g.style.background=w}else{I=i,localStorage.setItem("imgData",S.toDataURL());let t=e.offsetX,o=e.offsetY;v.fillRect(t-5,o-5,10,10),v.fillStyle=q,v.fill()}},S.onmouseup=()=>{S.onmousemove=null}},s.onmousedown=()=>{const e=10*(""===l.value?1:l.value);null!=I&&(I.style.background="#ffffff"),(I=s).style.background="rgba(180, 149, 255, 0.5)";for(let t=0;t<S.height;t++)for(let o=0;o<S.width;o++)v.fillStyle=q,v.fillRect(o*e,t*e,e,e);localStorage.setItem("imgData",S.toDataURL())},d.onmousedown=()=>{D=!0,null!=I&&(I.style.background="#ffffff"),(I=d).style.background="rgba(180, 149, 255, 0.5)",f.style.background=q},window.onkeyup=e=>{switch(e.key){case"B":null!=I&&(I.style.background="#ffffff"),(I=s).style.background="rgba(180, 149, 255, 0.5)",C(),D=!1;break;case"P":null!=I&&(I.style.background="#ffffff"),(I=i).style.background="rgba(180, 149, 255, 0.5)",D=!1;break;case"C":null!=I&&(I.style.background="#ffffff"),(I=d).style.background="rgba(180, 149, 255, 0.5)",D=!0;break;case"b":null!=I&&(I.style.background="#ffffff"),(I=s).style.background="rgba(180, 149, 255, 0.5)",C(),D=!1;break;case"p":null!=I&&(I.style.background="#ffffff"),(I=i).style.background="rgba(180, 149, 255, 0.5)",D=!1;break;case"c":null!=I&&(I.style.background="#ffffff"),(I=d).style.background="rgba(180, 149, 255, 0.5)",D=!0}},document.addEventListener("DOMContentLoaded",()=>{c.addEventListener("click",()=>{!async function(){let e=r.value;""!==e&&(p=p.replace(L,e),L=e);await fetch(p).then(e=>e.json()).then(e=>{x(256,e.urls.small)})}()}),k.addEventListener("click",()=>{M(k)}),h.addEventListener("click",()=>{M(h)}),f.addEventListener("click",()=>{M(q)}),g.addEventListener("click",()=>{M(w)}),u.addEventListener("click",()=>{!function(){for(var e=v.getImageData(0,0,S.width,S.height),t=e.data,o=0;o<t.length;o+=4){var a=.2126*t[o]+.7152*t[o+1]+.0722*t[o+2];t[o]=t[o+1]=t[o+2]=a}v.putImageData(e,0,0),localStorage.setItem("imgData",S.toDataURL())}()})})}]);