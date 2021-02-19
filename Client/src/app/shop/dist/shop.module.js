"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopModule = void 0;
var shop_routing_module_1 = require("./shop-routing.module");
var shared_module_1 = require("./../shared/shared.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shop_component_1 = require("./shop.component");
var product_item_component_1 = require("./product-item/product-item.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        core_1.NgModule({
            declarations: [shop_component_1.ShopComponent, product_item_component_1.ProductItemComponent, product_detail_component_1.ProductDetailComponent],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                shop_routing_module_1.ShopRoutingModule
            ]
        })
    ], ShopModule);
    return ShopModule;
}());
exports.ShopModule = ShopModule;
