import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Login from '../models/Login';


export default {

    //controller para listar os Logins do banco
    async authenticate(request: Request, response: Response){
        const loginsRepository = getRepository(Login);
        const { 
            email,
            password
        } = request.body;

        const logins = await loginsRepository.findOne({ where: {email} });

        if(!logins){
            return response.sendStatus(401)
        }

        const isValidPassword = await bcrypt.compare(password, logins.password);

        if(!isValidPassword){
            return response.sendStatus(401);
        }

        const token = jwt.sign(
            { id: logins.id }, 
            'chaveDeSegurança', 
            { expiresIn: '20m' 
        });

 //       delete logins.password;

        return response.json({
            logins, 
            token,
        });
    },
};