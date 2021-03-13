import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCupons1615583761230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'cupons',
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
                    name: 'prod',
                    type: 'integer',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cupons')
    }

}
