const contenedorTarjetas= document.getElementById('contenedor-tarjetas')
const contenedorAtaques= document.getElementById('contenedor-ataques')



const sectionSeleccionarAtaque =document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador= document.getElementById('boton-mascota')

const botonReiniciar= document.getElementById('boton-reinciar')


const sectionSeleccionarMascota =document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let ataqueJugador = []
let ataqueEnemigo = []

let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo= 3
let mokepones=[]
let opcionDeMokepones

let mokeponesEnemigo=[]

let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador

let mascotaEnemigo

let ataquesMokeponEnemigo
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones=[]
let indexAtaqueJugador 
let indexAtaqueEnemigo 
let lienzo = mapa.getContext("2d")
let mapaBackground= new Image()
mapaBackground.src='assets/mokemap.png'

let mascotaJugadorObjeto
let alturaQueBuscamos
let anchoDelMapa= window.innerWidth -20
const anchoMaximoMapa = 350
if(anchoDelMapa>anchoMaximoMapa){
    anchoDelMapa=anchoMaximoMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height= alturaQueBuscamos

class Mokepon{
    constructor(nombre,foto,vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        
        this.ancho = 40
        this.alto = 40

        this.x= aleatorio ( 0, mapa.width - this.ancho)
        this.y= aleatorio (0, mapa.height - this.alto)

        this.mapaFoto= new Image()
        this.mapaFoto.src= fotoMapa
        this.velocidadX=0
        this.velocidadY=0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }


}

let hipodoge = new Mokepon('Hipodoge','assets/mokepons_mokepon_hipodoge_attack.png',5,'assets/hipodoge.png')

let capipepo= new Mokepon('Capipepo','assets/mokepons_mokepon_capipepo_attack.png',5,'assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya','assets/mokepons_mokepon_ratigueya_attack.png',5,'assets/ratigueya.png')


let hipodogeEnemigo = new Mokepon('Hipodoge','assets/mokepons_mokepon_hipodoge_attack.png',5,'assets/hipodoge.png')

let capipepoEnemigo= new Mokepon('Capipepo','assets/mokepons_mokepon_capipepo_attack.png',5,'assets/capipepo.png')

let ratigueyaEnemigo = new Mokepon('Ratigueya','assets/mokepons_mokepon_ratigueya_attack.png',5,'assets/ratigueya.png')

hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'}
)

capipepo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'}
)


ratigueya.ataques.push(
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🌱', id:'boton-tierra'}
)


mokepones.push(hipodoge,capipepo,ratigueya)


hipodogeEnemigo.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'}
)

capipepoEnemigo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'}
)


ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🌱', id:'boton-tierra'}
)

mokeponesEnemigo.push(hipodogeEnemigo,capipepoEnemigo,ratigueyaEnemigo)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display='none'
    
    mokepones.forEach((mokepon)=>{
        
        opcionDeMokepones = `

        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
          <p>${mokepon.nombre} </p>
          <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>

        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    inputHipodoge=document.getElementById('Hipodoge')
    inputCapipepo=document.getElementById('Capipepo')
    inputRatigueya=document.getElementById('Ratigueya')


    sectionReiniciar.style.display= 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click',reiniciarJuego)

}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'



    sectionVerMapa.style.display= 'flex'

    

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML=inputHipodoge.id
        mascotaJugador=inputHipodoge.id
        
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML= inputCapipepo.id
        mascotaJugador=inputCapipepo.id
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML=inputRatigueya.id
        mascotaJugador=inputRatigueya.id
    }
    else{
        sectionVerMapa.style.display= 'none'
        sectionSeleccionarAtaque.style.display='none'
        sectionSeleccionarMascota.style.display='flex'
        alert('No has seleccionado ninguna mascota')
    }
    iniciarMapa()
    extraerAtaques(mascotaJugador)
    
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i =0; i< mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques=mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon= `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
    } )

    botonFuego=document.getElementById('boton-fuego')
    botonAgua= document.getElementById('boton-agua')
    botonTierra= document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

    

    


}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e)=>{
           
            if(e.target.textContent === '🔥 '){
                ataqueJugador.push('FUEGO')
                
                boton.style.background = '#EB5B00';
                boton.disabled=true

            } else if(e.target.textContent === '💧 '){
                ataqueJugador.push('AGUA')
                
                boton.style.background = '#EB5B00';
                boton.disabled=true
            }else{
                ataqueJugador.push('TIERRA')
                
                boton.style.background = '#EB5B00';
                boton.disabled=true
            }

            ataqueAleatorioEnemigo()

        })
    })
    
}

function seleccionarMascotaEnemigo( enemigo){

    spanMascotaEnemigo.innerHTML= enemigo.nombre
    mascotaEnemigo=enemigo
    ataquesMokeponEnemigo=enemigo.ataques
    
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(0,ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio == 2 || ataqueAleatorio==3){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for(let i = 0; i<ataqueJugador.length; i++){
        if(ataqueJugador[i]===ataqueEnemigo[i]){
            indexAmbosOponentes(i,i)
            crearMensaje('EMPATE')
        } else if(ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA'){
            indexAmbosOponentes(i,i)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else if(ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO'){
            indexAmbosOponentes(i,i)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else if(ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA'){
            indexAmbosOponentes(i,i)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else{
            indexAmbosOponentes(i,i)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
        
    }
    
    

      revisarVidas()
}

function revisarVidas() {
    if(victoriasJugador === victoriasEnemigo){   
        crearMensajeFinal('Esto fue un empate!!')
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('Felicitaciones!! GANASTE')
    }else {
        crearMensajeFinal('Lo siento, Perdiste la partida :(')
    }
}

function crearMensaje(resultado){
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo =document.createElement('p')

    sectionMensajes.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    let parrafo= document.createElement('p')
    sectionMensajes.innerHTML=resultadoFinal
    

    

    
    sectionReiniciar.style.display= 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() *(max-min+1)+min)
}

function pintarCanvas(){
    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX= 5
   
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX= -5
    
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY= 5
    
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY= -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()   
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa(){
    
    mascotaJugadorObjeto=obtenerObjetoMascota()
    
    intervalo = setInterval(pintarCanvas,50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i =0; i< mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            
            return mokepones[i]
        }
       
    }
}

function obtenerObjetoMascotaEnemigo(){
    for (let i =0; i< mokeponesEnemigo.length; i++){
        if(mascotaEnemigo === mokeponesEnemigo[i].nombre){
            
            return mokeponesEnemigo[i]
        }
       
    }
}

function revisarColision(enemigo){
    const arribaEnemigo =enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo =enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota =mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota =mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return false
    } else{
       
        detenerMovimiento()
        clearInterval(intervalo)
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'none'
        seleccionarMascotaEnemigo(enemigo)
    }
}
window.addEventListener('load',iniciarJuego)