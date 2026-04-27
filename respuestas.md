# Ejercicio 27: Variables en JavaScript

## ¿Cuándo usarías let?

Usaría `let` cuando necesito declarar una variable que pueda cambiar su valor durante la ejecución del programa. Es útil para variables que se van a reasignar, como contadores en bucles, variables de estado que cambian con el tiempo, o valores que se calculan dinámicamente.

Ejemplos:
- Contadores en bucles: `let i = 0;`
- Variables que cambian: `let puntaje = 0; puntaje += 10;`
- Variables en funciones que se reasignan: `let resultado = calcularAlgo();`

## ¿Cuándo usarías const?

Usaría `const` cuando declaro una variable que no va a cambiar su valor después de la inicialización. Es ideal para constantes, referencias a objetos que no se reasignan (aunque sus propiedades sí puedan cambiar), y cualquier valor que deba permanecer constante.

Ejemplos:
- Constantes matemáticas: `const PI = 3.14159;`
- Referencias a elementos del DOM: `const boton = document.getElementById('btn');`
- Configuraciones: `const CONFIG = { tema: 'oscuro' };`
- Arrays u objetos que no se reasignan: `const nombres = ['Ana', 'Juan'];`

## ¿Por qué actualmente se recomienda evitar var?

Se recomienda evitar `var` porque tiene problemas de scope (alcance) que pueden causar bugs difíciles de detectar:

1. **Scope de función vs. global**: `var` tiene scope de función o global, pero no de bloque, lo que puede llevar a variables "filtrándose" fuera de bloques como `if` o `for`.

2. **Hoisting**: Las variables `var` se "elevan" al inicio de la función, lo que puede causar `undefined` en lugar de errores de referencia.

3. **Re-declaración**: `var` permite re-declarar la misma variable sin error, lo que puede ocultar bugs.

4. **Confusión en bucles**: En bucles, `var` puede compartir la misma variable entre iteraciones, causando problemas con closures.

En su lugar, se usan `let` y `const` que tienen scope de bloque, no se elevan de manera problemática, y `const` previene reasignaciones accidentales.

Ejemplo problemático con `var`:
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Imprime 3, 3, 3
}
```

Con `let` funciona correctamente:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Imprime 0, 1, 2
}
```

# Ejercicio 28: Scope o Alcance de Variables

## ¿Qué significa que una variable tenga "scope" o alcance?

El "scope" o alcance de una variable se refiere a la zona del código donde esa variable es accesible y puede ser utilizada. En JavaScript, el scope determina dónde se puede leer o modificar una variable, y dónde se puede declarar.

Existen diferentes tipos de scope:
- **Scope global**: Variables accesibles desde cualquier parte del código
- **Scope de función**: Variables accesibles solo dentro de la función donde se declaran
- **Scope de bloque**: Variables accesibles solo dentro del bloque donde se declaran (como `if`, `for`, etc.)

## Análisis del código proporcionado

### ¿Qué se muestra primero?

Primero se muestra `"Global"` porque la primera línea `console.log(nombre);` accede a la variable `nombre` declarada en el scope global.

### ¿Qué se muestra después?

Después se muestra `"Local"` porque dentro de la función `mostrarNombre()`, se declara una nueva variable `let nombre = "Local";` que tiene scope de bloque (la función), y esta "sombra" o "oculta" la variable global con el mismo nombre.

### ¿Por qué?

Esto sucede porque:
1. Las variables declaradas con `let` tienen scope de bloque
2. Cuando hay dos variables con el mismo nombre en diferentes scopes, la más interna (local) tiene prioridad sobre la externa (global)
3. La variable global `nombre` sigue existiendo, pero dentro de la función no es accesible porque está "sombreada" por la local

Si el código usara `var` en lugar de `let`, el comportamiento sería diferente debido al hoisting y scope de función.

### Ejemplo completo para ilustrar:

```javascript
let nombre = "Global";

function mostrarNombre() {
  let nombre = "Local";
  console.log("Dentro de la función:", nombre); // Local
}

console.log("Fuera de la función:", nombre); // Global
mostrarNombre();
```

Salida:
```
Fuera de la función: Global
Dentro de la función: Local
```

# Ejercicio 29: Arrays vs Objetos en Videojuegos

## ¿Cuándo conviene usar un array y cuándo conviene usar un objeto?

La elección entre arrays y objetos depende de la naturaleza de los datos que necesitamos almacenar y cómo vamos a acceder a ellos.

### Usar Arrays cuando:
- Los datos son del mismo tipo y necesitamos acceder por posición/índice
- El orden de los elementos es importante
- Necesitamos operaciones como agregar/quitar elementos del final o principio
- Los datos son secuenciales o listas ordenadas

### Usar Objetos cuando:
- Los datos tienen propiedades nombradas y necesitamos acceder por nombre/clave
- Los datos son heterogéneos (diferentes tipos)
- Necesitamos representar una entidad con múltiples atributos
- El acceso por nombre es más intuitivo que por posición

## Ejemplo relacionado con un videojuego: Sistema de Inventario

Imaginemos un videojuego RPG donde necesitamos gestionar el inventario del jugador y las estadísticas de los personajes.

### Array para el Inventario (lista ordenada de ítems)
```javascript
const inventario = [
  "espada",
  "poción de vida",
  "llave dorada",
  "arco",
  "escudo"
];
```

**¿Qué representa?**
- Una lista ordenada de ítems que el jugador ha recogido
- El orden puede representar el orden en que fueron obtenidos
- Accedemos por posición: `inventario[0]` = "espada"
- Podemos agregar nuevos ítems: `inventario.push("armadura")`
- Es útil para mostrar el inventario en una interfaz de lista

### Objeto para las Estadísticas del Personaje
```javascript
const personaje = {
  nombre: "Eldrin el Valiente",
  nivel: 15,
  vida: 120,
  mana: 80,
  clase: "Guerrero",
  experiencia: 2500,
  habilidades: ["Golpe Poderoso", "Defensa Total", "Carga Heroica"]
};
```

**¿Qué representa?**
- Una entidad con múltiples propiedades relacionadas
- Cada propiedad tiene un nombre descriptivo y un valor
- Accedemos por nombre: `personaje.nombre` = "Eldrin el Valiente"
- Es útil para representar una ficha de personaje completa
- Las propiedades pueden ser de diferentes tipos (string, number, array)

## ¿Por qué esta distinción es importante en videojuegos?

1. **Rendimiento**: Los arrays son más eficientes para operaciones secuenciales, mientras que los objetos son mejores para acceso directo por nombre.

2. **Legibilidad del código**: Usar la estructura correcta hace el código más intuitivo y fácil de mantener.

3. **Funcionalidad**: Los arrays tienen métodos como `map`, `filter`, `reduce` para procesamiento de listas, mientras que los objetos son ideales para representar entidades complejas.

4. **Interfaz de usuario**: Los arrays son perfectos para listas desplegables o grids, mientras que los objetos se usan para formularios o tarjetas de información.

En resumen, en un videojuego usaríamos arrays para listas de ítems, niveles, puntuaciones, etc., y objetos para representar personajes, configuraciones, estados del juego, etc.