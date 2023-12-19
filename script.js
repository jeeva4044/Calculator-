let  runningtotal=0;
let buffer="0";
let previousoperation;

const screen =document.querySelector('.screen');

function btnClick(value){
    if(isNaN(value)){
        handlesymbol(value);
   
     }else{
        handlenumber(value);
     }
     screen.innerText=buffer;
     }

     function handlesymbol(symbol){
        switch(symbol){
            case'C':
              buffer='0';
              runningtotal=0;
              break;
            case '=':
                if(previousoperation ===null){
                    return
                }  
                flushoperation(parseInt(buffer));
                previousoperation = null;
                buffer = runningtotal;
                runningtotal=0;
                break;
            case '←':
                if(buffer.length ===1){
                    buffer ='0';
                }else{
                    buffer = buffer.substring(0,buffer.length - 1);
                }   
                break;
            case '+':
            case '−':
            case '÷':                 
            case '×':
                 handleMath(symbol);
                 break;
            }
     }

     function handleMath(symbol){
        if(buffer ==='0'){
            return;
        
        }
        const intbuffer = parseInt(buffer);
        if(runningtotal === 0){
            runningtotal = intbuffer;
        }else{
            flushoperation (intbuffer);
        }
         previousoperation = symbol;
         buffer ='0';

         }

         function flushoperation(intbuffer){
            if(previousoperation ==='+'){
                runningtotal += intbuffer;
               }else if(previousoperation ==='−'){
                runningtotal -= intbuffer;
               }else if(previousoperation ==='×'){
                    runningtotal *= intbuffer;
               }else if(previousoperation ==='÷')  {
                runningtotal /= intbuffer;
               }  
               }

               function handlenumber(numberString){
                if(buffer ==='0'){
                    buffer = numberString;
                }else{
                    buffer += numberString;
                }
                }
               
                function init() {
                    document.querySelector('.calc-btns').addEventListener('click', function (event){
                        btnClick(event.target.innerText);
                    })
                }
                init();
           
                
                