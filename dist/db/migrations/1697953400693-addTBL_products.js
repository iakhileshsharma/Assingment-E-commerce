"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTBLProducts1697953400693 = void 0;
class AddTBLProducts1697953400693 {
    constructor() {
        this.name = 'AddTBLProducts1697953400693';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "stock" integer NOT NULL, "images" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addedById" integer, "categoryId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_d7e7f53b786522ae18147bb853c" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_d7e7f53b786522ae18147bb853c"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }
}
exports.AddTBLProducts1697953400693 = AddTBLProducts1697953400693;
//# sourceMappingURL=1697953400693-addTBL_products.js.map