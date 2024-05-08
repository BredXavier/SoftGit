var pntV = 0, pntA = 0
var tempo = 180
var ativoT = false;
let cron = setInterval(() => { timer(); }, 0)
clearInterval(cron)
var PpntV = document.getElementById("pntV")
var PpntA = document.getElementById("pntA")
var Ptempo = document.getElementById("tempP")

//Incrementa 1 Ponto ao Vermelho
function AuVerm(){
    pntV++
    if(pntV <= 9){
        PpntV.innerText = `0${pntV}`
    }else{
        PpntV.innerText = `${pntV}`
    }
}

//Decrementa 1 Ponto ao Vermelho
function DcVerm(){
    if(pntV > 0){
        pntV--
    }
    if(pntV <= 9){
        PpntV.innerText = `0${pntV}`
    }else{
        PpntV.innerText = `${pntV}`
    }
}

//Incrementa 1 Ponto ao Azul
function AuAzul(){
    pntA++
    if(pntA <= 9){
        PpntA.innerText = `0${pntA}`
    }else{
        PpntA.innerText = `${pntA}`
    }
}

//Decrementa 1 Ponto ao Azul
function DcAzul(){
    if(pntA > 0){
        pntA--
    }
    if(pntA <= 9){
        PpntA.innerText = `0${pntA}`
    }else{
        PpntA.innerText = `${pntA}`
    }
}

//Altera o cursor para o Pointer
function Cponto(objeto){
    objeto.style.cursor = "pointer";
}

//Função de Start do timer do cronometro
function start() {
    if(ativoT == false){
        cron = setInterval(() => { timer(); }, 1000)
        ativoT = true

    }else{
        pause();
    }
}

//Função de Pause do timer do cronometro
function pause(){
    clearInterval(cron)
    ativoT = false
}

//Função de decremento e atualização da label do tempo
function timer(){
    tempo--
    Ptempo.innerText = Ttexto(tempo);
    if(tempo == 0){
        clearInterval(cron)
    }
}

//Converte o tempo de Segundos para o formato MM:SS em texto
function Ttexto(ttemp){
    var minu = parseInt(ttemp/60);
    var sec = ttemp - (minu*60);
    return sec < 10? `0${minu}:0${sec}`:`0${minu}:${sec}`
}

//Chama um prompt para alteração dos textos
function altN(objeto){
    objeto.innerText = window.prompt("Digite o texto:",objeto.innerText).toUpperCase()
}

//Chama um prompt para alterar o tempo
function altT(){
    var aux = parseInt(window.prompt("Digite o novo tempo em segundos:"))
    tempo = aux > 0 ? aux : 180
    Ptempo.innerText = Ttexto(tempo)
}

