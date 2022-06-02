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
//=========================================