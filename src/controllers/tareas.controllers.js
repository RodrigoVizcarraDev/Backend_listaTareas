import Tarea from "../models/tarea";

export const crearTarea = async (req, res) => {
    try {

        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: "La tarea se creo correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el producto",
        })
    }
}

export const obtenerListaTareas = async (req, res) => {
    try {
        // Pidiendo lista de tareas con find de mongoose al modelo Tarea
        const tareas = await Tarea.find();
        res.status(200).json(tareas);

    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al obtener lista de tareas",
        })
    }
}