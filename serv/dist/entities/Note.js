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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
require("reflect-metadata");
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Contact_1 = require("./Contact");
let Note = class Note {
    constructor(contact) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.contact = contact;
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], Note.prototype, "idNote", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date' }),
    __metadata("design:type", Object)
], Note.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, core_1.Property)({ type: 'date', onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], Note.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, core_1.Property)({ type: 'text' }),
    __metadata("design:type", String)
], Note.prototype, "key", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, core_1.Property)({ type: 'text' }),
    __metadata("design:type", String)
], Note.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Contact_1.Contact),
    (0, core_1.ManyToOne)(() => Contact_1.Contact),
    __metadata("design:type", typeof (_a = typeof Contact_1.Contact !== "undefined" && Contact_1.Contact) === "function" ? _a : Object)
], Note.prototype, "contact", void 0);
Note = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [typeof (_b = typeof Contact_1.Contact !== "undefined" && Contact_1.Contact) === "function" ? _b : Object])
], Note);
exports.Note = Note;
//# sourceMappingURL=Note.js.map