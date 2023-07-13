import { Router } from "express";
import { obtenerListaTareas, crearTarea } from "../controllers/tareas.controllers";
const router = Router();


router.route("/tareas").get(obtenerListaTareas).post(crearTarea)

export default router;