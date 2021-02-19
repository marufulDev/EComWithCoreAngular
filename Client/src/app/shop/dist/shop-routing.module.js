"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopRoutingModule = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var shop_component_1 = require("./shop.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var routes = [
    { path: '', component: shop_component_1.ShopComponent },
    { path: 'shop/:id', component: product_detail_component_1.ProductDetailComponent }
];
var ShopRoutingModule = /** @class */ (function () {
    function ShopRoutingModule() {
    }
    ShopRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], ShopRoutingModule);
    return ShopRoutingModule;
}());
exports.ShopRoutingModule = ShopRoutingModule;
