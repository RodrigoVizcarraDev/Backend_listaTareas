import express from "express";

// INSTANCIAMOS UN OBJETO DE LA CLASE express
const app = express();

// SETEAMOS UN PUERTO con el objeto app y su metodo set
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"))
});