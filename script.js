
var mainbox = document.querySelector('.main-box');


var IO_EntradasDigitais = document.querySelector('#IO_EntradasDigitais_Titulo');
var div1 = document.querySelector('#IO_EntradasDigitais');

var IO_SaidasDigitais = document.querySelector('#IO_SaidasDigitais_Titulo');
var div2 = document.querySelector('#IO_SaidasDigitais');

var IO_EntradasAnalogicas = document.querySelector('#IO_EntradasAnalogicas_Titulo');
var div3 = document.querySelector('#IO_EntradasAnalogicas');

var IO_SaidasAnalogicas = document.querySelector('#IO_SaidasAnalogicas_Titulo');
var div4 = document.querySelector('#IO_SaidasAnalogicas');

IO_EntradasDigitais.addEventListener('click', function () {
    if (div1.style.display === 'block') {
        div1.style.display = 'none';
        mainbox.style.top = '50%'
    } else {
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        mainbox.style.top = '65%'
    }
});


IO_SaidasDigitais.addEventListener('click', function () {
    if (div2.style.display === 'block') {
        div2.style.display = 'none';
        mainbox.style.top = '50%'
    } else {
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        div4.style.display = 'none';
        mainbox.style.top = '65%'
    }
});



IO_EntradasAnalogicas.addEventListener('click', function () {
    if (div3.style.display === 'block') {
        div3.style.display = 'none';
        mainbox.style.top = '50%'
    } else {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
        div4.style.display = 'none';
        mainbox.style.top = '65%'
    }
});



IO_SaidasAnalogicas.addEventListener('click', function () {
    if (div4.style.display === 'block') {
        div4.style.display = 'none';
        mainbox.style.top = '50%'
    } else {
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'block';
        mainbox.style.top = '65%'
    }
});
