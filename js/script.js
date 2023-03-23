const a = document.querySelector("a");
console.log(a);
// เป็นการใส่คุณสมบัติ
a.setAttribute("href", "https://www.google.com/");
a.setAttribute("target", "blank");


const result = {first_name : 'kajonsak' , last_name : "leepongkul"}
const fullName = ` ${result.first_name} ${result.last_name}`


const p =document.querySelector('p')
p.innerHTML = fullName