import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    create(createCategoryDto: CreateCategoryDto, currentUser: UserEntity): Promise<CategoryEntity>;
    findOne(id: number): Promise<CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
    update(id: number, fields: Partial<UpdateCategoryDto>): Promise<CategoryEntity>;
    remove(id: number): string;
}
