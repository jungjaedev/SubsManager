import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1642259381759 implements MigrationInterface {
    name = 'UserMigration1642259381759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USER\` ADD \`TEST\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`USER\` DROP COLUMN \`TEST\``);
    }

}
