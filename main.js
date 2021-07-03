/*let poorCountry=['Bangladesh', 'Sirilanka']
let richCountry=[...poorCountry,'America', 'canda' , 'Italy']

console.log(richCountry)
*/

/*let poorCountry=['Bangladesh', 'Sirilanka']
let richCountry=['America', 'canda' , 'Italy']

richCountry.push(poorCountry);

console.log(richCountry)
*/

/*function Calculation(a,b,...numbers) {
    let sum = 0 ;
    for(let i of numbers) {
        sum = sum + i;
    }
    console.log(sum);
}

Calculation(10,20,1,2,3,4,5,8,9)
*/
/*var name=function(namevalue) {
    return namevalue;
}

console.log(name("sr sabbir"))
*/

/*var name='sabbir';
name='Rain' // Reasign... //var //let  not a const

console.log(name)
*/

 /*var name='sabbir';
 var name='Rain'; //Redeclear //var // not a const/let

 console.log(name);
*/
/*var name="ECMAScript6";

function myFun(){
    
    console.log(name);
}

myFun();
*/

/*name="sabbir"
console.log(name);
var name
*/

/*var i;
for(i=0;i<100;i++) {
    console.log("Allah")
}
*/
/*var MyCountry=['Dhaka', 'Rangpur', 'khulna', 'Barisal'];

for(let MyCity of MyCountry) {
console.log(MyCity);
}
*/
/*
var billGates={
    shirt:true,
    shirtColor:'offWhite',
    smile:true,
    sewatter:true,
    sewatterColor:'gray',
    chosma:true,
}

console.log(billGates['shirtColor']);


var billGatesPro={
    shirt:{
        color:"offWhite",
        Quality:"good",
        price:'200USD',
    },
    sewatter:{
        color:"Gray",
        Quality:"Good",
        price:'230USD',
        warm:"best",
    },
    face:{
        similing:"yes",
        chosma:"yes",
        teeth:"White,Big",
    }
}

console.log(billGatesPro['sewatter'] ['price'])
*/
/*
var billGates={
    shirt:true,
    shirtColor:'offWhite',
    smile:true,
    sewatter:true,
    sewatterColor:'gray',
    chosma:true,
}

for(let props in billGates) { 

    console.log(props+" = "+billGates[props]);
}
*/
/* 
var billGates={
    shirt:true,
    shirtColor:'offWhite',
    smile:true,
    sewatter:true,
    sewatterColor:'gray',
    chosma:true,
}

if(billGates['shirtColor']=="red") {

    console.log('shirt Color is red');

} else if (billGates['shirtColor']=="blue") {

    console.log('shirt Color is blue');

} else {

    console.log('shirt coolor is not Found');
}
*/

//sample function
/* 
function myName() {
    var x=10;
    var y=10;
    var z=x+y;
    console.log(z)
}
myName();
*/

// Parameterized function
/*function myName(x,y) {
    var z=x+y;
    console.log(z)
}
myName(30,20);
*/

//Rest Parameters
/*
function something(...x){
   console.log(x[5]);
}

something(1,2,3,4,5,6,7, 'A','B')
*/

//Returning function
/*
function Myfunction() {

    return 'bangladesh';
}
console.log(Myfunction())

function FunOne() {
    return 20;
}
function FunTwo() {
    return FunOne();
}

console.log(FunOne()+FunTwo()); 
*/
// Anonymous function 

/*var myFun=function(X){

    return X;
}
console.log(myFun('hello'));
*/
//Arrow Function

/*var myArrow=(X)=>{
    console.log(X);
}
myArrow('My first Arrow function');


var myArrow=(...X)=>{
    console.log(X);
}
myArrow(1,2,3,4,5,6);


var myArrow=()=>{
    return 'helllo';
}
console.log(myArrow())
*/

/*
var myArray=["A","B","C","D","E"];

var myArrayPro= new Array("A","B","C","D","E");

for(let item of myArray) {
    console.log(item);
}
*/

//Multidimensional arrays
/*
var bangladesh=["Dhaka", "Rangpur","sylhet"]
var india=["Mumbai", "Chennai", "Kolkata"]
var china=["Uhan","Shanghai","Hongkong"]

var asia=[bangladesh,india,china]

console.log(asia [1][2])
*/

// de structuring
/*var countries=['ban','ind','cana','pak']

var [a,c,,b]=countries
console.log(b)
*/
var myMap= new Map();
/*
myMap.set("key1", "Bangladesh")
myMap.set("key2", "India")
myMap.set("key3", "Sirilanka")
myMap.set("Key4", "Maldiv")
myMap.set("Key5","Bhutan")
myMap.set("Key6", "Nepal")
myMap.set("Key7","Thailand")

for(let myvalue of myMap.values()){
    console.log(myvalue)
}
*/
//Map
/*
var myMap= new Map();

myMap.set('Key1','Bangladesh')
myMap.set('Key2','india')
myMap.set('Key3','Maldiv')
myMap.set('Key4','Nepal')
myMap.set('Key5','Thiland')

console.log(myMap.values())
console.log(myMap.keys())  
*/
//map Delete
/*
var myMap= new Map();

myMap.set("key1", "Bangladesh")
myMap.set("key2", "India")
myMap.set("key3", "Sirilanka")
myMap.set("Key4", "Maldiv")
myMap.set("Key5","Bhutan")
myMap.set("Key6", "Nepal")
myMap.set("Key7","Thailand")

myMap.delete('Key1')
myMap.delete('Key2')
for(let myvalue of myMap.values()){
    console.log(myvalue)
}
*/
//map clear
/*
var myMap= new Map();

myMap.set("key1", "Bangladesh")
myMap.set("key2", "India")
myMap.set("key3", "Sirilanka")
myMap.set("Key4", "Maldiv")
myMap.set("Key5","Bhutan")
myMap.set("Key6", "Nepal")
myMap.set("Key7","Thailand")

myMap.clear();

for(let myvalue of myMap.values()){
    console.log(myvalue)
}
//map get
/*
var myMap= new Map();

myMap.set("key1", "Bangladesh")
myMap.set("key2", "India")
myMap.set("key3", "Sirilanka")
myMap.set("Key4", "Maldiv")
myMap.set("Key5","Bhutan")
myMap.set("Key6", "Nepal")
myMap.set("Key7","Thailand")

console.log(myMap.get("Key6"))
*/

//map  has
/*
var myMap= new Map();

myMap.set("key1", "Bangladesh")
myMap.set("key2", "India")
myMap.set("key3", "Sirilanka")
myMap.set("Key4", "Maldiv")
myMap.set("Key5","Bhutan")
myMap.set("Key6", "Nepal")
myMap.set("Key7","Thailand")

if(myMap.has('Key1')){
    console.log('YES');
}else {
    console.log('NO')
}
*/

