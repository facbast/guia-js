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