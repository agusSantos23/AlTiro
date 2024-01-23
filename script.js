let juego 


//inicalizar el juego
function start(){
    const plano = document.getElementById("plano")
    const puntuacion = document.getElementById("puntuacion")
    const derrota = document.getElementById("derrota")
    const btnStar = document.getElementById("Start")
    const ronda = document.getElementById("ronda")
    const animal = document.querySelectorAll(".animal")

    juego = true;

    resetGame()
  

    const intervalo = setInterval(() => {
            
        if(animalesCreados >=25){
    
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

            gameOver()
        }
            
            
    }, 800)
    
    function activarIntervalo2(){

        const intervalo2 = setInterval(() => {
        
            if(animalesCreados >= 75){
        
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
                                
                clearInterval(intervalo2)
                gameOver()
                
            }
        }, 500)
        
    }
    
    function activarIntervalo3(){

        const intervalo3 = setInterval(() => {
        
            if(animalesCreados >= 150){
        
                clearInterval(intervalo3)
                
                win()
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
                                
                clearInterval(intervalo3)
                gameOver()
                
            }
        }, 350)
        
    }

    function resetGame() {
        // Eliminar los animales de la partida anterior
        animal.forEach(animal => {
            animal.remove()
        });
    
        // Ocultar el mensaje de derrota
        derrota.classList.add("ocultarperder")
    
        // Reiniciar la puntuación
        puntuacion.textContent = "0"
    
        // Desactivar el botón de inicio
        btnStar.style.display = "none"
    
        // Restablecer variables de control
        animalesVivos = 0
        animalesCreados = 0
        rondaNumero = 1
        ronda.textContent = rondaNumero


        

    }

    function gameOver() {
        
        juego = false;

        derrota.classList.remove("ocultarperder")
        btnStar.style.display = "inline"
        
    }

    function win(){
        animal.forEach(animalElement => {
            
            animalElement.parentNode.removeChild(animalElement)
        });
    
        derrota.textContent = "VICTORIA"
        derrota.style.color = "#ffe344"
        derrota.classList.remove("ocultarperder")
        btnStar.style.display = "inline"
        btnStar.style.backgroundColor = "#ffe344"
        ronda.style.color = "#ffe344"
        puntuacion.style.color = "#ffe344"
    }
}



//el animal que aparece con 2 funciones: vida y muerte
class Tortuga{
    constructor(id){
        this.id = id
    }

    vida() {
        const divEtiqueta = document.createElement("div")
        
        divEtiqueta.id = this.id
        divEtiqueta.classList = "animal tortuga"
        
        const anchoPantalla = window.innerWidth
        let ancho 

        if(anchoPantalla > 750){
            ancho = 500
        }else{
            ancho = 300
        }

        divEtiqueta.style.left = Math.floor(Math.random()*ancho).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*ancho).toString() + "px"

        return divEtiqueta
    }

    muerte(puntuacion) {
        const tortugaElemento = document.querySelector(`[id="${this.id}"]`)
        if (tortugaElemento) {
            tortugaElemento.parentNode.removeChild(tortugaElemento)

            let numero = parseInt(puntuacion.textContent)
            if(juego){
                numero++
            }
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

        const anchoPantalla = window.innerWidth
        let ancho 

        if(anchoPantalla > 750){
            ancho = 500
        }else{
            ancho = 300
        }

        divEtiqueta.style.left = Math.floor(Math.random()*ancho).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*ancho).toString() + "px"

        return divEtiqueta
    }

    muerte(puntuacion) {
        const galloElemento = document.querySelector(`[id="${this.id}"]`);
        if (galloElemento) {
            galloElemento.parentNode.removeChild(galloElemento)

            let numero = parseInt(puntuacion.textContent)
            if(juego){
                numero++
            }
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

        const anchoPantalla = window.innerWidth
        let ancho 

        if(anchoPantalla > 750){
            ancho = 500
        }else{
            ancho = 200
        }

        divEtiqueta.style.left = Math.floor(Math.random()*ancho).toString() + "px"
        divEtiqueta.style.bottom = Math.floor(Math.random()*ancho).toString() + "px"

        return divEtiqueta
    }

    muerte(puntuacion) {
        const conejoElemento = document.querySelector(`[id="${this.id}"]`);
        if (conejoElemento) {
            conejoElemento.parentNode.removeChild(conejoElemento)

            let numero = parseInt(puntuacion.textContent)
            if(juego){
                numero++
            }
            puntuacion.textContent = numero
        }
    }
}


