let input = document.getElementById("input");
let sizeSlide = document.getElementById("sizeSlide");
let size = document.getElementById("size");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gen = document.getElementById("gen");
let copyIcon = document.getElementById("copyIcon");

size.textContent = sizeSlide.value;
sizeSlide.addEventListener('input',()=>{
    size.textContent = sizeSlide.value;
});

let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
let nums = "0123456789";
let sym = "~!@#$%^&*";

gen.addEventListener('click',()=>{

    input.value = gntPassword();
});


function gntPassword(){
    let password = "";
    let allChar ="";
    allChar += lowercase.checked ? lowerAlpha : "";
    allChar += uppercase.checked ? upperAlpha : "";
    allChar += numbers.checked ? nums : "";
    allChar += symbols.checked ? sym : "";
    if(allChar =="" || allChar.length==0){
        return password;
    }
    let i=1;
    while(i<=sizeSlide.value){
        password+=allChar.charAt(Math.floor(Math.random()*allChar.length));
        i++;
    }
    return password;
}

copyIcon.addEventListener("click",()=>{
    if(input.value !="" || input.value.length>0){
        navigator.clipboard.writeText(input.value);
        copyIcon.innerText="check";
        copyIcon.title = "Password Copied";
        setTimeout(()=>{
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        },3000);
    }
})