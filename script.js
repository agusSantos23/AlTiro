
//inicalizar el juego
function start(){
    const plano = document.getElementById("plano")
    const puntuacion = document.getElementById("puntuacion")
    const derrota = document.getElementById("derrota")
    const btnStar = document.getElementById("Start")
    const ronda = document.getElementById("ronda")
    const animal = document.querySelectorAll(".animal")

    //saber cuantos gallos hay en pantalla
    let animalesVivos = 0
    //saber cuantos se han mostrado
    let animalesCreados = 0
    //numero de la ronda
    let rondaNumero = 0

    
    //Eliminar los gallos de la partida anterior
    animal.forEach(animal =>{
        animal.remove()
    })
    
    //quitar el titulo de derrota
    derrota.classList = "ocultarperder"
    //resetear la puntuacion
    puntuacion.textContent = "0"
    
    //desactiva el empezar la partida
    btnStar.style.display = "none"
    
    



    
    
    
    const intervalo1 = setInterval(() => {
        
        if (animalesVivos < 4 ) {
                
            const nuevaTortuga = new Tortuga("Tortuga " + animalesCreados);
            const tortugaViva = nuevaTortuga.vida()
                
            tortugaViva.addEventListener("click", () => {
                nuevaTortuga.muerte(puntuacion)
                animalesVivos--
            });
                
            plano.appendChild(tortugaViva)
            animalesVivos++
            animalesCreados++
                
        } else {
                            
            clearInterval(intervalo1)
            derrota.classList.remove("ocultarperder")
            btnStar.style.display = "inline"
            
        }
    }, 800)


    const intervalo2 = setInterval(() => {
        
        if (animalesVivos < 4 ) {
                
            const nuevoGallo = new Gallo("Gallo " + animalesCreados);
            const galloVivo = nuevoGallo.vida()
                
            galloVivo.addEventListener("click", () => {
                nuevoGallo.muerte(puntuacion)
                animalesVivos--
            });
                
            plano.appendChild(galloVivo)
            animalesVivos++
            animalesCreados++
                
        } else {
                            
            clearInterval(intervalo2)
            derrota.classList.remove("ocultarperder")
            btnStar.style.display = "inline"
            
        }
    }, 500)

}





//el animal que aparece con 2 funciones
class Tortuga{
    constructor(id){
        this.id = id
    }

    vida() {
        const imgEtiqueta = document.createElement("div");
        
        imgEtiqueta.id = this.id
        imgEtiqueta.classList = "animal tortuga"

         

        imgEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        imgEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return imgEtiqueta
    }

    muerte(puntuacion) {
        const tortugaElemento = document.querySelector(`[id="${this.id}"]`);
        if (tortugaElemento) {
            tortugaElemento.parentNode.removeChild(tortugaElemento)

            let numero = parseInt(puntuacion.textContent)
            numero++
            puntuacion.textContent = numero
        }
    }
}

class Gallo{
    constructor(id){
        this.id = id
    }

    vida() {
        const imgEtiqueta = document.createElement("div");
        
        imgEtiqueta.id = this.id
        imgEtiqueta.classList = "animal gallo"

         

        imgEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        imgEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return imgEtiqueta
    }

    muerte(puntuacion) {
        const galloElemento = document.querySelector(`[id="${this.id}"]`);
        if (galloElemento) {
            galloElemento.parentNode.removeChild(galloElemento)

            let numero = parseInt(puntuacion.textContent)
            numero++
            puntuacion.textContent = numero
        }
    }
}



