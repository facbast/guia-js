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