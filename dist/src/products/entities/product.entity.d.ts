import { CategoryEntity } from "src/categories/entities/category.entity";
import { OrdersProductsEntity } from "src/orders/entities/orders-products.entity";
import { ReviewEntity } from "src/reviews/entities/review.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Timestamp } from "typeorm";
export declare class ProductEntity {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
    addedBy: UserEntity;
    category: CategoryEntity;
    reviews: ReviewEntity[];
    products: OrdersProductsEntity[];
}
