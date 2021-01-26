"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagingHeaderComponent = void 0;
var core_1 = require("@angular/core");
var PagingHeaderComponent = /** @class */ (function () {
    function PagingHeaderComponent() {
        this.pageNumber = 0;
        this.pageSize = 0;
        this.totalCount = 0;
    }
    PagingHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], PagingHeaderComponent.prototype, "pageNumber");
    __decorate([
        core_1.Input()
    ], PagingHeaderComponent.prototype, "pageSize");
    __decorate([
        core_1.Input()
    ], PagingHeaderComponent.prototype, "totalCount");
    PagingHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-paging-header',
            templateUrl: './paging-header.component.html',
            styleUrls: ['./paging-header.component.scss']
        })
    ], PagingHeaderComponent);
    return PagingHeaderComponent;
}());
exports.PagingHeaderComponent = PagingHeaderComponent;
