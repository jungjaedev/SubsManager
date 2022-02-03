import {MigrationInterface, QueryRunner} from "typeorm";

export class productUserProductCategory1642863614438 implements MigrationInterface {
    name = 'productUserProductCategory1642863614438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`display_name\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD \`productId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` ADD CONSTRAINT \`FK_24229a5d3af176650d8b14393c4\` FOREIGN KEY (\`productId\`) REFERENCES \`Product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Product\` ADD CONSTRAINT \`FK_896e2e0f6dfa6f80117a79e1d7e\` FOREIGN KEY (\`categoryId\`) REFERENCES \`Category\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Product\` DROP FOREIGN KEY \`FK_896e2e0f6dfa6f80117a79e1d7e\``);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP FOREIGN KEY \`FK_24229a5d3af176650d8b14393c4\``);
        await queryRunner.query(`ALTER TABLE \`UserProduct\` DROP COLUMN \`productId\``);
        await queryRunner.query(`DROP TABLE \`Product\``);
    }

}
