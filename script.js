
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
    let rondaNumero = 1

    
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
    
    



    
   

    const intervalo = setInterval(() => {
            
        if(puntuacion.textContent >=24){
    
            clearInterval(intervalo)
            rondaNumero++
            ronda.textContent = rondaNumero
            activarIntervalo2()
        } 


        if (animalesVivos < 5 ) {
                    
            const nuevaTortuga = new Tortuga("Tortuga " + animalesCreados);
            const tortugaViva = nuevaTortuga.vida()
                    
            tortugaViva.addEventListener("click", () => {
                nuevaTortuga.muerte(puntuacion)
                animalesVivos--
            });
                    
            
            plano.appendChild(tortugaViva)
            animalesVivos++
            animalesCreados++
            
        }else {    
            clearInterval(intervalo)

            derrota.classList.remove("ocultarperder")
            btnStar.style.display = "inline"
            animal.forEach(animal =>{
                animal.remove()
            })
        }
            
            
    }, 800)
    
    function activarIntervalo2(){

        const intervalo2 = setInterval(() => {
        
            if(puntuacion.textContent >= 74){
        
                clearInterval(intervalo2)
                rondaNumero++
                ronda.textContent = rondaNumero
                activarIntervalo3()
            } 
    
            if (animalesVivos < 5 ) {
                    
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
                                
                clearInterval(intervalo)
                derrota.classList.remove("ocultarperder")
                btnStar.style.display = "inline"
                
            }
        }, 500)
        
    }
    
    function activarIntervalo3(){

        const intervalo3 = setInterval(() => {
        
            if(puntuacion.textContent >= 149){
        
                clearInterval(intervalo3)
                
            } 
    
            if (animalesVivos < 5 ) {
                    
                const nuevoGallo = new Conejo("Conejo " + animalesCreados);
                const galloVivo = nuevoGallo.vida()
                    
                galloVivo.addEventListener("click", () => {
                    nuevoGallo.muerte(puntuacion)
                    animalesVivos--
                });
                    
                plano.appendChild(galloVivo)
                animalesVivos++
                animalesCreados++
                    
            } else {
                                
                clearInterval(intervalo)
                derrota.classList.remove("ocultarperder")
                btnStar.style.display = "inline"
                
            }
        }, 350)
        
    }

}



//el animal que aparece con 2 funciones: vida y muerte
class Tortuga{
    constructor(id){
        this.id = id
    }

    vida() {
        const divEtiqueta = document.createElement("div");
        
        divEtiqueta.id = this.id
        divEtiqueta.classList = "animal tortuga"
        

        divEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return divEtiqueta
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
        const divEtiqueta = document.createElement("div");
        
        divEtiqueta.id = this.id
        divEtiqueta.classList = "animal gallo"

         

        divEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return divEtiqueta
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

class Conejo{
    constructor(id){
        this.id = id
    }

    vida() {
        const divEtiqueta = document.createElement("div");
        
        divEtiqueta.id = this.id
        divEtiqueta.classList = "animal conejo"

         
        divEtiqueta.style.left = Math.floor(Math.random()*600).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*600).toString() + "px"

        return divEtiqueta
    }

    muerte(puntuacion) {
        const conejoElemento = document.querySelector(`[id="${this.id}"]`);
        if (conejoElemento) {
            conejoElemento.parentNode.removeChild(conejoElemento)

            let numero = parseInt(puntuacion.textContent)
            numero++
            puntuacion.textContent = numero
        }
    }
}


