import {MigrationInterface, QueryRunner} from "typeorm";

export class relations1642356466028 implements MigrationInterface {
    name = 'relations1642356466028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_aa034452ca75781e94dcaf72721\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_d8b475991d7ff4fa1d36eee7685\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_f9b511825b98706f6dbf9ef5633\``);
        await queryRunner.query(`ALTER TABLE \`Service\` DROP FOREIGN KEY \`FK_67f107076d6bd8d3925d4c11064\``);
        await queryRunner.query(`DROP INDEX \`REL_6be4b9a468f76e02abbf30e77b\` ON \`User\``);
        await queryRunner.query(`DROP INDEX \`REL_aa034452ca75781e94dcaf7272\` ON \`User\``);
        await queryRunner.query(`DROP INDEX \`REL_67f107076d6bd8d3925d4c1106\` ON \`Service\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`typeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`periodId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD \`currencyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_aa034452ca75781e94dcaf72721\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_f9b511825b98706f6dbf9ef5633\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_d8b475991d7ff4fa1d36eee7685\` FOREIGN KEY (\`serviceId\`) REFERENCES \`Service\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_e381fbb812a51e7f1ce857a24ed\` FOREIGN KEY (\`typeId\`) REFERENCES \`Type\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_360aac91c2513c11c399fe11321\` FOREIGN KEY (\`periodId\`) REFERENCES \`Period\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_577ccf502f75375d726b3eddd77\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Service\` ADD CONSTRAINT \`FK_67f107076d6bd8d3925d4c11064\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Category\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Service\` DROP FOREIGN KEY \`FK_67f107076d6bd8d3925d4c11064\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_577ccf502f75375d726b3eddd77\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_360aac91c2513c11c399fe11321\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_e381fbb812a51e7f1ce857a24ed\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_d8b475991d7ff4fa1d36eee7685\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_f9b511825b98706f6dbf9ef5633\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_aa034452ca75781e94dcaf72721\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`currencyId\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`periodId\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP COLUMN \`typeId\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_67f107076d6bd8d3925d4c1106\` ON \`Service\` (\`categoryId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_aa034452ca75781e94dcaf7272\` ON \`User\` (\`currencyId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_6be4b9a468f76e02abbf30e77b\` ON \`User\` (\`languageId\`)`);
        await queryRunner.query(`ALTER TABLE \`Service\` ADD CONSTRAINT \`FK_67f107076d6bd8d3925d4c11064\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_f9b511825b98706f6dbf9ef5633\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_d8b475991d7ff4fa1d36eee7685\` FOREIGN KEY (\`serviceId\`) REFERENCES \`Service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_aa034452ca75781e94dcaf72721\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
