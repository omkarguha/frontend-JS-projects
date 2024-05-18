let input=document.getElementById("input");
let buttons=document.querySelectorAll("button");
let arr=Array.from(buttons);
let string="";
// function smallFont(string) {
//     if(string.length>9){
//         input.style.fontSize=="medium";
//     }
//     else{
//         input.style.fontSize=="xx-large";
//     }
// }
arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=='='){
            string=eval(string);
            // smallFont(string);
            input.value=string;
        }
        else if(e.target.innerText=='AC'){
            string="";
            // smallFont(string);
            input.value=string;
        }
        else if(e.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
            // smallFont(string);
            input.value=string;
        }
        else{
            string+=e.target.innerText;
            // smallFont(string);
            input.value=string;
        }
    })
})
// alert(input.style.fontSize);