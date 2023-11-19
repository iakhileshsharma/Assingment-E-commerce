import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { CategoryEntity } from './entities/category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto, currentUser: UserEntity): Promise<CategoryEntity>;
    findOne(id: string): Promise<CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
    remove(id: string): string;
}
