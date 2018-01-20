var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function setSkill(target) {
    target.prototype.skill = 'batting';
}
var game = (function () {
    function game() {
    }
    game.prototype.getSkill = function () {
        return this.skill;
    };
    game = __decorate([
        setSkill
    ], game);
    return game;
}());
var player = new game();
console.log(player.skill);
function changeSkill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
var football = (function () {
    function football() {
    }
    football = __decorate([
        changeSkill('goal-keeper')
    ], football);
    return football;
}());
var myPlayer = new football();
console.log(myPlayer.skill);
//# sourceMappingURL=Jan_20_4.js.map