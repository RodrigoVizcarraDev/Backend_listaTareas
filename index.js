import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// INSTANCIAMOS UN OBJETO DE LA CLASE express
const app = express();

// SETEAMOS UN PUERTO con el objeto app y su metodo set
app.set("port", process.env.PORT || 4000);

// ESCUCHAMOS A ESE PUERTO
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"))
});

// middlewares: funciones que se ejecutan antes de las rutas 
app.use(cors()) // permitir conexiones remotas PUT GET POST DELETE
app.use(express.json()) // Permite a mi aplicacion recibir objetos de tipo json en los request
app.use(morgan("dev")) // Mostrara en entorno de dev, informacion sobre las peticiones que hagamos al backend
console.log(path.join(__dirname, "/public")); // La variable __dirname siempre devuelve la ruta absoluta de donde este alojado el proyecto
app.use(express.static(path.join(__dirname, "/public"))) // Esto nos permite poder ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend
// http://localhost:4000