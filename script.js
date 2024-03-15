const dvGlobal = document.getElementById('global')
var edNota = document.getElementById('txtAdd')
let cont = 1;

function Add_Nota(){
    dvGlobal.innerHTML = `<p id="cabe">Nota ${cont}:</p><div id="dvnota" class="box"><p id="pnota"> ${edNota.value.replace(/<[^>]*>/g, '')} ` + `</p></div></br>` + dvGlobal.innerHTML 
    cont++
}