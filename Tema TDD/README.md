# Desarrollo basado en pruebas

# Ejercicio 1
## Descargar y ejecutar las pruebas de alguno de los proyectos anteriores, y si sale todo bien, hacer un pull request a alguno de esos proyectos con tests adicionales, si es que faltan (en el momento que se lea este tema).

# Ejercicio 2
## Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

# Ejercicio 3
## Crear algún conjunto de scripts de tests, usando tu lenguaje favorito, y ejecutarlos desde el marco de test más adecuado (o el que más te guste) para ese lenguaje.

# Ejercicio 4
## Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

# Ejercicio 5
## Como ejercicio, algo ligeramente diferente: un servicio web para calificar las empresas en las que hacen prácticas los alumnos.

## Las acciones podrían incluir:

+ Crear empresa
+ Listar calificaciones para cada empresa
+ Crear calificación y añadirla (comprobando que la persona no la haya añadido ya)
+ Borrar calificación (si se arrepiente o te denuncia la empresa o algo)
+ Hacer un ránking de empresas por calificación, por ejemplo
+ Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades.
+ Si se quiere hacer con cualquier otra aplicación, también es válido.

# Se trata de hacer una aplicación simple que se pueda hacer rápidamente con un generador de aplicaciones como los que incluyen diferentes microframeworks. Si cuesta mucho trabajo, simplemente prepara una aplicación que puedas usar más adelante en el resto de los ejercicios.

# Ejercicio 6
## Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

# Ejercicio 7
## Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

# Ejercicio 8
## Automatizar con grunt, gulp u otra herramienta de gestión de tareas en Node la generación de documentación de la librería que se cree usando docco u otro sistema similar de generación de documentación. Previamente, por supuesto, habrá que documentar tal librería.

# Ejercicio 9
## Haced los dos primeros pasos antes de pasar al tercero.

+ Darse de alta. Muchos están conectados con GitHub por lo que puedes autetificarte directamente desde ahí. A través de un proceso de autorización, puedes acceder al contenido e incluso informar del resultado de los tests a GitHub.

+ Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

Para darme de alta he accedido a la web de **Travis** y me he registrado.
Después lo he activado en todos mis repositorios.
![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20TDD/Images/RegistroTravis.png)

# Ejercicio 10
## Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.

He creado en el repositorio de mi aplicación el archivo .travis.yml con las siguientes secciones:

+ Language: node_js

Aqui indicamos el lenguaje que estamos usando.

+ node_js: 8.10.0 

Esto indica las versiones a probar.

+ before_install:
	+ npm install -g jest
	+ npm install -g gulp

Esto se ejecuta antes de la instalación de nuestra aplicación (npm install), en mi caso instalo jest y gulp para las pruebas de test.

+ script: gulp test

Con esta sección lanzo los tests con gulp
.
Finalmente, cada vez que hagamos un push, se lanzará Travis y comprobará que lo que hemos añadido al proyecto pasan los tests.

![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20TDD/Images/travis.png)
