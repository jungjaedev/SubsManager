import {MigrationInterface, QueryRunner} from "typeorm";

export class currencyUserProduct1642863837213 implements MigrationInterface {
    name = 'currencyUserProduct1642863837213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD \`currencyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD CONSTRAINT \`FK_bac0c5b6dcf7f537534224961d2\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP FOREIGN KEY \`FK_bac0c5b6dcf7f537534224961d2\``);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP COLUMN \`currencyId\``);
    }

}
