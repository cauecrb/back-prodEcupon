import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProd1615579825205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'prod',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome',
                    type: 'text'
                },
                {
                    name: 'descricao',
                    type: 'text',
                },
                {
                    name: 'valor',
                    type: 'integer',
                },
                {
                    name: 'cupons',
                    type: 'integer',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('prod')
    }

}
