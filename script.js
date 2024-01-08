function start(){
    const plano = document.getElementById("plano")
    const puntuacion = document.getElementById("puntuacion")

    
    for(let i = 0; i < 5; i++){

        setTimeout(() => {
            
            const nuevoPato = new Pato("Pato " + i)
            const patoVivo = nuevoPato.vida()
            patoVivo.addEventListener("click",()=>{

                nuevoPato.muerte(puntuacion);

            })
            plano.appendChild(patoVivo)


        }, 1000 * (i + 1));

    }
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

