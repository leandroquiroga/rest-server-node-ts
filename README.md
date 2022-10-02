# Rest Server with Node.js - TypeScript - MYSQL

Este es un pequeño rest server creado con Node.js, Express.js ,TypeScript, Sequelize y MySql
que aplica los 4 metodos mas importantes a la hora de realizar un CRUD

## Herramientas 🛠️
* Node.js
* Express.js
* Typescript
* Sequelize
* MySql
* Dotenv
* Cors

## Correr el programa 

```
  git clone https://github.com/leandroquiroga/rest-server-node-ts.git

  cd rest-server-node-ts

  // via npm

  npm install
  npm run dev
  npm run tsc-watch

  // via yarn

  yarn insttall
  yarn run dev
  yarn run tsc-watch


  // Mensaje en consola
  
  Server running on => http://localhost:8000
  Executing (default): SELECT 1+1 AS result
  Database connect success

```

## Funcionalidades ⚙️

### GET
http://localhost:8000/api/users retorna todos los usuarios en la base de datos

### POST 
http://localhost:8000/api/users/new Crea un nuevo usuario

### UPDATE 
http://localhost:8000/api/users/change/:id Modificar los datos del usario 

### DELETE 
http://localhost:8000/api/users/:id Elimina un registro de la base de datos 

* Aclaracion, no lo elimina fisicamente, sino modifica su estado. 



# Deploy 👨‍💻
* Proximamente
# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);