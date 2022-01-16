import {MigrationInterface, QueryRunner} from "typeorm";

export class DBMigration1642348861034 implements MigrationInterface {
    name = 'DBMigration1642348861034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`REL_6be4b9a468f76e02abbf30e77b\` ON \`User\``);
        await queryRunner.query(`DROP INDEX \`REL_aa034452ca75781e94dcaf7272\` ON \`User\``);
        await queryRunner.query(`DROP INDEX \`REL_67f107076d6bd8d3925d4c1106\` ON \`Service\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`typeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`periodId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`currencyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_e381fbb812a51e7f1ce857a24ed\` FOREIGN KEY (\`typeId\`) REFERENCES \`Type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_360aac91c2513c11c399fe11321\` FOREIGN KEY (\`periodId\`) REFERENCES \`Period\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_577ccf502f75375d726b3eddd77\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_577ccf502f75375d726b3eddd77\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_360aac91c2513c11c399fe11321\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_e381fbb812a51e7f1ce857a24ed\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`currencyId\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`periodId\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`typeId\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_67f107076d6bd8d3925d4c1106\` ON \`Service\` (\`categoryId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_aa034452ca75781e94dcaf7272\` ON \`User\` (\`currencyId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_6be4b9a468f76e02abbf30e77b\` ON \`User\` (\`languageId\`)`);
    }

}
