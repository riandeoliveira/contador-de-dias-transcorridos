 // Função que redefine os valores.
 function redefinir() {
    location.reload()
}

// Função que calcula as datas e gera um resultado em dias transcorridos.
function calcular() {
    var dataI = document.getElementById("dataI").value
    var dataF = document.getElementById("dataF").value
    dataI = new Date(dataI)
    dataF = new Date(dataF)
    var dias = (dataF - dataI) / (1000 * 3600 * 24)
    
    if (isNaN(dias) || dataI > dataF) {
        alert("Digite uma data válida!")
    }
    else {
        document.getElementById("dias").value = dias
    }
}

// Função que inverte as datas inseridas, ex: a primeira data se torna a segunda e vice-versa.
function troca() {
    var dataI = document.getElementById("dataI").value
    var dataF = document.getElementById("dataF").value
    document.getElementById("dataI").value = dataF
    document.getElementById("dataF").value = dataI
}