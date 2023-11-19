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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const orders_products_entity_1 = require("./entities/orders-products.entity");
const shipping_entity_1 = require("./entities/shipping.entity");
const products_service_1 = require("../products/products.service");
const order_status_enum_1 = require("./enums/order-status.enum");
let OrdersService = class OrdersService {
    constructor(orderRepository, opRepository, productService) {
        this.orderRepository = orderRepository;
        this.opRepository = opRepository;
        this.productService = productService;
    }
    async create(createOrderDto, currentUser) {
        const shippingEntity = new shipping_entity_1.ShippingEntity();
        Object.assign(shippingEntity, createOrderDto.shippingAddress);
        const orderEntity = new order_entity_1.OrderEntity();
        orderEntity.shippingAddress = shippingEntity;
        orderEntity.user = currentUser;
        const orderTbl = await this.orderRepository.save(orderEntity);
        let opEntity = [];
        for (let i = 0; i < createOrderDto.orderedProducts.length; i++) {
            const order = orderTbl;
            const product = await this.productService.findOne(createOrderDto.orderedProducts[i].id);
            const product_quantity = createOrderDto.orderedProducts[i].product_quantity;
            const product_unit_price = createOrderDto.orderedProducts[i].product_unit_price;
            opEntity.push({
                order,
                product,
                product_quantity,
                product_unit_price
            });
        }
        const op = await this.opRepository.createQueryBuilder()
            .insert()
            .into(orders_products_entity_1.OrdersProductsEntity)
            .values(opEntity)
            .execute();
        return await this.findOne(orderTbl.id);
    }
    async findOne(id) {
        return await this.orderRepository.findOne({
            where: { id },
            relations: {
                shippingAddress: true,
                user: true,
                products: { product: true },
            }
        });
    }
    async findAll() {
        return await this.orderRepository.find({
            relations: {
                shippingAddress: true,
                user: true,
                products: { product: true },
            }
        });
    }
    async update(id, updateOrderStatusDto, currentUser) {
        let order = await this.findOne(id);
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if ((order.status === order_status_enum_1.OrderStatus.DELIVERED) || (order.status === order_status_enum_1.OrderStatus.CANCELLED)) {
            throw new common_1.BadRequestException(`Order already ${order.status}`);
        }
        if ((order.status === order_status_enum_1.OrderStatus.PROCESSING) && (updateOrderStatusDto.status === order_status_enum_1.OrderStatus.SHIPPED)) {
            throw new common_1.BadRequestException(`Delivery before shipped!!!`);
        }
        if ((updateOrderStatusDto.status === order_status_enum_1.OrderStatus.SHIPPED) && (order.status === order_status_enum_1.OrderStatus.SHIPPED)) {
            return order;
        }
        if (updateOrderStatusDto.status === order_status_enum_1.OrderStatus.SHIPPED) {
            order.shippedAt = new Date();
        }
        if (updateOrderStatusDto.status === order_status_enum_1.OrderStatus.DELIVERED) {
            order.deliveredAt = new Date();
        }
        order.status = updateOrderStatusDto.status;
        order.updatedBy = currentUser;
        order = await this.orderRepository.save(order);
        if (updateOrderStatusDto.status === order_status_enum_1.OrderStatus.DELIVERED) {
            await this.stockUpdate(order, order_status_enum_1.OrderStatus.DELIVERED);
        }
        return order;
    }
    async stockUpdate(order, status) {
        for (const op of order.products) {
            await this.productService.updateStock(op.product.id, op.product_quantity, status);
        }
    }
    async cancelled(id, cureentUser) {
        let order = await this.findOne(id);
        if (!order)
            throw new common_1.NotFoundException('order not found');
        if (order.status === order_status_enum_1.OrderStatus.CANCELLED)
            return order;
        order.status = order_status_enum_1.OrderStatus.CANCELLED;
        order.updatedBy = cureentUser;
        order = await this.orderRepository.save(order);
        await this.stockUpdate(order, order_status_enum_1.OrderStatus.CANCELLED);
        return order;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(orders_products_entity_1.OrdersProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        products_service_1.ProductsService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map