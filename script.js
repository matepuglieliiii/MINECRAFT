let nombre = "";
let categoria = "";
let preguntas = [];
let indice = 0;
let puntaje = 0;

const bancoPreguntas = {
    Mobs: [
      { pregunta: "¿Cuál es el máximo de personas en un bote?", opciones: ["2", "3", "4", "5"], correcta: "2" },
      { pregunta: "¿Cuál es la verdadera skin original del ahogado?", opciones: ["Steve", "Zombie", "Esqueleto", "Husk"], correcta: "Zombie" },
      { pregunta: "¿Cuál es el sonido del que proviene el zorro?", opciones: ["Gato", "Lobo", "Pez", "Murciélago"], correcta: "Lobo" },
      { pregunta: "¿Los gatos en Minecraft pueden sobrevivir lo mismo o más que un gato en la vida real a una caída?", opciones: ["Sí", "No", "Solo si tienen botas", "Depende del modo de juego"], correcta: "Sí" },
      { pregunta: "¿Cuál es la cantidad máxima de mobs hostiles que pueden aparecer en un chunk cargado?", opciones: ["70", "80", "100", "120"], correcta: "70" },
      { pregunta: "¿Cuántas cabezas tiene el Wither?", opciones: ["1", "2", "3", "4"], correcta: "3" },
      { pregunta: "¿Qué animales aparecen en el bioma de manglares?", opciones: ["Ranas", "Murciélagos", "Zorros", "Caballos"], correcta: "Ranas" },
      { pregunta: "¿Cuántos oficios de aldeanos hay?", opciones: ["10", "13", "15", "20"], correcta: "13" },
      { pregunta: "¿El Wither spawnea esqueletos Wither cuando es invocado?", opciones: ["No", "Sí", "Solo en modo difícil", "Solo en el Nether"], correcta: "No" },
      { pregunta: "¿Las champivacas son familiares de las vacas?", opciones: ["Sí", "No", "Son mutaciones", "Son mobs únicos"], correcta: "Sí" },
      { pregunta: "¿Herobrine es real dentro del juego?", opciones: ["Sí", "No", "A veces", "Solo con mods"], correcta: "No" },
      { pregunta: "¿Cuál es la probabilidad de que spawneen caballos esqueletos?", opciones: ["Muy baja", "1%", "5%", "10%"], correcta: "Muy baja" },
      { pregunta: "¿A partir de cuántas noches sin dormir aparecen los Phantom?", opciones: ["1", "2", "3", "4"], correcta: "3" },
      { pregunta: "¿Cuál es la probabilidad de obtener una cabeza de Wither Esqueleto?", opciones: ["2.5%", "5%", "1%", "10%"], correcta: "2.5%" },
      { pregunta: "¿Cuál es la probabilidad de spawneo del ajolote azul?", opciones: ["0.083%", "1%", "5%", "10%"], correcta: "0.083%" },
      { pregunta: "¿En qué se convierte la champivaca cuando le cae un rayo?", opciones: ["Champivaca marrón", "Vaca normal", "Explota", "Nada"], correcta: "Champivaca marrón" },
      { pregunta: "¿Qué mob spawnean los aldeanos cuando se sienten atacados?", opciones: ["Golem de hierro", "Golem de nieve", "Perros", "Guardias"], correcta: "Golem de hierro" },
      { pregunta: "¿Qué oficio de aldeano tradea ender pearls?", opciones: ["Clérigo", "Cartógrafo", "Herrero", "Pastor"], correcta: "Clérigo" },
      { pregunta: "¿Las flechas de los esqueletos de la nieve qué efecto te dan?", opciones: ["Lentitud", "Daño", "Veneno", "Ninguno"], correcta: "Lentitud" },
      { pregunta: "¿Qué mob vuela y tiene espada?", opciones: ["Vex", "Ghast", "Enderman", "Warden"], correcta: "Vex" }
    ],
    Bloques: [
      { pregunta: "¿Se puede picar la bedrock?", opciones: ["No", "Sí", "Solo en creativo", "Con pico de netherite"], correcta: "No" },
      { pregunta: "¿El portal del Nether se puede realizar con obsidiana llorona?", opciones: ["No", "Sí", "Solo con mods", "Solo en Bedrock Edition"], correcta: "No" },
      { pregunta: "¿El mineral de hierro con qué se puede picar?", opciones: ["Pico de piedra", "Pico de madera", "Con la mano", "Ninguno"], correcta: "Pico de piedra" },
      { pregunta: "¿La TNT puede explotar la netherita?", opciones: ["No", "Sí", "Depende del bioma", "Solo si hay lava"], correcta: "No" },
      { pregunta: "¿Saca más vida caerse encima de una estalactita que una caída normal?", opciones: ["Sí", "No", "Depende de la altura", "Empatan"], correcta: "Sí" },
      { pregunta: "¿El fuego quema la madera del Nether?", opciones: ["No", "Sí", "Solo en el Overworld", "Solo con lava"], correcta: "No" },
      { pregunta: "¿Cuál es el daño máximo que puede causar la TNT?", opciones: ["65", "49", "85", "100"], correcta: "65" },
      { pregunta: "¿Es verdadera la teoría de que cerca de la redstone aparece diamante?", opciones: ["No", "Sí", "A veces", "Solo en Bedrock"], correcta: "No" },
      { pregunta: "¿En qué capa es más común el diamante en la última versión?", opciones: ["-59", "-20", "12", "0"], correcta: "-59" },
      { pregunta: "¿Cuál es la distancia máxima de redstone sin repetidores?", opciones: ["15 bloques", "20 bloques", "30 bloques", "10 bloques"], correcta: "15 bloques" },
      { pregunta: "¿El bloque de obsidiana es resistente a la explosión de TNT?", opciones: ["Sí", "No", "Solo en el Nether", "Depende del daño"], correcta: "Sí" },
      { pregunta: "¿El bloque de cobre se oxida con el aire?", opciones: ["Sí", "No", "Solo en biomas fríos", "Depende de la altitud"], correcta: "Sí" },
      { pregunta: "¿La arena de alma impide correr?", opciones: ["Sí", "No", "Solo con botas", "Solo en el Nether"], correcta: "Sí" },
      { pregunta: "¿Con la estalactita se puede hacer lava infinita?", opciones: ["Sí", "No", "Solo agua", "Depende del bioma"], correcta: "Sí" },
      { pregunta: "¿El hielo se puede picar con pico de madera?", opciones: ["No", "Sí", "Solo hielo compacto", "Depende del bioma"], correcta: "No" },
      { pregunta: "¿Se puede picar el carbón con cualquier pico?", opciones: ["Sí", "No", "Solo de piedra o superior", "Solo con hierro"], correcta: "Sí" },
      { pregunta: "¿Se obtiene bloque de diamante al picar con pico de hierro?", opciones: ["Sí", "No", "Solo si tiene fortuna", "No sin silk touch"], correcta: "Sí" },
      { pregunta: "¿El bloque de magma daña al jugador al caminar?", opciones: ["Sí", "No", "Solo en lava", "Solo de noche"], correcta: "Sí" },
      { pregunta: "¿Para hacer un pistón pegajoso se necesita pistón y slime?", opciones: ["Sí", "No", "Solo slime", "Solo pistón"], correcta: "Sí" },
      { pregunta: "¿Se puede craftear un tridente?", opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No" },
      { pregunta: "¿La receta para crear un “Escudo” requiere 6 tablones de madera y 1 lingote de hierro en la mesa de trabajo?" , opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No"},
      { pregunta: "¿El crafteo de una “Antorcha de Redstone” requiere 1 polvo de redstone y 1 palito?", opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No" },
      { pregunta: "¿Para craftear un “Bloque de esmeralda” se necesita 9 esmeraldas?" },
      { pregunta: "¿Para craftear un “Golem de nieve” se necesita 3 bloques de nieve y 1 calabaza?", opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No" },
      { pregunta: "¿Cuál de los siguientes ingredientes NO es necesario para craftear un “Horno de fundición”?" , opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No"},
      { pregunta: "¿Para craftear una “Ender Chest” se necesitan?" , opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No"},
      { pregunta: "¿Para craftear una “Mesa de encantamientos” se requieren?" , opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No"},
      { pregunta: "¿Para craftear un “Escudo” se necesitan?" , opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No" },
      { pregunta: "¿Qué materiales se necesitan para hacer un “Horno de fundición”?", opciones: ["No", "Sí", "Solo en Bedrock", "Solo en mods"], correcta: "No" },
    ]
  }
  

function iniciar() {
  nombre = document.getElementById("nombreUsuario").value;
  if (!nombre) return alert("¡Escribe tu nombre!");
  document.getElementById("inicio").style.display = "none";
  document.getElementById("categorias").style.display = "block";
}

function elegirCategoria(cat) {
  categoria = cat;
  preguntas = bancoPreguntas[cat];
  document.getElementById("categorias").style.display = "none";
  document.getElementById("trivia").style.display = "block";
  mostrarPregunta();
}

function mostrarPregunta() {
  const p = preguntas[indice];
  document.getElementById("pregunta").textContent = p.pregunta;
  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";
  p.opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => {
      if (op === p.correcta) puntaje++;
      siguientePregunta();
    };
    opcionesDiv.appendChild(btn);
  });
}

function siguientePregunta() {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    document.getElementById("trivia").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("puntajeFinal").textContent = `Tu puntaje fue: ${puntaje}`;
    
    
    fetch('/guardar', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nombre, puntaje })
    });
  }
}

function verRanking() {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("ranking").style.display = "block";
  fetch('/ranking')
    .then(res => res.json())
    .then(data => {
      const ul = document.getElementById("listaRanking");
      ul.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre}: ${item.puntaje}`;
        ul.appendChild(li);
      });
    });
}
