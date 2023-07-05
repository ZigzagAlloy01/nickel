const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonAlumnoJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const sectionMensajes = document.getElementById('resultado')
const incisoUno = document.getElementById('inciso-uno')
const incisoDos = document.getElementById('inciso-dos')
const incisoTres = document.getElementById('inciso-tres')
const incisoCuatro = document.getElementById('inciso-cuatro')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')
const contenedorPregunta = document.getElementById('pregunta')
const spanAlumnoJugador = document.getElementById('mascota-jugador')
const fotoEnemigo = document.getElementById('foto-enemigo')
const fotoAlumno = document.getElementById('foto-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let individuos = []
let preguntas = []
let respuestasFirst = []
let respuestasSecond = []
let respuestasThird = []
let respuestasFourth = []
let respuestasFifth = []
let respuestasSixth = []
let respuestasSeventh = []
let respuestasEight = []
let respuestasNinth = []
let respuestasTenth = []
let respuestasEleventh = []
let respuestasJugador = []
let opcionDeIndividuos
let inputIvan
let eleccion
let opcionDeNombreEnemigo
let inputIrvin
let inputBertha
let alumnoJugador
let alumnoObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonUno
let botonDos
let botonTres
let botonCuatro
let botones = []
let index = 0
let intervalo
let vidasJugador = 4
let vidasEnemigo = 5
let preguntaUno = "Son ejemplos de metales pesados:"
let preguntaDos = "¿Cuál es la estructura de la γ-alumina?"
let preguntaTres = "¿Para qué sirve la urea en la síntesis de boehmita?"
let preguntaCuatro = "¿Cómo se comporta el nitrato de aluminio?"
let preguntaCinco = "¿Cuál es la temperatura óptima para remover níquel con  γ -alumina?"
let preguntaSeis = "Un pH elevado, ¿qué cambio genera en la γ -alumina?"
let preguntaSiete = "¿Cómo ayuda la temperatura a la adsorción de níquel?"
let preguntaOcho = "¿Por qué en el artículo no se utilizaron concentraciones de níquel mayores a 500 mg/L?"
let preguntaNueve = "¿De qué tamaño se mostró la γ -alumina en el SEM?"
let preguntaDiez = "¿Qué pasa con la absorción de níquel con el tiempo?"

let respuestaUno = "1). Plomo, Cloro, Niquel, Cobre."
let respuestaDos = "2). Plomo, Cobalto, Selenio, Cobre."
let respuestaTres = "3). Mercurio, Selenio, Plomo, Cobre."
let respuestaCuatro = "4). Plomo, Cromo, Niquel, Cobre."
let respuestaCinco = "1). Octaédrica"
let respuestaSeis = "2). Hexagonal"
let respuestaSiete = "4). El doctor ha de saber"
let respuestaOcho = "3). Ortorrómbica"
let respuestaNueve = "1). Crea una micela"
let respuestaDiez = "2). Genera una atmósfera inerte"
let respuesta2Uno = "3). Aumenta el punto de fusión"
let respuesta2Dos = "4). Actua como base, sustrayendo hidrógenos"
let respuesta2Tres = "1). Como agente reductor"
let respuesta2Cuatro = "2). Como material cerámico"
let respuesta2Cinco = "3). Como sal orgánica"
let respuesta2Seis = "4). Como ácido de Lewis"
let respuesta2Siete = "1). 50°C"
let respuesta2Ocho = "2). 60°C"
let respuesta2Nueve = "3). 30°C"
let respuesta2Diez = "4). 40°C"
let respuesta3Uno = "1). Quién sabe"
let respuesta3Dos = "2). Incrementa el porcentaje de adsorción de niquel"
let respuesta3Tres = "3). Produce un cambio de fase"
let respuesta3Cuatro = "4). Genera un cambio de carga superficial"
let respuesta3Cinco = "1). Genera un cambio de carga superficial"
let respuesta3Seis = "2). Elimina impurezas"
let respuesta3Siete = "3). Aumenta el área adsorbente efectiva"
let respuesta3Ocho = "4). Aumenta la energía cinética de los iones"
let respuesta3Nueve = "1). Porque cambia el estado de oxidación"
let respuesta3Diez = "2). Porque el niquel podía lixiviar la superficie"
let respuesta4Uno = "3). Porque cambia la constante dieléctrica"
let respuesta4Dos = "4). Porque la superficie adsorbente se sobresatura"
let respuesta4Tres = "1). 10 - 25 nm"
let respuesta4Cuatro = "2). 5 - 10 nm"
let respuesta4Cinco = "3). 8 - 13 nm"
let respuesta4Seis = "4). 10 - 15 nm"
let respuesta4Siete = "1). Ocurre la formación de radicales libres"
let respuesta4Ocho = "2). Disminuye dramáticamente"
let respuesta4Nueve = "3). Incrementa indefinidamente"
let respuesta4Diez = "4). Alcanza un nivel constante"
let lienzo = mapa.getContext("2d")
let mapaBackground = new Image()
mapaBackground.src = './assets/ICB.jpg'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 680

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 500 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Alumno {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintar() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let ivan = new Alumno('Iván', './assets/ivan.png', 3, './assets/ivan.png')

let irvin = new Alumno('Irvin', './assets/irvin.png', 3, './assets/irvin.png')

let bertha = new Alumno('Bertha', './assets/bertha.png', 3, './assets/bertha.png')

let katya = new Alumno('Katya', './assets/katya.png', 3, './assets/katya.png')

let catalan = new Alumno('Catalán', './assets/catalan.png', 3, './assets/catalan.png')

let yobanny = new Alumno('Dr. Reyes', './assets/reyeslopez.png', 3, './assets/reyeslopez.png')

preguntas.push(preguntaUno, preguntaDos, preguntaTres, preguntaCuatro, preguntaCinco, preguntaSeis, preguntaSiete, preguntaOcho, preguntaNueve, preguntaDiez)
respuestasFirst.push(respuestaUno, respuestaDos, respuestaTres, respuestaCuatro)
respuestasSecond.push(respuestaCinco, respuestaSeis, respuestaSiete, respuestaOcho)
respuestasThird.push(respuestaNueve, respuestaDiez, respuesta2Uno, respuesta2Dos)
respuestasFourth.push(respuesta2Tres, respuesta2Cuatro, respuesta2Cinco, respuesta2Seis)
respuestasFifth.push(respuesta2Siete, respuesta2Ocho, respuesta2Nueve, respuesta2Diez)
respuestasSixth.push(respuesta3Uno, respuesta3Dos, respuesta3Tres, respuesta3Cuatro)
respuestasSeventh.push(respuesta3Cinco, respuesta3Seis, respuesta3Siete, respuesta3Ocho)
respuestasEight.push(respuesta3Nueve, respuesta3Diez, respuesta4Uno, respuesta4Dos)
respuestasNinth.push(respuesta4Tres, respuesta4Cuatro, respuesta4Cinco, respuesta4Seis)
respuestasTenth.push(respuesta4Siete, respuesta4Ocho, respuesta4Nueve, respuesta4Diez)
//respuestaOcho
//respuesta2Uno
//respuesta2Cuatro
//respuesta2Siete
//respuesta3Cuatro
//respuesta3Ocho
//respuesta4Uno
//respuesta4Cuatro
//respuesta4Siete
//respuestaCuatro

ivan.ataques.push(
    { nombre: ' 1️⃣', id: 'boton-uno' },
    { nombre: ' 2️⃣', id: 'boton-dos' },
    { nombre: ' 3️⃣', id: 'boton-tres' },
    { nombre: ' 4️⃣', id: 'boton-cuatro' },
)

irvin.ataques.push(
    { nombre: ' 1️⃣', id: 'boton-uno' },
    { nombre: ' 2️⃣', id: 'boton-dos' },
    { nombre: ' 3️⃣', id: 'boton-tres' },
    { nombre: ' 4️⃣', id: 'boton-cuatro' },
)

bertha.ataques.push(
    { nombre: ' 1️⃣', id: 'boton-uno' },
    { nombre: ' 2️⃣', id: 'boton-dos' },
    { nombre: ' 3️⃣', id: 'boton-tres' },
    { nombre: ' 4️⃣', id: 'boton-cuatro' },
)

individuos.push(ivan, irvin, bertha)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    individuos.forEach((individuo) => {
        opcionDeIndividuos = ` 
        <input type="radio" name="mascota" id=${individuo.nombre} />
        <label class="tarjeta-de-individuo" for=${individuo.nombre}>
            <p>${individuo.nombre}</p>
            <img src=${individuo.foto} alt=${individuo.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeIndividuos

     inputIvan = document.getElementById('Iván')
     inputIrvin = document.getElementById('Irvin')
     inputBertha = document.getElementById('Bertha')

    })
    
    botonAlumnoJugador.addEventListener('click', seleccionarAlumnoJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarAlumnoJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    if (inputIvan.checked) {
        spanAlumnoJugador.innerHTML = inputIvan.id
        alumnoJugador = inputIvan.id
    } else if (inputIrvin.checked) {
        spanAlumnoJugador.innerHTML = inputIrvin.id
        alumnoJugador = inputIrvin.id
    } else if (inputBertha.checked) {
        spanAlumnoJugador.innerHTML = inputBertha.id
        alumnoJugador = inputBertha.id
    } else {
        alert('Selecciona un alumno')
    }

    extraerAtaques(alumnoJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function extraerAtaques(alumnoJugador) {
    let ataques
    for (let i = 0; i < individuos.length; i++) {
        if (alumnoJugador === individuos[i].nombre) {
            ataques = individuos[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonUno = document.getElementById('boton-uno')
     botonDos = document.getElementById('boton-dos')
     botonTres = document.getElementById('boton-tres')
     botonCuatro = document.getElementById('boton-cuatro')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(a) {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.id === 'boton-uno') {
                a.unshift(0)
                console.log(a[0])
                eleccion = 0
                boton.style.background = '#112f58'
                //boton.disabled = true   
            } else if (e.target.id === 'boton-dos') {
                a.unshift(1)
                eleccion = 1
                console.log(a[0])
                boton.style.background = '#112f58'
                //boton.disabled = true  
            } else if (e.target.id === 'boton-tres') {
                a.unshift(2)
                eleccion = 2
                console.log(a[0])
                boton.style.background = '#112f58'
                //boton.disabled = true  
            } else if (e.target.id === 'boton-cuatro') {
                a.unshift(3)
                eleccion = 3
                console.log(a[0])
                boton.style.background = '#112f58'
                //boton.disabled = true  
            }
            console.log(a)
            preguntaAleatoria()
        });
    })
    
}

function preguntaAleatoria() {
    let ataqueAleatorio = aleatorio(0,preguntas.length -1)
    if (ataqueAleatorio == 1) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasSecond[0]
        incisoDos.innerHTML = respuestasSecond[1]
        incisoTres.innerHTML = respuestasSecond[2]
        incisoCuatro.innerHTML = respuestasSecond[3]
        combateRepetitivo(1, 3)
    } else if (ataqueAleatorio == 2) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasThird[0]
        incisoDos.innerHTML = respuestasThird[1]
        incisoTres.innerHTML = respuestasThird[2]
        incisoCuatro.innerHTML = respuestasThird[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 3) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasFourth[0]
        incisoDos.innerHTML = respuestasFourth[1]
        incisoTres.innerHTML = respuestasFourth[2]
        incisoCuatro.innerHTML = respuestasFourth[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 4) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasFifth[0]
        incisoDos.innerHTML = respuestasFifth[1]
        incisoTres.innerHTML = respuestasFifth[2]
        incisoCuatro.innerHTML = respuestasFifth[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 5) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasSixth[0]
        incisoDos.innerHTML = respuestasSixth[1]
        incisoTres.innerHTML = respuestasSixth[2]
        incisoCuatro.innerHTML = respuestasSixth[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 6) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasSeventh[0]
        incisoDos.innerHTML = respuestasSeventh[1]
        incisoTres.innerHTML = respuestasSeventh[2]
        incisoCuatro.innerHTML = respuestasSeventh[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 7) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasEight[0]
        incisoDos.innerHTML = respuestasEight[1]
        incisoTres.innerHTML = respuestasEight[2]
        incisoCuatro.innerHTML = respuestasEight[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 8) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasEight[0]
        incisoDos.innerHTML = respuestasEight[1]
        incisoTres.innerHTML = respuestasEight[2]
        incisoCuatro.innerHTML = respuestasEight[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 9) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasTenth[0]
        incisoDos.innerHTML = respuestasTenth[1]
        incisoTres.innerHTML = respuestasTenth[2]
        incisoCuatro.innerHTML = respuestasTenth[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else if (ataqueAleatorio == 10) {
        contenedorPregunta.innerHTML = preguntas[ataqueAleatorio]
        incisoUno.innerHTML = respuestasFirst[0]
        incisoDos.innerHTML = respuestasFirst[1]
        incisoTres.innerHTML = respuestasFirst[2]
        incisoCuatro.innerHTML = respuestasFirst[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    } else {
        contenedorPregunta.innerHTML = preguntas[0]
        incisoUno.innerHTML = respuestasFirst[0]
        incisoDos.innerHTML = respuestasFirst[1]
        incisoTres.innerHTML = respuestasFirst[2]
        incisoCuatro.innerHTML = respuestasFirst[3]
        iniciarPelea(ataqueAleatorio)
        console.log(ataqueAleatorio)
    }  
} 

function iniciarPelea(random) {
    if (respuestasJugador.length > 0) {
        combate(random)
    }
}

function combate(random) {
    c = random
    if (c = 1) {
        combateRepetitivo(1, 3)
    } else if (c = 2) {
        combateRepetitivo(2, 2)
    } else if (c = 3) {
        combateRepetitivo(3, 1)
    } else if (c = 4) {
        combateRepetitivo(4, 0)
    } else if (c = 5) {
        combateRepetitivo(5, 3)
    } else if (c = 6) {
        combateRepetitivo(6, 3)
    } else if (c = 7) {
        combateRepetitivo(7, 2)
    } else if (c = 8) {
        combateRepetitivo(8, 1)
    } else if (c = 9) {
        combateRepetitivo(9, 0)
    } else if (c = 10) {
        combateRepetitivo(10, 3)
    }
}

function combateRepetitivo(a, b) {
    let index = 0
    if (a = 1) {
        
        if (respuestasSecond[b] = respuestaOcho && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            console.log(respuestasJugador + 'Funciona')
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasSecond[b] != respuestaOcho && respuestasJugador[0] != b) {
            console.log(b + 'Funciona')
            console.log(respuestasJugador + 'Funciona')
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    } 
    else if (a = 2) {
        if (respuestasThird[b] = respuesta2Uno && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            console.log(respuestasJugador + 'Funciona')
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasThird[b] = respuesta2Uno && respuestasJugador[0] != b) {
            crearMensaje("Incorrecto")
            console.log(respuestasJugador + 'Funciona')
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a = 3) {
        if (respuestasFourth[b] = respuesta2Cuatro && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            console.log(respuestasJugador + 'Funciona')
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasFourth[b] = respuesta2Cuatro && respuestasJugador[0] != b) {
            crearMensaje("Incorrecto")
            console.log(respuestasJugador + 'Funciona')
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            console.log(respuestasJugador[0] + 'No funciona')
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a = 4) {
        if (respuestasFifth[b] = respuesta2Siete && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            console.log(respuestasJugador + 'Funciona')
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasFifth[b] = respuesta2Siete && respuestasJugador[0] != b) {
            crearMensaje("Incorrecto")
            console.log(respuestasJugador + 'Funciona')
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            console.log(respuestasJugador[0] + 'No funciona')
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a = 5) {
        if (respuestasSixth[b] = respuesta3Cuatro && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            console.log(respuestasJugador + 'Funciona')
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasSixth[b] = respuesta3Cuatro && respuestasJugador[0] != b) {
            crearMensaje("Incorrecto")
            console.log(respuestasJugador + 'Funciona')
            console.log(respuestasJugador[0] + 'No funciona')
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a == 6) {
        if (respuestasSeventh[b] == respuesta3Ocho && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasSeventh[b] == respuesta3Ocho && respuestasJugador[0] != b) {
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a == 7) {
        if (respuestasEight[b] == respuesta4Uno && respuestasJugador[0] == b) {
            console.log(b + 'Funciona')
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasEight[b] == respuesta4Uno && respuestasJugador[0] != b) {
            console.log(b + 'Funciona')
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a == 8) {
        if (respuestasNinth[b] == respuesta4Cuatro && respuestasJugador[0] == b) {
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasNinth[b] == respuesta4Cuatro && respuestasJugador[0] != b) {
            console.log(b + 'Funciona')
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a == 9) {
        if (respuestasTenth[b] == respuesta4Siete && respuestasJugador[0] == b) {
            console.log(b + 'Funciona')
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasTenth[b] == respuesta4Siete && respuestasJugador[0] != b) {
            console.log(b + 'Funciona')
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
    else if (a == 10) {
        if (respuestasEleventh[b] == respuestaCuatro && respuestasJugador[0] == b) {
            console.log(b + 'Funciona')
            crearMensaje("Correcto")
            vidasEnemigo--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasEnemigo)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
            } 
        else if (respuestasEleventh[b] == respuestaCuatro && respuestasJugador[0] != b) {
            console.log(b + 'Funciona')
            crearMensaje("Incorrecto")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            spanVidasEnemigo.innerHTML = vidasEnemigo
            while(respuestasJugador.length > 0) {
                respuestasJugador.pop();
            }
            console.log(vidasJugador)
            if (vidasJugador == 0) {
                crearMensajeFinal('Has perdido ante ', opcionDeNombreEnemigo)
            } else if (vidasEnemigo == 0) {
                crearMensajeFinal("¡Ganaste! Derrotaste a ", opcionDeNombreEnemigo)
            }
        } 
    }
}

function crearMensaje(resultado) {
    sectionMensajes.innerHTML = resultado
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    alumnoObjeto.x = alumnoObjeto.x + alumnoObjeto.velocidadX
    alumnoObjeto.y = alumnoObjeto.y + alumnoObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    alumnoObjeto.pintar()
    katya.pintar()
    catalan.pintar()
    yobanny.pintar()
    if (alumnoObjeto.velocidadX !== 0 || alumnoObjeto.velocidadY !== 0) {
        revisarColision(katya)
        revisarColision(catalan)
        revisarColision(yobanny)
    }
}

function moverDerecha() {
    alumnoObjeto.velocidadX = 5
}

function moverIzquierda() {
    alumnoObjeto.velocidadX = -5
}

function moverAbajo() {
    alumnoObjeto.velocidadY = 5
}

function moverArriba() {
    alumnoObjeto.velocidadY = -5
}

function detenerMovimiento() {
    alumnoObjeto.velocidadX = 0
    alumnoObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    alumnoObjeto = obtenerObjeto(alumnoJugador)
    console.log(alumnoObjeto, alumnoJugador);
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjeto(alumnoJugador) {
    for (let i = 0; i < individuos.length; i++) {
        if (alumnoJugador === individuos[i].nombre) {
            return individuos[i]
        }
        
    }
}

function crearMensajeFinal(resultadoFinal, b) {
    sectionMensajes.innerHTML = resultadoFinal + b
    sectionReiniciar.style.display = 'block'
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        alumnoObjeto.y
    const abajoMascota = 
        alumnoObjeto.y + alumnoObjeto.alto
    const derechaMascota = 
        alumnoObjeto.x + alumnoObjeto.ancho
    const izquierdaMascota = 
        alumnoObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    opcionDeFoto = `
    <img src=${alumnoObjeto.foto} alt=${alumnoObjeto.nombre}>
    `
    fotoAlumno.innerHTML = opcionDeFoto
    opcionDeFotoEnemigo = `
    <img src=${enemigo.foto} alt=${enemigo.nombre}>
    `
    opcionDeNombreEnemigo = `${enemigo.nombre}
    
    `
    fotoEnemigo.innerHTML = opcionDeFotoEnemigo
    spanMascotaEnemigo.innerHTML = opcionDeNombreEnemigo
    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo
    secuenciaAtaque(respuestasJugador)
}

window.addEventListener('load', iniciarJuego)