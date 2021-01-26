"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ShopComponent = void 0;
var core_1 = require("@angular/core");
var shopParams_1 = require("../shared/models/shopParams");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(shopService) {
        this.shopService = shopService;
        this.shopParams = new shopParams_1.ShopParams();
        this.totalCount = 0;
        this.sortOptions = [
            { name: 'Alphabetical', value: 'name' },
            { name: 'Price: Low to High', value: 'priceAsc' },
            { name: 'Price: High to Low', value: 'priceDesc' }
        ];
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getBrands();
        this.getProductTypes();
    };
    ShopComponent.prototype.getProducts = function () {
        var _this = this;
        this.shopService.getProducts(this.shopParams).subscribe(function (response) {
            var _a, _b, _c;
            _this.products = response === null || response === void 0 ? void 0 : response.data;
            _this.shopParams.pageSize = (_a = response === null || response === void 0 ? void 0 : response.pageSize) !== null && _a !== void 0 ? _a : 1;
            _this.shopParams.pageNumber = (_b = response === null || response === void 0 ? void 0 : response.pageIndex) !== null && _b !== void 0 ? _b : 0;
            _this.totalCount = (_c = response === null || response === void 0 ? void 0 : response.count) !== null && _c !== void 0 ? _c : 0;
        }, function (error) {
            console.log(error);
        });
    };
    ShopComponent.prototype.getBrands = function () {
        var _this = this;
        this.shopService.getBrands().subscribe(function (response) {
            _this.brands = __spreadArrays([{ id: 0, name: 'All' }], response);
        }, function (error) {
            console.log(error);
        });
    };
    ShopComponent.prototype.getProductTypes = function () {
        var _this = this;
        this.shopService.getProductTypes().subscribe(function (response) {
            _this.types = __spreadArrays([{ id: 0, name: 'All' }], response);
        }, function (error) {
            console.log(error);
        });
    };
    ShopComponent.prototype.onBrandSelected = function (brandId) {
        this.shopParams.brandId = brandId;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    };
    ShopComponent.prototype.onTypeSelected = function (typeId) {
        this.shopParams.typeId = typeId;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    };
    ShopComponent.prototype.onSortSelected = function (sort) {
        this.shopParams.sort = sort;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    };
    ShopComponent.prototype.onPageChanged = function (event) {
        if (this.shopParams.pageNumber !== event) {
            this.shopParams.pageNumber = event;
            this.getProducts();
        }
    };
    ShopComponent.prototype.onSearch = function () {
        this.shopParams.search = this.searchTerm.nativeElement.value;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    };
    ShopComponent.prototype.onReset = function () {
        this.searchTerm.nativeElement.value = '';
        this.shopParams = new shopParams_1.ShopParams();
        this.getProducts();
    };
    __decorate([
        core_1.ViewChild('search', { static: false })
    ], ShopComponent.prototype, "searchTerm");
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'app-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.scss']
        })
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
