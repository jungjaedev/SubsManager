import {MigrationInterface, QueryRunner} from "typeorm";

export class userTable1642603035093 implements MigrationInterface {
    name = 'userTable1642603035093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`account\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`languageId\` int NOT NULL, \`currencyId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`UserService\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cost\` int NOT NULL, \`start_date\` timestamp NOT NULL, \`end_date\` timestamp NOT NULL, \`auto_renew\` tinyint NOT NULL, \`billing_cycle\` int NOT NULL, \`userId\` int NULL, \`serviceId\` int NULL, \`typeId\` int NULL, \`periodId\` int NULL, \`currencyId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_6be4b9a468f76e02abbf30e77b1\` FOREIGN KEY (\`languageId\`) REFERENCES \`Language\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_aa034452ca75781e94dcaf72721\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_f9b511825b98706f6dbf9ef5633\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_d8b475991d7ff4fa1d36eee7685\` FOREIGN KEY (\`serviceId\`) REFERENCES \`Service\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_e381fbb812a51e7f1ce857a24ed\` FOREIGN KEY (\`typeId\`) REFERENCES \`Type\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_360aac91c2513c11c399fe11321\` FOREIGN KEY (\`periodId\`) REFERENCES \`Period\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserService\` ADD CONSTRAINT \`FK_577ccf502f75375d726b3eddd77\` FOREIGN KEY (\`currencyId\`) REFERENCES \`Currency\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_577ccf502f75375d726b3eddd77\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_360aac91c2513c11c399fe11321\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_e381fbb812a51e7f1ce857a24ed\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_d8b475991d7ff4fa1d36eee7685\``);
        await queryRunner.query(`ALTER TABLE \`UserService\` DROP FOREIGN KEY \`FK_f9b511825b98706f6dbf9ef5633\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_aa034452ca75781e94dcaf72721\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_6be4b9a468f76e02abbf30e77b1\``);
        await queryRunner.query(`DROP TABLE \`UserService\``);
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
