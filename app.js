var btnTranslate= document.querySelector("#btn-translator");
var txtInput= document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


function clickHandler()
{
    outputDiv.innerText="sjsjsjsjjs " + txtInput.value;
}
btnTranslate.addEventListener("click",clickHandler);