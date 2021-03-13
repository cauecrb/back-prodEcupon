import express, { response } from 'express';
import './database/connection';
import route from './routes';

const app = express();

app.use(express.json());
app.use(route);



//iniciando o servidor e a porta em que a api sera executada.

app.listen(3030);