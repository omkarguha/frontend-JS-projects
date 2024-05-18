const input=document.getElementById('input');
const sizes=document.getElementById('size');
const gen=document.getElementById('generate');
const down=document.getElementById('download');
const qr=document.getElementById('qr');

let size=sizes.value;
gen.addEventListener('click',(e)=>{
    // e.preventDefault();   // prevent any anchor tag from loading
    genQR();
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    genQR();
});
down.addEventListener('click',(e)=>{
    let img=document.querySelector('#qr img');
    if(img==null){
        e.preventDefault();
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error');
        },1000);
    }
    else{
        let imgArr=img.getAttribute('src');
        down.setAttribute("href",imgArr);
        down.setAttribute("download","QR_Code.png");
        down.click();
    }

});

function genQR(){
    if(input.value.length > 0){
        qr.style.display="block";
        generateQR();
    }
    else{
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error');
        },1000);

    }

}
function generateQR(){
    qr.innerHTML = "";
        new QRCode(qr,{
            text:input.value,
            height:size,
            width:size,
            colorLight:"#fff",
            colorDark:"#000",
        });
}
