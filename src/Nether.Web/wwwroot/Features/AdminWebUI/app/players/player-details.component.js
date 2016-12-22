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
var core_1 = require("@angular/core");
var nether_api_1 = require("./../nether.api");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var PlayerDetailsComponent = (function () {
    function PlayerDetailsComponent(_api, _route) {
        this._api = _api;
        this._route = _route;
    }
    PlayerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call web service to get player frout the gamertag specified in the route
        this._route.params
            .switchMap(function (params) { return _this._api.getPlayer(params["tag"]); })
            .subscribe(function (player) { return _this.player = player; });
    };
    return PlayerDetailsComponent;
}());
PlayerDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: "app/players/player-details.html"
    }),
    __metadata("design:paramtypes", [nether_api_1.NetherApiService, router_1.ActivatedRoute])
], PlayerDetailsComponent);
exports.PlayerDetailsComponent = PlayerDetailsComponent;
//# sourceMappingURL=player-details.component.js.map