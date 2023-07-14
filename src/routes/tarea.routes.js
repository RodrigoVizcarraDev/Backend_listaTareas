import { Router } from "express";
import { obtenerListaTareas, crearTarea, obtenerTarea } from "../controllers/tareas.controllers";
const router = Router();


router.route("/tareas").get(obtenerListaTareas).post(crearTarea)
router.route("/tareas/:id").get(obtenerTarea)

export default router;