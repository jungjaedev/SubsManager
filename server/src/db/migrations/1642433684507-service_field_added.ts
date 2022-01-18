import {MigrationInterface, QueryRunner} from "typeorm";

export class serviceFieldAdded1642433684507 implements MigrationInterface {
    name = 'serviceFieldAdded1642433684507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Service\` ADD \`display_name_ko\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Service\` DROP COLUMN \`display_name_ko\``);
    }

}
