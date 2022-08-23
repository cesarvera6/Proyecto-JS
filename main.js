
let btn_sumar = document.querySelector('#btn-sumar');
let btn_restar = document.querySelector('#btn-restar');
let btn_multiplicar = document.querySelector('#btn-multiplicar');
let btn_dividir = document.querySelector('#btn-dividir');
let btn_limpiar = document.querySelector('#limpiar');

let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let impri = document.querySelector('.comunidad');

btn_sumar.addEventListener('click',sumar); 
btn_restar.addEventListener('click',restar);
btn_multiplicar.addEventListener('click',multiplicar);
btn_dividir.addEventListener('click',dividir);
btn_limpiar.addEventListener('submit',limpiar);


function sumar(e){
    if(num1.value.length == 0 && num2.value.length == 0){
        impri.innerHTML="";
        impri.innerHTML = "Ingrese Numeros";
    } else{
        e.preventDefault();
        impri.innerHTML = "";
        let suma = parseInt(num1.value)+ parseInt( num2.value);
        impri.append(suma); 
    }
}
function restar(event){
    if(num1.value.length == 0 && num2.value.length == 0){
        impri.innerHTML = "Ingrese Numeros";
    }else{
        event.preventDefault();
        impri.innerHTML = "";
        let restar = parseInt(num1.value) - parseInt( num2.value);
        impri.append(restar);
    } 
}
function multiplicar(event){
    if(num1.value.length == 0 && num2.value.length == 0){
        impri.innerHTML = "Ingrese Numeros";
    } else{
        event.preventDefault();
        impri.innerHTML = "";
        let multiplicar = parseInt(num1.value)* parseInt( num2.value);
        impri.append(multiplicar);
    }
}
function dividir(event){
    if(num1.value.length == 0 && num2.value.length == 0){
        impri.innerHTML = "Ingrese Numeros";
    } else{
        event.preventDefault();
        impri.innerHTML = "";
        let dividir =parseInt(num1.value)/ parseInt( num2.value);
        let divi =dividir.toFixed(2);
        impri.append(divi);
    }

}
function limpiar(event){
    event.preventDefault();
    num1.value ="";
    num2.value = "";
    impri.innerHTML = "";
}

