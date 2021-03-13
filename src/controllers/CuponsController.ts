import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import Cupon from '../models/Cupons';
import cuponView from '../views/cupons_list';

export default {

    //controller para listar os usuarios do banco
    async index(request: Request, response: Response){
        const cuponsRepository = getRepository(Cupon);

        const cupons = await cuponsRepository.find();

        return response.json(cuponView.renderMany(cupons));
    },

    //controller para listar um usuario
    async show(request: Request, response: Response){
        const {id} = request.params;
        const cuponsRepository = getRepository(Cupon);

        const cupon = await cuponsRepository.findOneOrFail(id);

        return response.json(cuponView.render(cupon));
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const cuponsRepository = getRepository(Cupon);

        await cuponsRepository.delete(id);

        const cupons = await cuponsRepository.find();

        return response.json(cuponView.renderMany(cupons));
    },

    //controller para criar um usuario no banco
    async create(request: Request, response: Response) {
        const{
            nome,
            descricao,
            valor,
            prod,
        } = request.body;
    
        const cuponsRepository = getRepository(Cupon);
    
        const cupon = cuponsRepository.create({
            nome,
            descricao,
            valor,
            prod,
        });
    
        await cuponsRepository.save(cupon);
    
        return response.status(201).json(cupon);
    }
};