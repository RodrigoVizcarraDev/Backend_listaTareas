import { Router } from "express";
import { obtenerListaTareas, crearTarea, obtenerTarea, borrarTarea, editarTarea } from "../controllers/tareas.controllers";
const router = Router();


router.route("/tareas").get(obtenerListaTareas).post(crearTarea)
router.route("/tareas/:id").get(obtenerTarea).delete(borrarTarea).put(editarTarea)

export default router;