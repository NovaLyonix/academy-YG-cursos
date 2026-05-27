console.log("Torta de arequipe")

const prueba = document.getElementById("cargar")

prueba.addEventListener("click", () =>{

    console.log("po")
    let basebox = document.createElement("div"),
        titulo = document.createElement("h3"),
        container = document.createElement("div"),
        horario = document.createElement("p"),
        profe = document.createElement("p"),
        contacto = document.createElement("p")
        resumen = document.createElement("p")

    basebox.className = "caja"
    container.className = "contenedor"

    titulo.className = "titulo"
    horario.className = "detalles"
    profe.className = "detalles"
    contacto.className = "detalles"
    resumen.className = "resumen"
    

    titulo.innerText = "Cómo montar a caballo como un libertador"
    horario.innerText = "Horario:" + "12:00pm - 01:00pm"
    profe.innerText = "Instructor: " +"Simón Bolivar"
    contacto.innerText = "Contacto: " + "0424-3111281"
    resumen.innerText = `¡Señores! ¡Caballeros! ¡Damas! Me dirijo a ustedes hoy para presentarles un curso único y emocionante: 
    'Cómo montar a caballo como un libertador'. Y quién mejor que yo, Simón Bolívar, para enseñarles este arte. 
    
    ¡Pues quién ha montado a caballo en las batallas más épicas de la historia! ¡Quién ha liderado a los ejércitos más valientes de América!
    
    Recuerdo aquella vez en la Batalla de Boyacá... (pausa) ¡No, no, no! No fue allí. Fue en Carabobo. ¡Sí, Carabobo! Donde mi caballo, Palomo, aquí presente (señala a Palomo),
    demostró ser tan valiente como yo. Juntos, cargamos contra las líneas enemigas y... (se detiene, respira profundamente) ¡Ah, perdón! En fin, en este curso, 
    aprenderán a montar a caballo con la misma habilidad y gracia que yo.
    
    Pero no solo se trata de montar a caballo, señores. Se trata de liderazgo, de estrategia, de... (se distrae) ¡Ah, sí! La Batalla de Ayacucho. ¡Fue un día glorioso! Mi caballo y yo, 
    lideramos la carga final y... (se calla, mira a Palomo) ¡Palomo, mi fiel corcel! Él sabe de lo que hablo.
    
    En este curso, Palomo y yo les enseñaremos a: 
    - Montar a caballo con seguridad y confianza 
    - Controlar al caballo en diferentes terrenos y situaciones 
    - Desarrollar la habilidad de liderazgo y comunicación con el caballo 

    ¡Así que no esperen más! ¡Inscríbanse ahora! ¡Será una experiencia inolvidable! (mira a Palomo) ¿Verdad, Palomo? (Palomo relincha)
    
    ¡Y no se preocupen por mi... (pausa, suspira) ...mi estado emocional. Estoy perfectamente bien. 
    ¡Solo un poco... (se ríe nerviosamente) ...entusiasta! ¡Vamos a hacer que este curso sea inolvidable!
    (Palomo, como asistente, asiente con la cabeza y relincha de nuevo, como si estuviera de acuerdo con su amo)

    `
  
    basebox.appendChild(titulo)
    container.appendChild(horario)
    container.appendChild(profe)
    container.appendChild(contacto)
    container.appendChild(resumen)

    basebox.appendChild(container)

    document.body.appendChild(basebox)
})

