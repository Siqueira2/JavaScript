function contar(){
    var num = document.getElementById('in')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.getElementById('res')
    if(num.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let n = Number(num.value)
        let f = Number(end.value)
        let s = Number(step.value)
        if(n < f){ 
            // contagem crescente
            for(let i = n; i <= f; i += s){
                res.innerHTML += `${i}...\u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //contagem regressiva
            for(let i = n; i >= f; i -= s){
                res.innerHTML += `${i}...\u{1F3C1}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}