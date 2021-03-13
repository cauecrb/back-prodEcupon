import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('cupons')
export default class Prod{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    valor: number;

    @Column()
    prod: number;
}