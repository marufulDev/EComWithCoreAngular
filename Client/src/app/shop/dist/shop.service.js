"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ShopService = /** @class */ (function () {
    function ShopService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:5001/api/';
    }
    ShopService.prototype.getProducts = function (shopParams) {
        var params = new http_1.HttpParams();
        if (shopParams.brandId !== 0) {
            params = params.append('brandId', shopParams.brandId.toString());
        }
        if (shopParams.typeId !== 0) {
            params = params.append('typeId', shopParams.typeId.toString());
        }
        if (shopParams.search !== '' && shopParams.search) {
            params = params.append('search', shopParams.search.toString());
        }
        params = params.append('sort', shopParams.sort);
        params = params.append('pageIndex', shopParams.pageNumber.toString());
        params = params.append('pageSize', shopParams.pageSize.toString());
        return this.http.get(this.baseUrl + 'products', { observe: 'response', params: params })
            .pipe(operators_1.map(function (response) {
            return response.body;
        }));
    };
    ShopService.prototype.getBrands = function () {
        return this.http.get(this.baseUrl + 'products/brands');
    };
    ShopService.prototype.getProductTypes = function () {
        return this.http.get(this.baseUrl + 'products/types');
    };
    ShopService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
