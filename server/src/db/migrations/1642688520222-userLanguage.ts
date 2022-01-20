import {MigrationInterface, QueryRunner} from "typeorm";

export class userLanguage1642688520222 implements MigrationInterface {
    name = 'userLanguage1642688520222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`languageId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`languageId\``);
    }

}
