import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('prod')
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
    cupons: number;
}