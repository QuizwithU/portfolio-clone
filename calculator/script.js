let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';

for(item of buttons){
item.addEventListener("click",(e)=>{
buttontext =e.target.innerText;
// console.log('button text is', buttontext);
if (buttontext=='X') {
    buttontext ='*';
    screenvalue += buttontext
    screen.value = screenvalue;
}
else if (buttontext == 'C') {
    screenvalue = "";
    screen.value = screenvalue; 
}
else if (buttontext == 'CE') {
    screen.value=screenvalue.substr(0,screenvalue.length -1);
    screenvalue=screen.value;
}
else if (buttontext == '=') {
    screen.value = eval(screenvalue);
}
else{
    screenvalue += buttontext
    screen.value = screenvalue; 
}

})


}

