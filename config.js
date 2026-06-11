function abrirConfig(){
    document.getElementById("configPopup").style.display = "flex";
}

function fecharConfig(){
    document.getElementById("configPopup").style.display = "none";
}

function toggleTema(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema", "dark");
    }else{
        localStorage.setItem("tema", "light");
    }

}

function toggleAnimacoes(){

    document.body.classList.toggle("sem-animacoes");

    if(document.body.classList.contains("sem-animacoes")){
        localStorage.setItem("animacoes", "off");
    }else{
        localStorage.setItem("animacoes", "on");
    }

}

window.addEventListener("DOMContentLoaded", () => {

    const temaSalvo = localStorage.getItem("tema");
    const animacoesSalvas = localStorage.getItem("animacoes");

    const temaSwitch = document.getElementById("temaSwitch");
    const animacoesSwitch = document.getElementById("animacoesSwitch");

    if(temaSalvo === "dark"){
        document.body.classList.add("dark");

        if(temaSwitch){
            temaSwitch.checked = true;
        }
    }

    if(animacoesSalvas === "off"){

        document.body.classList.add("sem-animacoes");

        if(animacoesSwitch){
            animacoesSwitch.checked = false;
        }

    }else{

        if(animacoesSwitch){
            animacoesSwitch.checked = true;
        }

    }

});