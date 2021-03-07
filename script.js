
 var buttons= document.getElementsByClassName("button");
 var display = document.getElementById("display");
 var operand1 = 0;
 var operand2 = null;
 var operator = null; 
 for(var i = 0;i<buttons.length;i++){
     buttons[i].addEventListener('click'||'keypress',function(){
         var value=this.getAttribute('data-value');
         if(value == '++'){
            display.innerText *= -1;
         }
         else if(value=="00"){
             display.innerText = null;
         }
         else if(value== "equalto" ){
            display.innerText=eval(display.innerText);
        }
         else{
             display.innerText += value;
         }
     })
 }