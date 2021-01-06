// var benObject = {
// 	firstName: 'Ben',
// 	lastName: 'Olayiwola',
// 	age: '29 years',
// 	favColors: ['blue', 'grey', 'black'],
// 	isMale: true;
// }


// var dosomething = function () {
// 	console.log ('do something!!!')
// }
// // dosomething
// // dosomething ()



// // FUNCTIONS
// var whatIsMyFavcolor = function (){
// 	return 'blue';
// }
// // whatIsMyFavcolor()


// var fullname = function (firstName, lastName) {
// 	return firstName + lastName;
// }
// // fullname('Ben','Ola')


// // IF STATEMENT
// if (true) {
// 	alert ('male');
// }

// -----------------------------------

console.log ("My friends are Ballers!");
		var car = {
			make: 'VW',
			type: 'Polo',
			color: 'Blue',
			isTurnedOn: false,
			numberOfwheels: 4,
			seats: ['seat1', 'seat2', 'seat3', 'seat4'],
			turnedOn: function (){
			this.isTurnedOn = true;
			},
			fly: function (){
				alert('fly!!!!!!!!!!!!!!!!!!!!!!!');
			},
			switchCar: function (isOn){
				console.log ('turn car is on?', '' + isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};



console.log ('Where is the car?')


var whatIsMyName = function (name){
	alert ('My name is:' + name);
}


var doCoolStuff = function (){
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}



// var currentClassName = function (){
// 	document.getElementById('cool').className;}
