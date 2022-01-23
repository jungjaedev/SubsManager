import {MigrationInterface, QueryRunner} from "typeorm";

export class productAddKofield1642947519212 implements MigrationInterface {
    name = 'productAddKofield1642947519212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product\` ADD \`display_name_ko\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product\` DROP COLUMN \`display_name_ko\``);
    }

}
