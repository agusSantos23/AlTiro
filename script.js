function start(){
    const plano = document.getElementById("plano")
    const puntuacion = document.getElementById("puntuacion")
    const ronda = document.getElementById("numeroRonda")

    let patosVivos = 0
    
    
    
    
    const intervalo = setInterval(() => {
        
        

        if (patosVivos < 4 ) {

            const nuevoPato = new Pato("Pato " + patosVivos);
            const patoVivo = nuevoPato.vida()

            patoVivo.addEventListener("click", () => {
                nuevoPato.muerte(puntuacion)
                patosVivos--
            });

            plano.appendChild(patoVivo)
            patosVivos++

        } else {
            
            clearInterval(intervalo)
        }
        

    }, 500)
    
    
}






class Pato{
    constructor(id){
        this.id = id
    }

    vida() {
        const imgEtiqueta = document.createElement("img");
        imgEtiqueta.src = "img/pato.png"
        imgEtiqueta.alt = this.id
        imgEtiqueta.classList = "pato"

         

        imgEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        imgEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return imgEtiqueta
    }

    muerte(puntuacion) {
        const patoElemento = document.querySelector(`[alt="${this.id}"]`);
        if (patoElemento) {
            patoElemento.parentNode.removeChild(patoElemento)

            let numero = parseInt(puntuacion.textContent)
            numero++
            puntuacion.textContent = numero
        }
    }
}

