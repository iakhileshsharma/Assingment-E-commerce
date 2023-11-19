import { ProductEntity } from "src/products/entities/product.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Timestamp } from "typeorm";
export declare class ReviewEntity {
    id: number;
    ratings: number;
    comment: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    user: UserEntity;
    product: ProductEntity;
}
