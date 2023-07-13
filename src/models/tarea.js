import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea: {
        type: String,
        minLength: 2,
        maxLenght: 70,
        required: true,
    },
});

const Tarea = model("tarea", tareaSchema);

export default Tarea;