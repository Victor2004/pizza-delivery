import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1716633446983 implements MigrationInterface {
    name = 'Migration1716633446983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pizza" ("ProductID" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "ProductName" text NOT NULL, "ProductTypeID" integer NOT NULL, "Price" decimal(10,2) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pizza"`);
    }

}
