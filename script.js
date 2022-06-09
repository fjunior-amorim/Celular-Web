//========== botão power ==================
const btnIcon = document.querySelector(".icon-power");
btnIcon.addEventListener('click', function() {
    const tela = document.querySelector("#tela");
    if(tela.style.display === "block"){
         tela.style.display = "none";
    }else {
        tela.style.display = "block";
    }
});
//================== hora =======================
function horario(){
const data = new Date();
const hora = data.getHours();
let min = data.getMinutes();
let stgmin = min.toString();

if(stgmin.length === 1) min = 0 + stgmin;
const horaCel = document.querySelector("#hora");
horaCel.innerHTML = hora + ":" + min;
}
setInterval(horario, 1000);
//=========================================