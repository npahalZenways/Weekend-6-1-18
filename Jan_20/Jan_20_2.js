"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var imports = require("./Jan_20_3");
var company = (function () {
    function company(name) {
        this.companyName = name;
    }
    return company;
}());
var car = (function (_super) {
    __extends(car, _super);
    function car(model, year, manufacturer, price) {
        var _this = _super.call(this, manufacturer) || this;
        _this.carModel = model;
        _this.carMakeYear = year;
        _this.carPrice = price;
        return _this;
    }
    car.prototype.getCarModel = function () {
        return this.carModel;
    };
    return car;
}(company));
var swift = new car('abc', 2018, 'maruti', 900000);
var nano = new car('bcd', 2017, 'tata', 100000);
console.log(swift.getCarModel(), nano.getCarModel());
console.log(swift.companyName);
var m2;
(function (m2) {
    var student = (function (_super) {
        __extends(student, _super);
        function student() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return student;
    }(imports.m1.school));
})(m2 || (m2 = {}));
//# sourceMappingURL=Jan_20_2.js.map