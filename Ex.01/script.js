function load(){
var msg = document.getElementById('msg')
var img = document.getElementById('image')
//var data = new Date()
var hora = data.getHours()
var hora = 18
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e7b960'
} else if(hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#ca795d'
} else {
    //BOA NOITE!
    img.src = 'fotonoite.png'
    document.body.style.background = '#001c39'
}
}