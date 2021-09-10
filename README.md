Proyecto evaluable para la materia FrontEnd III, certified tech developer, digital house. <br>
Link: https://sofiviola.github.io/Entrega_FE3_Digital_House/

Consigna

Entonces, se requiere que en algún punto del código se utilicen:

Props.

Estados mediante this.state y setState.

Algún método del ciclo de vida.

En caso que necesites crear un componente que tenga estados, necesariamente deberás utilizar componentes de clase. En caso de tener alguno que no tenga la necesidad de utilizar estados, podés utilizar componentes funcionales.

La app

La aplicación que vas a crear se trata de un “Elige tu propia aventura”.

Te presentaremos un texto que describa una situación y dos opciones (A o B) para reaccionar ante la situación. Cada una de estas opciones te llevará por el recorrido de la historia de una forma u otra, dependiendo de tus elecciones.

Dentro de la carpeta "components", encontrarás un archivo llamado "data.json" en el cual verás un array de objetos, que es el que se utiliza para el texto de la historia así como también para las opciones.

Como podrás ver, se trata de una historia prácticamente lineal. Si elegís una opción, esta te dará un texto único. Sin embargo, tendrás las mismas consecuencias de si hubieras elegido la otra opción. Esto es así para evitar tener un JSON extremadamente confuso, con el cual tengas que perder mucho tiempo descifrando.

Otras funcionalidades

Tendrás la posibilidad de realizar funcionalidades extra que te darán la posibilidad de llegar a la nota máxima. Las mismas son las siguientes:

A medida que hagas elecciones "A" o "B", estas se irán registrando de la siguiente manera:

Se muestra en pantalla la última elección que realizó el usuario (por ejemplo, "Selección previa: A").

Se muestran todas las selecciones anteriores (por ejemplo, "Anteriores: A B A").

Tendrás a disposición un archivo llamado index.CSS dentro de la carpeta src para dejar la app algo más estética. Recordá asignar className a los distintos elementos que ahí se nombran. Igualmente el CSS no es algo que se evaluará, por lo tanto es completamente opcional.
