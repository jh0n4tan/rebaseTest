'use strict'
const btnsend = document.querySelector('#btnsend');
const lblTexto = document.querySelector('#lblsend');

btnsend.addEventListener("click",()=>{ 
    alert(`hi ${lblTexto.value}`);
});