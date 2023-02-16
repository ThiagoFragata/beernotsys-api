import express from 'express';
import cors from 'cors';
import temperatureRouter from './routes/temperature.router';

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.json({
    message: 'Hello beernotsys api!',
  })
})

server.use('/Temperatura', temperatureRouter);

server.listen(8000, () => {
  console.log('Servidor iniciado na porta 8000');
});