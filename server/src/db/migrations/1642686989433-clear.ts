import {MigrationInterface, QueryRunner} from "typeorm";

export class clear1642686989433 implements MigrationInterface {
    name = 'clear1642686989433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_aa034452ca75781e94dcaf72721\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`currencyId\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`languageId\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`languageId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`currencyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_aa034452ca75781e94dcaf72721\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
