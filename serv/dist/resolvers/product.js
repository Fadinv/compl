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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Product_1 = require("../entities/Product");
let ProductResolver = class ProductResolver {
    products({ em }) {
        return __awaiter(this, void 0, void 0, function* () {
            return em.find(Product_1.Product, {});
        });
    }
    product({ em }, idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            return em.findOne(Product_1.Product, { idProduct });
        });
    }
    updateProduct({ em }, idProduct, name, description, price) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield em.findOne(Product_1.Product, { idProduct });
            if (!note)
                return;
            note.name = name;
            note.price = price;
            note.description = description;
            yield em.persistAndFlush(note);
            return true;
        });
    }
    deleteProduct({ em }, idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield em.findOne(Product_1.Product, { idProduct });
            if (!note)
                return false;
            yield em.removeAndFlush(note);
            return true;
        });
    }
    createProduct({ em }, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = em.create(Product_1.Product, { name });
            yield em.persistAndFlush(product);
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Product_1.Product]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    (0, type_graphql_1.Query)(() => Product_1.Product),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('idProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('idProduct')),
    __param(2, (0, type_graphql_1.Arg)('name')),
    __param(3, (0, type_graphql_1.Arg)('description')),
    __param(4, (0, type_graphql_1.Arg)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, String, Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('idProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.js.map