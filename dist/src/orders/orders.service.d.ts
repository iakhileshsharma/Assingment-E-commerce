import { CreateOrderDto } from './dto/create-order.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrdersProductsEntity } from './entities/orders-products.entity';
import { ProductsService } from 'src/products/products.service';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly opRepository;
    private readonly productService;
    constructor(orderRepository: Repository<OrderEntity>, opRepository: Repository<OrdersProductsEntity>, productService: ProductsService);
    create(createOrderDto: CreateOrderDto, currentUser: UserEntity): Promise<OrderEntity>;
    findOne(id: number): Promise<OrderEntity>;
    findAll(): Promise<OrderEntity[]>;
    update(id: number, updateOrderStatusDto: UpdateOrderStatusDto, currentUser: UserEntity): Promise<OrderEntity>;
    stockUpdate(order: OrderEntity, status: string): Promise<void>;
    cancelled(id: number, cureentUser: UserEntity): Promise<OrderEntity>;
    remove(id: number): string;
}
