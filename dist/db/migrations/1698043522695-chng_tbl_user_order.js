"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChngTblUserOrder1698043522695 = void 0;
class ChngTblUserOrder1698043522695 {
    constructor() {
        this.name = 'ChngTblUserOrder1698043522695';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "userId"`);
    }
}
exports.ChngTblUserOrder1698043522695 = ChngTblUserOrder1698043522695;
//# sourceMappingURL=1698043522695-chng_tbl_user_order.js.map