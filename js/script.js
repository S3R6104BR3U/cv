let btnTrocarTema = document.getElementById("mudarTema")
let paragrafos = document.getElementsByTagName("p")
let bs = document.getElementsByTagName("b")
let linkCss = document.getElementById('linkCss')
let linkCertificados = document.getElementsByClassName('link-certificado')

let temaClaro = true

function mudarTema() {

    for (let i = 0; i < paragrafos.length - 2; i++) {
        let paragrafo = paragrafos[i];
        paragrafo.style.color = "white"
    }

    for (let i = 0; i < bs.length; i++) {
        let b = bs[i];
        b.style.color = "white"
    }

    for (let i = 0; i < linkCertificados.length; i++) {
        let link = linkCertificados[i];
        link.style.color = '#f1f1f1'
    }

    btnTrocarTema.style.borderColor = 'black'
    btnTrocarTema.style.color = 'black'

    if (temaClaro === true) {
        for (let i = 0; i < paragrafos.length - 2; i++) {
            let paragrafo = paragrafos[i];
            paragrafo.style.color = "white"
        }
    
        for (let i = 0; i < bs.length; i++) {
            let b = bs[i];
            b.style.color = "white"
        }
    
        for (let i = 0; i < linkCertificados.length; i++) {
            let link = linkCertificados[i];
            link.style.color = '#f1f1f1'
        }
    
        btnTrocarTema.style.borderColor = 'black'
        btnTrocarTema.style.color = 'black'
        linkCss.href = "css/style.css"
        temaClaro = false
    }

    else {
        location.reload()
    }

    
}

btnTrocarTema.addEventListener("click", mudarTema)