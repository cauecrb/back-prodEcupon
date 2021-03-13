import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import Login from '../models/Login';

export default {

    //controller para listar os Logins do banco
    async index(request: Request, response: Response){
        const loginsRepository = getRepository(Login);

        const logins = await loginsRepository.find();

        return response.json(logins);
    },

    //controller para listar um Login
    async show(request: Request, response: Response){
        const {id} = request.params;
        const loginsRepository = getRepository(Login);

        const login = await loginsRepository.findOneOrFail(id);

        return response.json(login);
    },

    async delete(request: Request, response: Response){
        const {id} = request.params;
        const loginsRepository = getRepository(Login);

        await loginsRepository.delete(id);

        const logins = await loginsRepository.find();

        return response.json(logins);
    },

    //controller para criar um usuario no banco
    async create(request: Request, response: Response) {
        const{
            email,
            password,
        } = request.body;
    
        const loginsRepository = getRepository(Login);
        
        const loginExists = await loginsRepository.findOne({ where: {email} });

        if (loginExists) {
            return response.sendStatus(409);
        }

        const login = loginsRepository.create({
            email,
            password,
        });
    
        await loginsRepository.save(login);
    
        return response.status(201).json(login);
    }
};