function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img style="border-radius: 100%;" src="_imagens/_manha.png">'
        document.body.style.background = '#995f97'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img style="border-radius: 100%;" src="_imagens/_tarde.png">'
        document.body.style.background = '#e05801'
    } else {
        img.innerHTML = '<img style="border-radius: 100%;" src="_imagens/_noite.png" >'

        document.body.style.background = '#1c3a63'
    }
}