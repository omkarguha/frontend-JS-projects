let input = document.getElementById('input');
let size = document.getElementById('size');
let img = document.getElementById('img');
let gen = document.getElementById('gen');
const down = document.getElementById('down');

gen.addEventListener('click',()=>{
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size="+size.value+"&data="+input.value;
})

down.addEventListener('click',(e)=>{
    e.preventDefault();
    saveAs(img.src, "QR");
});
