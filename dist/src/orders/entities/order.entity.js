"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const order_status_enum_1 = require("../enums/order-status.enum");
const user_entity_1 = require("../../users/entities/user.entity");
const shipping_entity_1 = require("./shipping.entity");
const orders_products_entity_1 = require("./orders-products.entity");
let OrderEntity = class OrderEntity {
};
exports.OrderEntity = OrderEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeorm_1.Timestamp)
], OrderEntity.prototype, "orderAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: order_status_enum_1.OrderStatus, default: order_status_enum_1.OrderStatus.PROCESSING }),
    __metadata("design:type", String)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "shippedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], OrderEntity.prototype, "deliveredAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.ordersUpdateBy),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => shipping_entity_1.ShippingEntity, (ship) => ship.order, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", shipping_entity_1.ShippingEntity)
], OrderEntity.prototype, "shippingAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orders_products_entity_1.OrdersProductsEntity, (op) => op.order, { cascade: true }),
    __metadata("design:type", Array)
], OrderEntity.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.orders),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderEntity.prototype, "user", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'orders' })
], OrderEntity);
//# sourceMappingURL=order.entity.js.map