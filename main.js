// Ejercicio 1
// Datos iniciales del jugador
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;


// Mostrar datos del jugador en consola
console.log("=== DATOS INICIALES DEL JUGADOR ===");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Vida:", vida);
console.log("Puntaje:", puntaje);
console.log("Estado Activo:", estaActivo);
console.log("====================================");

// Ejercicio 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

// Calcular puntaje final
let puntajeFinal = puntosBase + bonus - penalizacion;

// Mostrar resultado por consola
console.log("\n=== EJERCICIO 2: CÁLCULO DE PUNTAJE ===");
console.log("Puntos Base:", puntosBase);
console.log("Bonus:", bonus);
console.log("Penalización:", penalizacion);
console.log("Puntaje Final:", puntajeFinal);
console.log("========================================");

// Ejercicio 3. Convertir texto a número
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;

 // Convertir valor a número
 const numero = Number(valor);
 
 // Sumar 10
 const resultado = numero + 10;
 
 // Mostrar el resultado en pantalla
 mensaje.textContent = "Resultado: " + resultado;
});

// Ejercicio 4. Validar edad mínima
let edadJugador = 15;

console.log("\n=== EJERCICIO 4: VALIDACIÓN DE EDAD ===");
if (edadJugador >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}
console.log("========================================");

// Ejercicio 5. Estado del jugador según vida
let vida_5 = 50;

console.log("\n=== EJERCICIO 5: ESTADO DEL JUGADOR ===");
console.log("Vida:", vida_5);

if (vida_5 < 0) {
  console.log("Error: La vida no puede ser negativa");
} else if (vida_5 > 70) {
  console.log("Jugador en buen estado");
} else if (vida_5 >= 30 && vida_5 <= 70) {
  console.log("Jugador herido");
} else if (vida_5 >= 1 && vida_5 <= 29) {
  console.log("Jugador en peligro");
} else if (vida_5 === 0) {
  console.log("Game Over");
}
console.log("========================================");

// Ejercicio 6. Menú de opciones
let opcion = "iniciar";

console.log("\n=== EJERCICIO 6: MENÚ DE OPCIONES ===");
console.log("Opción seleccionada:", opcion);

switch (opcion) {
  case "iniciar":
    console.log("Iniciando el juego...");
    break;
  case "configuracion":
    console.log("Abriendo configuración...");
    break;
  case "creditos":
    console.log("Mostrando créditos del juego...");
    break;
  case "salir":
    console.log("Saliendo del juego...");
    break;
  default:
    console.log("Opción no válida");
}
console.log("========================================");

// Ejercicio 7. Cuenta regresiva
console.log("\n=== EJERCICIO 7: CUENTA REGRESIVA ===");
for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("¡Comienza!");
console.log("========================================");

// Ejercicio 8. Sumar puntos por rondas
let puntajeTotal = 0;
let puntosPorRonda = [10, 15, 20, 25, 30]; // Desafío: cantidades diferentes por ronda

console.log("\n=== EJERCICIO 8: SUMA DE PUNTOS POR RONDAS ===");
for (let ronda = 1; ronda <= 5; ronda++) {
  let puntosRonda = puntosPorRonda[ronda - 1];
  puntajeTotal += puntosRonda;
  console.log(`Ronda ${ronda}: +${puntosRonda} puntos (Total: ${puntajeTotal})`);
}
console.log("Puntaje Total Final:", puntajeTotal);
console.log("========================================");

// Ejercicio 9. Recorrer un inventario
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log("\n=== EJERCICIO 9: INVENTARIO ===");
console.log("Primer objeto:", inventario[0]);
console.log("Último objeto:", inventario[inventario.length - 1]);
console.log("Cantidad total de objetos:", inventario.length);
console.log("========================================");

// Ejercicio 10. Mostrar todos los objetos
const inventario_B = ["espada", "poción", "llave", "escudo"];

console.log("\n=== EJERCICIO 10: RECORRER INVENTARIO_B ===");
for (let i = 0; i < inventario_B.length; i++) {
  console.log(`Objeto ${i + 1}: ${inventario_B[i]}`);
}
console.log("========================================");

// Ejercicio 11. Agregar y quitar elementos
let mochila = [];

console.log("\n=== EJERCICIO 11: GESTIÓN DE MOCHILA ===");
// Agregar elementos
mochila.push("linterna");
console.log("Agregado: linterna");

mochila.push("comida");
console.log("Agregado: comida");

mochila.push("mapa");
console.log("Agregado: mapa");

// Quitar el último elemento
let elementoQuitado = mochila.pop();
console.log("Quitado:", elementoQuitado);

// Mostrar mochila final
console.log("Mochila final:", mochila);
console.log("========================================");

// Ejercicio 12. Buscar un objeto en el inventario
const inventario_C = ["espada", "poción", "llave", "escudo"];

console.log("\n=== EJERCICIO 12: VERIFICAR LLAVE ===");
console.log("Inventario:", inventario_C);

if (inventario_C.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}
console.log("========================================");

// Ejercicio 13. Crear una función de saludo
function saludarUsuario(nombre) {
  console.log("Hola, " + nombre + "!");
}

console.log("\n=== EJERCICIO 13: FUNCIÓN DE SALUDO ===");
saludarUsuario("Milo");
console.log("========================================");

// Ejercicio 14. Función para calcular daño
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

console.log("\n=== EJERCICIO 14: CALCULAR VIDA RESTANTE ===");
let resultado = calcularVidaRestante(100, 30);
console.log("Vida restante:", resultado);
console.log("========================================");

// Ejercicio 15. Usar arrow functions
const sumar = (a, b) => {
  return a + b;
};

console.log("\n=== EJERCICIO 15: ARROW FUNCTION SUMAR ===");
console.log("Resultado de sumar(10, 5):", sumar(10, 5));
console.log("========================================");

// Ejercicio 16. Crear un objeto jugador
const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log("\n=== EJERCICIO 16: OBJETO JUGADOR ===");
console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);
console.log("========================================");

// Ejercicio 17. Modificar propiedades de un objeto
console.log("\n=== EJERCICIO 17: ACTUALIZAR OBJETO JUGADOR ===");

// Aumentar el nivel en 1
jugador.nivel += 1;

// Sumar 50 monedas
if (jugador.monedas === undefined) {
  jugador.monedas = 0;
}
jugador.monedas += 50;

// Mostrar el objeto actualizado
console.log("Nuevo Nivel:", jugador.nivel);
console.log("Monedas:", jugador.monedas);
console.log("Objeto jugador completo:", jugador);
console.log("========================================");

// Ejercicio 18. Array de objetos
const personajes_18 = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

console.log("\n=== EJERCICIO 18: PERSONAJES ===");
for (let i = 0; i < personajes_18.length; i++) {
  const personaje = personajes_18[i];
  console.log(`El personaje ${personaje.nombre} es un ${personaje.tipo} de nivel ${personaje.nivel} con ${personaje.vida} de vida.`);
}
console.log("========================================");

// Ejercicio 19. Filtrar personajes por nivel
const personajesFuertes = personajes_18.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log("\n=== EJERCICIO 19: PERSONAJES FUERTES ===");
console.log(personajesFuertes);
console.log("========================================");

// Ejercicio 20. Obtener solo los nombres
const nombres = personajes_18.map((personaje) => {
  return personaje.nombre;
});

console.log("\n=== EJERCICIO 20: NOMBRES DE PERSONAJES ===");
console.log(nombres);
console.log("========================================");

// Ejercicio 21. Buscar un personaje
const personajeEncontrado = personajes_18.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log("\n=== EJERCICIO 21: BUSCAR PERSONAJE ===");
console.log(personajeEncontrado);
console.log("========================================");

// Ejercicio 22. Calcular total de vida
const vidaTotal = personajes_18.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log("\n=== EJERCICIO 22: VIDA TOTAL ===");
console.log("Vida total de todos los personajes:", vidaTotal);
console.log("========================================");

// Ejercicio 23. Mostrar mensaje en pantalla
const mensaje23 = document.getElementById("mensaje");

mensaje23.textContent = "Bienvenido a la guía de JavaScript";

// Desafío extra: Cambiar el color del texto
mensaje23.style.color = "blue";

console.log("\n=== EJERCICIO 23: MENSAJE EN PANTALLA ===");
console.log("Mensaje mostrado en pantalla: 'Bienvenido a la guía de JavaScript' (en color azul)");
console.log("========================================");

// Ejercicio 24. Botón que suma puntos
const boton24 = document.getElementById("btn");
const mensaje24 = document.getElementById("mensaje");

let puntos = 0;

boton24.addEventListener("click", function () {
  puntos += 10;
  mensaje24.textContent = "Puntaje: " + puntos;
});

console.log("\n=== EJERCICIO 24: BOTÓN SUMA PUNTOS ===");
console.log("Haz clic en el botón para sumar 10 puntos cada vez");
console.log("========================================");

// Ejercicio 25. Validar nombre de usuario
const input26 = document.getElementById("dato");
const boton25 = document.getElementById("btn");
const mensaje25 = document.getElementById("mensaje");

boton25.addEventListener("click", function () {
  const nombre = input26.value.trim();
  if (nombre === "") {
    mensaje25.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje25.textContent = "Bienvenido/a, " + nombre;
  }
});

console.log("\n=== EJERCICIO 25: VALIDACIÓN DE NOMBRE ===");
console.log("Ingresa un nombre en el input y haz clic en el botón");
console.log("========================================");