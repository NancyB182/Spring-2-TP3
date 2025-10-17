import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import { router } from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

await connectDB();

app.use('/api', router);

app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
