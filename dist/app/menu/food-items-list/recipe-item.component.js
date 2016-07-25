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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var menu_service_1 = require("../menu.service");
var recipe_1 = require("../recipe");
var RecipeItemComponent = (function () {
    function RecipeItemComponent(route, menuService) {
        this.route = route;
        this.menuService = menuService;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeItemComponent.prototype.onSelected = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            //this.foodIndex = params['id1', 'id2'];
            _this.selectedFood = _this.menuService.getFoodItem(params['id1'], params['id2']);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeItemComponent.prototype, "recipe", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RecipeItemComponent.prototype, "recipeId", void 0);
    RecipeItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rb-recipe-item',
            templateUrl: 'recipe-item.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, menu_service_1.MenuService])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());
exports.RecipeItemComponent = RecipeItemComponent;
//# sourceMappingURL=recipe-item.component.js.map