# Introducción a la infraestructura virtual: concepto y soporte físico

# Ejercicio 1
## Consultar en el catálogo de alguna tienda de informática el precio de un ordenador tipo servidor y calcular su coste de amortización a cuatro y siete años. Consultar este artículo en Infoautónomos sobre el tema.

Para el ejercicio he elegido este [servidor](https://www.dell.com/es-es/work/shop/cty/pdp/spd/poweredge-r940xa/emea_r940xa_vi_vp)

1º- Calculamos el precio con su IVA (21%):
 - 81.164,88 * 21 / 100 = 17044,6248€
 - 81.164,88 + 17044,6248 = 98209,5048€

2º- Calculamos su coste de amortización a cuatro y siete años:
- Para 4 años:
   - Máximo de amortización anual es: 25%
   - 98209,5048 * 25 / 100 = 24552,3762€ / año
- Para 7 años:
   - 100/7 = 14,3% amortización anual
   - 98209,5048 * 17 / 100 = 16695,615816€ / año
    
# Ejercicio 2
## Usando las tablas de precios de servicios de alojamiento en Internet “clásicos”, es decir, que ofrezcan Virtual Private Servers o servidores físicos, y de proveedores de servicios en la nube, comparar el coste durante un año de un ordenador con un procesador estándar (escogerlo de forma que sea el mismo tipo de procesador en los dos vendedores) y con el resto de las características similares (tamaño de disco duro equivalente a transferencia de disco duro) en el caso de que la infraestructura comprada se usa solo el 1% o el 10% del tiempo.

He elegido un [servidor virtual privado](https://www.arsys.es/servidores/vps?s=cpc&c=316967523&a=19256489763&gclid=Cj0KCQjwk8b7BRCaARIsAARRTL4Qyu3IcWHvOuhsDOd10NxM3B7EBMGXY37ZB_EYX4deJpF6J5YtCv8aAgtDEALw_wcB) con el que tenemos un procesador 2vCPU Intel Xeon, 4GB RAM, 60GB SSD de almacenamiento.

Su coste sería de 7,50€ al mes, en un año sería de 90€

Para el [servicio en la nube](https://azure.microsoft.com/es-es/services/virtual-machines/#pricing) con unas características similares 2vCPU Intel Xeon, 4GB RAM.

Su coste sería de 0,072€/hora

Suponiendo que se usa el 10% del tiempo de 1 día.

24 * 10/100 = 2,4 horas de uso diario

Luego al dia cuesta 1.1728€, al mes 5,184€

Su coste en un año sería de 62,20€

En definitiva podemos comprobar que cloud es mas rentable si utilizamos solo ese 10% del día ya que en este sólo pagamos el tiempo que lo utilizemos, mientras que en el servidor privado tenemos siempre un coste fijo de algo que se puede utilizar o no.

# Ejercicio 3
## En general, cualquier ordenador con menos de 5 o 6 años tendrá estos flags. ¿Qué modelo de procesador es? ¿Qué aparece como salida de esa orden? Si usas una máquina virtual, ¿qué resultado da? ¿Y en una Raspberry Pi o, si tienes acceso, el procesador del móvil?

- **Comando:** `cat /proc/cpuinfo`
- **Salida por pantalla:**

![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%201/Images/cpuinfo.png)

- **Comando:** `egrep '^flags.*(vmx|svm)' /proc/cpuinfo`
- **Salida por pantalla:**

![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%201/Images/flags.png)

# Ejercicio 4
## Instalar un hipervisor para gestionar máquinas virtuales, que más adelante se podrá usar en pruebas y ejercicios. Usar siempre que sea posible un hipervisor que sea software libre.

Para este ejercicio voy a utilizar VirtualBox

![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%201/Images/VirtualBox.png)

# Ejercicio 5
## Darse de alta en una web que permita hacer pruebas con alguno de los sistemas de gestión de nube libres como los mencionados en los párrafos anteriores, aunque sea temporalmente. Si la prueba es menos de un mes, simplemente anotarlo y dejarlo para el mes de diciembre, más o menos.

Para esta parte voy a utilizar Microsoft Azure, proporciona un mes de prueba gratis pero he decidido no resgistrarme aún.

![Error mostrar imagen](https://github.com/josemip98/EjerciciosIV/blob/master/Tema%201/Images/azure.png)
