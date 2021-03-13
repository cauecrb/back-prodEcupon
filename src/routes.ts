import { response, Router } from 'express';
import ProdController from './controllers/ProdController';
import CuponsController from './controllers/CuponsController';
import LoginController from './controllers/LoginController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';

const route = Router();

//rotas para produtos
route.get('/produtos', ProdController.index );
route.get('/produto/:id', ProdController.show );
route.post('/produto', authMiddleware, ProdController.create);
route.delete('/produto',authMiddleware , ProdController.delete);

//rotas para cupons
route.get('/cupons', CuponsController.index );
route.get('/cupon/:id', CuponsController.show);
route.post('/cupon', authMiddleware, CuponsController.create);
route.delete('/cupon',authMiddleware , CuponsController.delete);

//rotas para logins
route.post('/login', LoginController.create);
route.post('/auth', AuthController.authenticate);

export default route;