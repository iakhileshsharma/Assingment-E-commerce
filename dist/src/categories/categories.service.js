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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("./entities/category.entity");
const typeorm_2 = require("typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto, currentUser) {
        const category = this.categoryRepository.create(createCategoryDto);
        category.addedBy = currentUser;
        return await this.categoryRepository.save(category);
    }
    async findOne(id) {
        const category = await this.categoryRepository.findOne({
            where: { id: id },
            relations: { addedBy: true },
            select: {
                addedBy: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        });
        if (!category)
            throw new common_1.NotFoundException('category not found');
        return category;
    }
    async findAll() {
        return await this.categoryRepository.find();
    }
    async update(id, fields) {
        const category = await this.findOne(id);
        if (!category)
            throw new common_1.NotFoundException('category not found');
        Object.assign(category, fields);
        return await this.categoryRepository.save(category);
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map