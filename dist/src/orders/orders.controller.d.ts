import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { OrderEntity } from './entities/order.entity';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, currentUser: UserEntity): Promise<OrderEntity>;
    findOne(id: string): Promise<OrderEntity>;
    findAll(): Promise<OrderEntity[]>;
    update(id: string, updateOrderStatusDto: UpdateOrderStatusDto, currentUser: UserEntity): Promise<OrderEntity>;
    cancelled(id: string, cureentUser: UserEntity): Promise<OrderEntity>;
    remove(id: string): string;
}
