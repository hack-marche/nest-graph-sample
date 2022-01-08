import { MigrationInterface, QueryRunner } from 'typeorm';

export class createBook1641555619229 implements MigrationInterface {
  name = 'createBook1641555619229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(30) NOT NULL, "author" varchar NOT NULL, "price" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
