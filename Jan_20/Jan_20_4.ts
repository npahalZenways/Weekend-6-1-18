// export module m1{
// 	export class school{

// 	}
// }

function setSkill(target){
	target.prototype.skill = 'batting';
}

// class decorator
@setSkill
class game{
	skill;
	getSkill(){
		return this.skill;
	}
}

var player = new game();

console.log(player.skill)

function changeSkill(param){
	return function(target){
		target.prototype.skill = param;
	}
}

// parametrized class decorator

@changeSkill('goal-keeper')
class football{
	skill;
}

var myPlayer = new football();
console.log(myPlayer.skill)