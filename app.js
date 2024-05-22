var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
            this.price = 100;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.addDamage = function (damage) {
        this.damages.push(damage);
    };
    return Vehicle;
}());
var EuroTruck = /** @class */ (function (_super) {
    __extends(EuroTruck, _super);
    function EuroTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuroTruck.prototype.setDamages = function (km) {
        this.run = km / 0.62;
    };
    return EuroTruck;
}(Vehicle));
new Vehicle();
new EuroTruck();
