import { CategoryEntity } from 'src/categories/entities/category.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { ReviewEntity } from 'src/reviews/entities/review.entity';
import { Roles } from 'src/utility/common/user-roles.enum';
import { Timestamp } from 'typeorm';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    roles: Roles[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    categories: CategoryEntity[];
    products: ProductEntity[];
    reviews: ReviewEntity[];
    ordersUpdateBy: OrderEntity[];
    orders: OrderEntity[];
}
