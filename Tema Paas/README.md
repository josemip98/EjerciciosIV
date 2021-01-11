# Desplegando aplicaciones en la nube: Uso de PaaS

## Ejercicio 1
## Darse de alta en algún servicio PaaS tal como Heroku o BlueMix o usar alguno de los PaaS de otros servicios cloud en los que ya se esté dado de alta.

Para este ejercicio me he registrado en **Heroku**.

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/registroHeroku.png)

## Ejercicio 2
## Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

En mi caso voy a trabajar con **Heroku**, en primer lugar debemos instalar rl CLI de Heroku en Linux con la orden:

`sudo snap install heroku --classic`

Después debemos hacer login:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/login.png)

Nos descargamos la carpeta que nos da Heroku para hacer el despliegue de prueba:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/gitclone.png)

Desde el cli hacemos heroku create en una carpeta donde tengamos la aplicación:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/create.png)

## Ejercicio 3
## Instalar y echar a andar tu primera aplicación en Heroku.

Este ejercicio se ha realizado en el ejercicio anterior.

## Ejercicio 4
## Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

Nos descargamos foreman:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/foreman.png)

E iniciamos localmente la aplicacion:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/start.png)

Tambien podemos arrancarla con heroku:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/scale.png)

Si nos dirijimos a la direccion localhost:5000:

![Registroheroku](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%20Paas/Images/localhost.png)

## Ejercicio 5
## Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

## Ejercicio 6
## Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.












