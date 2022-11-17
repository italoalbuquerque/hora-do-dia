function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    

    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >=0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background ='#b9846f'
    } else {
       img.src = 'imagens/noite.jpg'
       document.body.style.background ='#515154'
    }
}
