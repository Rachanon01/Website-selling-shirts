// การแสดงค่าในหน้าเว็บ
// let lotto = prompt("กรอกเลข")
// document.getElementById("result").innerHTML = (Math.floor(Math.random() * 100));
// document.getElementById("number").innerHTML = lotto
// document.getElementById("name").innerHTML = ("บ่ถืกดอก")

// โปรแกรมคำนวนเกรด
// let score = prompt("คะแนนของคุณ :")
// if(score >= 80){
//   document.getElementById("result").innerHTML = "คุณได้เกรด A"
// }else if(score >= 70){
//   document.getElementById("result").innerHTML = "คุณได้เกรด B"
// }else if(score >= 60){
//   document.getElementById("result").innerHTML = "คุณได้เกรด C"
// }else if(score >= 50){
//   document.getElementById("result").innerHTML = "คุณได้เกรด D"
// }else if(score >= 40){
//   document.getElementById("result").innerHTML = "คุณได้เกรด E"
// }else
// {
//   document.getElementById("result").innerHTML = "คุณได้เกรด F"
// }

// for(var counter = 0; counter < 7; counter++)
// {
//   console.log("Hello" + counter)
// }

// โปรแกรมคำนวนราคาสินค้า
// let qrt = prompt("จำนวนสินค่า")
// let sum = 0
// for(var i = 1; i <= qrt; i++)
//  {
//   let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
//   sum = sum + parseInt (item_price)
//   document.getElementById("price-list").innerHTML += 
//   "รายการสินค้าชิ้นที่"+ i + ":" + item_price + "บาท"+"<br>"
//  }
//  document.getElementById("result").innerHTML = "ราคาสินค้า" + sum + "บาท"

// let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
// for (var i = 0 ; i < round ; i++) {
//   var answer = prompt("หัว หรือ ก้อน !")
//   var random_answer = ""
//   if (Math.floor(Math.random()*10) <= 4) {
//     // หัว
//     random_answer ="หัว"
//   }
//   else {
//     // ก้อย
//     random_answer = "ก้อย"
//   }

//   if(answer == random_answer) {
//     alert("ตอบถูก ! ยินดีด้วย")
//   }
//   else {
//     alert("ตอบผิด ! เสียใจด้วย")
//   }

// คำนวนอุณหภูมิ
function toCelsius(fahrenheit) 
{
  let value = (fahrenheit - 32) * 5 / 9
  return value.toFixed(2) + "°C";
}
function display(elementId, value)
{
  document.getElementById(elementId).innerHTML = value 
}
function toFahrenheit(Celsius)
{
  let value = (Celsius * 9/5) + 32
  return value.toFixed(2) + "°F";
}
function toCelsiusProgram(value)
{
  alert (toCelsius(value))
}
function toFahrenheitProgram(value)
{
  alert (toFahrenheit(value))
}


// function sayHello(userName)
// {
//   return "Hello" + userName
// }
// let userInput = prompt("Input your name :")
// alert(sayHello(userInput))