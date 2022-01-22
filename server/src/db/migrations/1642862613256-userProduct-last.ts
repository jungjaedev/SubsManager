import {MigrationInterface, QueryRunner} from "typeorm";

export class userProductLast1642862613256 implements MigrationInterface {
    name = 'userProductLast1642862613256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`UserProduct\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cost\` int NOT NULL, \`start_date\` timestamp NOT NULL, \`end_date\` timestamp NOT NULL, \`auto_renew\` tinyint NOT NULL, \`billing_cycle\` int NOT NULL, \`userId\` int NOT NULL, \`periodId\` int NOT NULL, \`typeId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD CONSTRAINT \`FK_21d66fd2789bd72306c3b3ec21b\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD CONSTRAINT \`FK_bc24a4d45679e70b75039f444f7\` FOREIGN KEY (\`periodId\`) REFERENCES \`Period\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD CONSTRAINT \`FK_82bb11b92353d6a914f02fcbf1b\` FOREIGN KEY (\`typeId\`) REFERENCES \`Type\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP FOREIGN KEY \`FK_82bb11b92353d6a914f02fcbf1b\``);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP FOREIGN KEY \`FK_bc24a4d45679e70b75039f444f7\``);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP FOREIGN KEY \`FK_21d66fd2789bd72306c3b3ec21b\``);
        await queryRunner.query(`DROP TABLE \`UserProduct\``);
    }

}
