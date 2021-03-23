# Prueba Técnica Backend Node.js

- BRANDON BARRETO LOZANO
- INGENIERO DE SISTEMA
- BARRANQUILLA/COLOMBIA

# Descripción

Para la construcción de la solución utilice el ORM sequelize el cual me genero unos pequeños retos, pero fue interesante la implementación y el aprender una nueva herramienta, la decisión de implementar un ORM es gracias a la experiencia de trabajar con Framework como Django y ruby on rails los cuales tienen sus propios ORM y facilitan el desarrollo agil de aplicaciones 

## Entregables
- Repositorio https://github.com/bbarreto5/surempre_prueba

- La Herramienta sequelize-cli nos permite crear la Base de datos, correr migraciones e importar datos de una forma fácil y sencilla

## Extras :
- Documentación del API Swagger o Postman: En el Repositorio adiciones dos archivos de importación a postman de las rutas para prueba de forma local ("serempre.postman_collection.json") y las rutas de pruebas de la instancia ec2 en AWS ("serempre.postman_collection.json") 

- Desplegar en un servidor web Azure, AWS, Google Cloud: Creé un ec2 donde está corriendo la aplicación con ip publica y puerto http://52.14.96.194:3000/ que se conecta a una instancia de motor base datos Postgres 11 en Google Cloud la cual esta restringida a las peticiones de la ip de la ec2 de AWS 

## Base de datos
- postgres (PostgreSQL) 11.11 (Ubuntu 11.11-1.pgdg20.04+1)

# Instalación

## Requerimientos

- node v14.16.0
- postgres (PostgreSQL) 11.11 (Ubuntu 11.11-1.pgdg20.04+1)
- sequelize-cli 6.2.0 instalado de forma global

## Paso a paso

- clonar repositorio https://github.com/bbarreto5/surempre_prueba
- cd surempre_prueba/Proyecto
- Modificar los valores del entorno development en el archivo config/config.json
- sequelize db:create
- sequelize db:migrate
- sequelize db:seed:all (Este comando se encarga de importar los datos de los archivos CSV que se encuentran en la carpeta Datos)
- npm run start
