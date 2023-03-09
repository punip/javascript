// array 

const et = [];
// arrays in javascript are objects

const cars = ['porsche','mercedes'];

console.log(et,et.length);
console.log(cars);

console.log(cars.length);

cars.push('BMW', 'gtr');
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift('BMW','supra');
console.log(cars);

cars.shift();
console.log(cars);

cars.splice(2,0, 'mustang');
console.log(cars);

// update element
cars[1]= 'audi';
console.log(cars);

//access element
console.log(cars[0]);
console.log(cars[cars.length - 1]);

console.log(cars.includes('BMW'));

const copyCars = [...cars];

cars.reverse();
console.log(cars);
console.log(copyCars);

console.log(cars.slice(0, 3));
 for(let i =0; i<cars.length; i++){
    console.log(cars[i].toUpperCase());

 }
 

// enhance for loop 
for (const cars of copyCars) {
    console.log(cars.toUpperCase());
    
}







