import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import Prod from '../models/Products';
import prodView from '../views/prod_list';

export default {

    //controller para listar os usuarios do banco
    async index(request: Request, response: Response){
        const prodsRepository = getRepository(Prod);

        const prods = await prodsRepository.find();

        return response.json(prodView.renderMany(prods));    },

    //controller para listar um usuario
    async show(request: Request, response: Response){
        const {id} = request.params;
        const prodsRepository = getRepository(Prod);

        const prod = await prodsRepository.findOneOrFail(id);

        return response.json(prodView.render(prod));
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const prodsRepository = getRepository(Prod);

        await prodsRepository.delete(id);

        const prods = await prodsRepository.find();

        return response.json(prodView.renderMany(prods)); 
    },

    //controller para criar um usuario no banco
    async create(request: Request, response: Response) {
        const{
            nome,
            descricao,
            valor,
            cupons,
        } = request.body;
    
        const prodsRepository = getRepository(Prod);
    
        const prod = prodsRepository.create({
            nome,
            descricao,
            valor,
            cupons,
        });
    
        await prodsRepository.save(prod);
    
        return response.status(201).json(prod);
    }
};