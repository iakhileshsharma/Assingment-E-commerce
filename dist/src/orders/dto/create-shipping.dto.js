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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShippingDto = void 0;
const class_validator_1 = require("class-validator");
class CreateShippingDto {
}
exports.CreateShippingDto = CreateShippingDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'phone format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'name format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Address can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'phone format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'City name can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'city format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'PostCode can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'PostCode format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "postCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'State can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'state format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Country can not be empty' }),
    (0, class_validator_1.IsString)({ message: 'Country format should be string' }),
    __metadata("design:type", String)
], CreateShippingDto.prototype, "country", void 0);
//# sourceMappingURL=create-shipping.dto.js.map