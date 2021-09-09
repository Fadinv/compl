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
exports.ContactResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Product_1 = require("../entities/Product");
const Note_1 = require("../entities/Note");
let ContactResolver = class ContactResolver {
    updateContact({ em }, id, contactName) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield em.findOne(Product_1.Contact, { id: id });
            if (!contact)
                return null;
            contact.contactName = contactName;
            yield em.persistAndFlush(contact);
            return contact;
        });
    }
    getContacts({ em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield em.find(Product_1.Contact, {}, ['notes']);
            return contact;
        });
    }
    getContact({ em }, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield em.findOne(Product_1.Contact, { id: id }, ['notes']);
            return contact;
        });
    }
    createContact({ em }, contactName) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = em.create(Product_1.Contact, { contactName: contactName });
            yield em.persistAndFlush(contact);
            return contact;
        });
    }
    deleteContact({ em }, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield em.findOne(Product_1.Contact, { id: id }, ['notes']);
            if (!contact)
                return;
            for (let n of contact.notes) {
                if (n === undefined || n === null)
                    return;
                yield em.nativeDelete(Note_1.Note, { idNote: n.idNote });
            }
            return em.nativeDelete(Product_1.Contact, { id: id });
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Product_1.Contact, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('id')),
    __param(2, (0, type_graphql_1.Arg)('contactName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "updateContact", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Product_1.Contact]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "getContacts", null);
__decorate([
    (0, type_graphql_1.Query)(() => Product_1.Contact, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "getContact", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Product_1.Contact, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('contactName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "createContact", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "deleteContact", null);
ContactResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ContactResolver);
exports.ContactResolver = ContactResolver;
//# sourceMappingURL=contact.js.map