// Array
//  const response = ["apple","orange","pinapple","Banana"]
//     response.slice(0,2)
//     console.log(response)

// console.log(response.length)

// response.push("gova")
// console.log(response)

//    for (let i =0; i < response.length;i++){
//     console.log(response[i])
//     }

// const arrow = (a,b) =>{
//     return a+b
// }
// console.log(arrow(5,3))

// Object

// const person =[{
//     id:1,
//     name:"akash",
//     phone:124356
//     },
//     {
//         id:2,
//         name:"Arun",
//         phone:124356
//     }
// ]

// console.log(person[0].name)
// person[0].call ="1237765"
// console.log(person)
// person[2].name="what"
// console.log(person)

// const intro =(name ,age,assets,debt )=>{
//     const person ={
//         name:name,
//         age:age,
//         assets:assets,
//         debt :debt,
//         sucess:function(){
//             return this.assets-this.debt
//         }
//     }
//     console.log(`my name is ${person.name} and my age is ${person.age} my networth is ${person.sucess()}`)

// }
// intro("arun",23,50000,10000)

// for loops

// const response = ["apple","orange","pinapple","Banana"]

//    for (let i =0; i < response.length;i++){
//     console.log(response[i])
//     }

// for (const fruit of response){  //this the simple method of for loop
//     console.log(fruit);    // of is get vaule

// }

// let result =[]
// const numbers =[1,2,3,4,5,6,7,8,9,0];
// for (const number of numbers){
//     console.log(number)
//     result.push(number)
// }
// console.log(result)

//  for (i=0; i < numbers.length;i++){
//     // console.log(numbers[i])
//     console.log(result.push(numbers))
//  }

// const double =(numbers) =>{              // duble function for math
//     let result =[];
//     for ( const number of numbers){
//         result.push(number*2)
//     }
//     return result
// }
// console.log(double([1,2,3,4,5,6]))

// const squre =(numbers) =>{             //squre function
//     let result =[];
//     for ( const number of numbers){
//         result.push(number**2)
//     }
//     return result
// }

// console.log(squre([1,2,3,4,5,6]))

// let tit = document.getElementsByClassName("h1")[0]; // Assuming you want the first element with the class "h1"
// tit.innerHTML = `<h1>${squre([1,2,3])}</h1>`;

// const countwords =() =>{
//     const words ="hi how are you  i think you better than me "
//         let index =0
//     for(const letter in words){                  // "in" key word show the index
//         // console.log(letter)                      // output : 1 2 3 4 ..42
//         index =letter
// }
//     return {result :index}
// }

// console.log(countwords());

// const countwords =() =>{
//     const words ="hi how are you  i think you better than me "
//     for(const letter of words){                  // "of" key word show the sucess
//         console.log(letter)                  // output : hi how.....me
//     }
//     return
// }

// countwords()

// const countwords =(words) =>{

//         let index =0
//     for(const letter in words){
//         index =letter
//         console.log(index)
// }
//     return {result :index}
// }
// const words =prompt("enter the words")    // get input from user using "prompt" key word

// console.log(countwords(words));

// const add =(number) =>{
//     let result =0
//     for ( const num of number){
//         result =result+num
//     }
//     return result

// }
// console.log(add([1,2,3,4]))

// Letter frequency find..........

// const letterfrequency =(sentance) =>{
//     let words ={}
//     for( const letter of sentance)
//     if (letter in words){
//         words[letter]=words[letter]+1       // Simple Method
//     }
//     else{
//         words[letter]=1
//     }
//     return words
// }
// console.log(letterfrequency("hello guys"))

// Word frequency.......................

// const wordfrequency =(sentance) =>{
//     let frequency ={}
//     let word = sentance.split(' ')
//     console.log(word)
//     for ( const letters of word){
//         console.log(letters)
//         if (letters in frequency){
//             frequency[letters] +=1
//         }else{
//             frequency[letters]=1
//         }
//     }
//     return frequency
// }
// console.log(wordfrequency("the world is pooor the world is good"))

// const wordfrequency =(sentance) =>{
//     let word = sentance.split(' ')
//     console.log(letterfrequency(word))       //call function letter frequency
//     return word
//     }

//    wordfrequency("the world is pooor the world is good")

// hours covert mins

//    const coverter =(hours)=>{
//     let mins = hours *60      // add anoter 60 we find secounds
//     console.log(`The ${hours} is has ${mins} minutes`)
//     return mins
//    }
//    coverter(3)

// Map Function ...........
// const products = [
//     {
//         id:1,
//         name:"varun",
//         age:21
//     },
//     {
//         id:2,
//         name:"arun",
//         age:25
//     }
// ]

// products.map(item =>{
//     console.log(item.name)

// })

// filter function ......................

//  const numbers =[1,,2,3,4,5,6,7,8]
//  console.log(numbers.filter(num => num > 3))
// let result =products.map(item => item.name).join("_")
//     let display =document.getElementById("ti")
//     display.innerHTML=`<h2>${result}</h2>`

// Reduce() function ..............................

// nums=[1,3,5]
//  const result=nums.reduce((prev ,nex)=> prev+nex)
//  console.log(result)

// const persons =[
//     {name:"John",
//         age:20,
//         networth:20000
//     },
//     {name:"antony",
//     age:20,
//     networth:20000
// },
// {name:"villiyam",
// age:20,
// networth:20000
// },
//  {name:"alax",
// age:20,
// networth:10000
// }
// ]
// const net = persons.reduce((a,b) => a + b.networth,0)
// console.log(net)

// setInterval(() => {
//     console.log("Helllo World")
// }, 2000);

// API

// const Actors = (id) => {
//     fetch(`${Main_URL}/${id}`)
//       .then((response) => response.json())   // its get json file
//       .then((data) => data );               // its get data from the json file
// console.log(data)}              // show the json file

// const promise1 = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     ready = [true, false][Math.floor(Math.random() * 2)];
//     ready ? reslove(" soup is ready 🍲") : reject("❌ Today not soup");
//   }, 1000);
// });

// const getsoup = async () => {
//   let data = { Rating: null, Pay: null, Tip: null };
//   try {
//     const soup = await promise1;
//     console.log(soup);
//     data.Rating = 5;
//     data.Pay = 10;
//     data.Tip = 0.3;
//     return data;
//   } catch (error) {
//     console.log(error);
//     data.Rating = 1;
//     data.Pay = 0;
//     data.Tip = 0;
//     return data;
//   }
// };

// getsoup().then((value) => console.log(value));

// const sum = async (a, b) => a + b;
// sum(1, 2).then((fuck) => console.log(fuck));

// Rules for using async and await

// const getdog = async()=>{
//     const URL ="https://dog.ceo/api/breeds/image/random"
//     const response =await fetch(URL)
//     const data = await response.json()
//     console.log(data)
// }
// getdog()

// class car {
//   constructor(name, color, speed, currentspeed) {
//     this.name = name;
//     this.color = color;
//     this.speed = speed;
//     this.currentspeed = 0;
//   }
//   drive() {
//     console.log("I am Driving");

//     this.currentspeed += 20;
//     console.log(this.currentspeed);
//   }
//   Stop() {
//     console.log("Ok I will stop the car");
//     this.currentspeed -= 20;
//     console.log(this.currentspeed);
//   }
//   start() {
//     console.log("Let's Go");
//   }
// }
// const benz = new car("Benz", "black", "300km/s");
// console.log(benz.currentspeed);
// console.log(benz)
// console.log(benz.speed)
// benz.drive();
// benz.drive();
// benz.drive();
// benz.Stop();

// benz.start()
// benz.Stop()

// const balance=document.getElementById("balance")
// const deposit=document.getElementById("deposit")
// const withdraw =document.getElementById("withdraw")

// class bank {
//   constructor(name, BankNum, balance) {
//     this.name = name;
//     this.BankNum = BankNum;
//     this.balance = 0;
//   }

//   deposit(addamount) {
//     this.balance +=addamount 
//     balance.innerText=`Balance:${this.balance}`
//   }
//   withdraw(Debitamount) {
//     if(this.balance >= Debitamount){  this.balance -= Debitamount
//       balance.innerText=`Balance:${this.balance}`}
//       else{
//         balance.innerText=`You can't withdraw you have only ${this.balance}`
//       }
  
//   }
//   balance(){
//     console.log(this.balance)
//   }
// }

// const john =new bank("John",7665787)
// deposit.addEventListener('click',()=>{
//   john.deposit(1000)
// })
// withdraw.addEventListener('click',()=>{
//   john.withdraw(1000)
// })


// document.addEventListener("keydown",(e)=>{
//   if(e.key=="q"){
//     console.log("you press q")
//     document.getElementById("punch").play()
//   }
//   else{
//     console.log("not q")
//   }
// })

// Generate a random number between 10 and 20
const randomNumber = Math.ceil(Math.random() * 8999) + 1000;

console.log(randomNumber); 


