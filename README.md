# Obtener información completa de la matrícula 2
Este es un script muy simple para obtener toda la información de un vehículo utilizando solo la matrícula.

Funciona únicamente para vehículos registrados en España.


## Requisitos
-Deno
-Express `npm install express`
-Axios `npm install axios`

## Iniciar el servidor
- Inicia el servidor ejecutando `deno run api2.ts`
- Cuando veas "Listening", puedes comenzar a hacer peticiones

Servidor = 127.0.0.1:3001
## EndPoints

### GET

- Obtener toda la información (No esta formateada, debes parsearla tu)
  `/{Matricula}`

  Por ejemplo : GET http://127.0.0.1:3001/8371GYJ

  
