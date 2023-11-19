"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTBLCategory1697911677785 = void 0;
class AddTBLCategory1697911677785 {
    constructor() {
        this.name = 'AddTBLCategory1697911677785';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addedById" integer, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_f98c5a74d02c74694392026011f" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_f98c5a74d02c74694392026011f"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
exports.AddTBLCategory1697911677785 = AddTBLCategory1697911677785;
//# sourceMappingURL=1697911677785-addTBL_category.js.map