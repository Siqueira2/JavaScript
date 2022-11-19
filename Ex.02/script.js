function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    //bebe
                    img.setAttribute('src', 'bebehomem.png')
                } else if (idade < 21 ){
                    //adolescente
                    img.setAttribute('src','adolescentehomem.png')
                }
                else if (idade < 50 ){
                    //adulto
                    img.setAttribute('src', 'adultohomem.png')
                } else{
                    //idoso
                    img.setAttribute('src', 'idosohomem.png')
                }
        } else if(fsex[1].checked) {
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    //bebe
                    img.setAttribute('src', 'bebemulher.png')
                } else if (idade < 21 ){
                    //adolescente
                    img.setAttribute('src', 'adolescentemulher.png')
                }
                else if (idade < 50 ){
                    //adulto
                    img.setAttribute('src', 'adultamulher.png')
                } else{
                    //idoso
                    img.setAttribute('src', 'idosamulher.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} e ${idade} anos`
        res.appendChild(img)
    }
}