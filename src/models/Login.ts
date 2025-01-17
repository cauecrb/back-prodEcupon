import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('login')
export default class Login{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password= bcrypt.hashSync(this.password, 8);
    }
}