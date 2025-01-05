// STRING

const name = "Saloni"
const repoCount = 50
 console.log(name + repoCount + "Value");
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('SaloniSharma') ;
 
 console.log(gameName [0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());

 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0, 14 );
 console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 const newStringOne = " sharma    "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://saloni.com/saloni%20sharma"
 console.log(url.replace('%20', '-'))
 console.log(url.includes ('swati'))

 console.log(gameName.split('-'));