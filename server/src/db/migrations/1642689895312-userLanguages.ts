import {MigrationInterface, QueryRunner} from "typeorm";

export class userLanguages1642689895312 implements MigrationInterface {
    name = 'userLanguages1642689895312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`languageId\` \`languageId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`User\` CHANGE \`languageId\` \`languageId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
