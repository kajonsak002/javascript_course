// //Var ส่วนใหญ่ใช้ประกาศใน Function เพิ่มค่าใหม่ให้มันได้
// // var temp = "Hello"
// // temp = "google"

// //Let ส่วนใหญ่ใช้ประกาศใน Function เพิ่มค่าใหม่ให้มันได้
// // let temp2 = 100
// // temp2 = 50

// //Const ไม่สามารถเปลี่ยนค่าได้ ค่าใดค่านั้น
// // const temp3 = true
// // temp3 = false

// // var temp4 = null
// // const a = 10
// // const b = 5
// // let c = 5
// // c = "ABC"
// // const sum = a + b
// // console.log(sum);
// // console.log(a+b+c);

// // การเลือกแสดงตามตำแหน่งของ Arrey
// // console.log(temp5[4]);

// // การเพิ่มข้อมูลลงใน Array
// // temp5.push(6)
// // console.log('Insert 6 to array',temp5)

// // function sayHello() {
// //   console.log('Hi');
// // }

// // การเรียกใช้ Function
// // sayHello()

// //  ` ` Grave
// // ฟังก์ชั่นการรับค่า Arg.
// // const sayHello = (number , name) => {
// //      console.log(  ` Number is : ${number} by ${name} `);
// //   }
// //   const nickname = "Noom"
// // sayHello(100 , nickname)
// const temp5 = [1, 2, 3, 4, 5];
// // console.log(temp5[4]);

// // แสดงมาทั้งหมด
// temp5.forEach((item) => {
//   console.log(item);
// });

// // เลือกมาแสดง
// const filterTemp = temp5.filter((item) => item >= 3);
// console.log("FilterTemp : ", filterTemp);
// const car1 = {
//   color: "Red",
//   brand: " Honda",
//   modal: {a1 : "asd",
//           a2 : "fgh"
// }
// };

// // การเพิ่มค่า
// car1.color = "Blue";
// console.log(car1.modal.a2);

// Function Return
const fristName = "kajonsak";
const lastName = "leepongkul";

const mergeName = (fristName, lastName) => {
  // แบบที่ 1
  // return fristName + " " + lastName;

  // แบบที่ 2
  // const fullName = fristName + "" + lastName
  // console.log(fullName)

  // แบบที่ 3
  return ` ${fristName}  ${lastName}`;
};

// const fullName = mergeName(fristName, lastName);
// console.log(mergeName(fristName,lastName));

// //  Condition (if else) เงื่อนไข
const number1 = 40;
// if(number1 > 30 ) {
//   console.log(' number1 is more 30 ');
// }

// // if(number1 < 30 ) {
// //   console.log(' number1 is less 30 ');
// // }
// // else {
// //   console.log(' number1 is more 30 ');
// // }

// if(number1 < 20 ) {
//   console.log(' number1 is less 20 ');
// }
// else if (number1 < 30 ){
//   console.log(' number1 is less 30 ');
// }
// else if (number1 < 40 ){
//   console.log(' number1 is less 40 ');
// }else {
//   console.log('number1 is more 40')
// }

// switch (number1) {
//   case 20:
//     console.log(" number1 is equal 20 ");
//     break;
//   case 30:
//     console.log(" number1 is equal 30 ");
//     break;
//   case 40:
//     console.log(" number1 is equal 40 ");
//     break;
//   default:
//     console.log(" number1 is less 40 ");
//     break;
// }

// loop 
const myCars = [
  "Ford Rapter" ,
  "Honda CRV",
  "Toyota Fortuner",
  "Lambogini",
]

for (let index = 0; index < myCars.length; index++) {
  const car = myCars[index];
  // console.log(car)
}

const car1 = {
     color: "Red",
     brand: " Honda",
     modal: {a1 : "KB-19",
             a2 : "KB-99"}
   };

for (const key in car1 ) {
  if (Object.hasOwnProperty.call(car1, key )){
    const element = car1[key];
    // console.log(element);
  }
}

for (const car of myCars ) {
  // console.log(car)
}

let i = 0
while (i < 10 ) {
  // console.log("The number is : ", i)
  i++
}

// ? if : else