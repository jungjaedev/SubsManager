import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryAddKo1642946390637 implements MigrationInterface {
    name = 'categoryAddKo1642946390637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Category\` ADD \`display_name_ko\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Category\` DROP COLUMN \`display_name_ko\``);
    }

}
