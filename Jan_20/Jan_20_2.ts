// import { m1, m3 } from './Jan_20_3';
import * as imports from './Jan_20_3';
import { m1 } from './Jan_20_4';
//inheritance

class company{
	companyName;
	constructor(name){
		this.companyName = name;
	}
}


class car extends company{
	protected carModel : string;
	carMakeYear : number;
	carPrice : number;
	constructor(model:string, year, manufacturer, price){
		super(manufacturer);
		this.carModel = model;
		this.carMakeYear = year;
		this.carPrice = price;
	}
	getCarModel(){
		return this.carModel;
	}
}

var swift = new car('abc', 2018, 'maruti', 900000);

var nano = new car('bcd', 2017, 'tata', 100000);

console.log(swift.getCarModel(), nano.getCarModel());
console.log(swift.companyName);

//modules - collection of classes

module m2{
	class student extends imports.m1.school{
		studentName;
	}
}