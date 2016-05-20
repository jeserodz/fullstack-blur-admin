FullStack Blur-Admin
=====================
Ejemplo de aplicación full-stack con Node.js (Express, Sequelize, MySQL) en el back-end y Blur-Admin en el front-end.

Introducción
-----------
Una aplicación fullstack javascript está compuesta por dos partes: el back-end y el front-end. 

El **back-end** es la parte no visible por los usuarios finales. Provee los archivos el que usuario visualiza y maneja las conexiones a base de datos. Para este ejemplo, el back-end está basado en Node.js y MySQL.

El **front-end** es la parte visible por los usuarios finales. Todo lo que conlleva diseño web, animaciones e interactividad entre el usuario y la aplicación se maneja en esta parte. Para este ejemplo el front-end esta basado en el template Blur-Admin (HTML + CSS + JavaScript (AngularJS)).

Guía de Uso
-----------

 **1. Descargue el proyecto en su equipo**

    $ git clone http://github.com/jeserodz/fullstack-blur-admin.git
    
 **2. Cambie al directorio del proyecto recién creado**

    $ cd fullstack-blur-admin

 **3. Instale las dependencias del proyecto y ponga en marcha el servidor **
 
    $ npm install
    $ node .

 **4. Abra una nueva terminal en el directorio de blur-admin, instale las dependencias de blur-admin, y ponga en marcha el pre-visualizador de Blur-Admin en 'Modo-Desarrollo'**
 

    ⌘+T
    $ cd front-end
    $ npm install
    $ gulp serve

**Nota importante**: Blur-Admin es un template que utiliza una cantidad considerable de paquetes de Bower y módulos de AngularJS. Por lo que su instalación puede tardar varios minutos dependiendo de la velocidad de su equipo y la conexión a Internet.

El código Angular en Blur-Admin para consumir la base de datos está dentro de los ejemplo de Tables en el temple: **`/front-end/src/app/pages/tables/TablesPageCtrl.js`**

La vista del contenido de la base de datos está en: **`/front-end/src/app/pages/tables/usuarios/table.html`**