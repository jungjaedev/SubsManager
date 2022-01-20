import {MigrationInterface, QueryRunner} from "typeorm";

export class addcolumn1642694005908 implements MigrationInterface {
    name = 'addcolumn1642694005908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Currency\` ADD \`symbol\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Currency\` DROP COLUMN \`symbol\``);
    }

}
