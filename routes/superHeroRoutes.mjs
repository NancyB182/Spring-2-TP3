
import express from 'express';
import { 
    obtenerSuperHeroePorIdController, 
    obtenerTodosLosSuperHeroesController, 
    buscarSuperHeroesPorAtributoController, 
    obtenerSuperHeroesMayoresDe30Controller 
} from '../controllers/superheroesController.mjs';

export const router = express.Router();

router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
