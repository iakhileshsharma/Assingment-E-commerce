import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly categoryService;
    constructor(productRepository: Repository<ProductEntity>, categoryService: CategoriesService);
    create(createProductDto: CreateProductDto, currentUser: UserEntity): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    update(id: number, updateProductDto: Partial<UpdateProductDto>, currentUser: UserEntity): Promise<ProductEntity>;
    updateStock(id: number, stock: number, status: string): Promise<ProductEntity>;
    remove(id: number): string;
}
