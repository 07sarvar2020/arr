// Massiv 
// Massiv - bu o'z ichida bir necha ma'lumot saqlab turadigan struktura
// Massiv Kvadtrat qovuslar birlan belgilanadi. "const array = ['qiymat', 'qiymat2', 'qiymat3']"
// const user = {
//     name: 'sanjar',
//     age: 27,
//     from: 'Uzbekistan'
// }
// console.log(user);

// const arr = ['sanjar', 27, 'Uzbekistan']
// console.log(typeof arr);
//  JavaScript da hamma narsa object hisoblanadi

// Massivda ma'lumotlar vegul orqali kiritiladi
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// Massivda kalitalar 0 dan boshlanadi. 0 bu yecheykani kaliti va arr[0] qilib chiqariladi
// console.log(arr[0]);
// Length sozlamasi massivni yoki matn ni uzunligini ko'rsatadi
// let ism = 'sanjar'
// console.log(arr.length);
// const arr = ['Sanjar', 'Sarvar', `E'zoza`, 'Abdulloh', 'Izzatilla']
// for (const key in arr) {
//     console.log(arr[key]);
// }

// for of iteratori qiymatlarni birma bir chiqarib beradi. for in esa kalitlarni chiqaradi

// for (const i of arr) {
//     console.log(i);
// }

// Massivni oddiy for tsikli orqali ko'rib chiqsa boladi
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }
// console.log(arr);

// endi massivda nechta juft son borligini ko'rib chiqamiz
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     answer = 0;
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     answer +=  el % 2 == 0 ? 1 : 0
// }
// console.log(answer);

// const arr = ['Sanjar', 'Sarvar', `E'zoza`, 'Sanjar', 'Abdulloh', 'Sanjar', 'Izzatilla'];
// splice(index, nechta) - massivdan tanlangan index ni o'chirib tashlaydi
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (el == 'Sanjar') {
//         arr.splice(i, 1)
//     }

// }
// arr.pop()
// console.log(arr);
// console.log(arr);
// push() methodi massivni oxiridan qiymat qo'shadi
// arr.push('Aziz')
// console.log(arr);
// let matn = arr.join(', ')
// console.log(matn);
// let newArr = matn.split(' ')
// console.log(newArr);
// let matn = prompt('matn kiriting faqat xaqorat qilmang')
//  let newArr = matn.split(' ')
//  for (let i = 0; i < newArr.length; i++) {
//      const el = newArr[i];
//      if (el == 'jinni') {
//          newArr.splice(i, 1, `zo'r`)
//      }
//  }
//  let newMatn = newArr.join(' ')
//  console.log(newMatn);

// let arr = prompt['ismingizni kiriting']
// for (let i = 0; i < arr.length; i++) {
//    const element = arr[i];
//    console.log(element);
// }
// console.log(arr);

// const arr = ['sarvar', 18 , 'Toshkent',"timur"]
// for (let i = 0; i < arr.length; i++) {
//    const element = arr[i];
//    console.log(element);


// let arr = [];
// for(let i = 0; i < Infinity; i++) {
//    let addStr = prompt('add yoki del yozing');
//    let strAdd = addStr.split(' ');
//    if(strAdd[0] == 'add') {
//       arr.push(strAdd[1]);
//    }else if(strAdd[0] == 'del') {
//       for(let x = 0; x < arr.length; x++) {
//          arr[x] == strAdd[1] ? arr.splice(x, 1) : '';
//       }
//    }else if(strAdd[0] == 'stop') {
//       break;
//    }
//    console.log(arr);
// }
// console.log(arr);
 

 let arr = [];
 for (let i = 0; i < Infinity; i++) {
    let addStr = prompt('add yoki del yozing');
    let strAdd  = addStr.split(' ');
    if(strAdd[0] == 'add') {
       arr.push(strAdd[1]);
    }else if(strAdd[0] =='del'){
       for(let x = 0; x < arr.length; x++) {
         arr[x] == strAdd[1] ? arr.splice(x, 1) : '';
       }
    }else if (strAdd[0] == 'stop') {
       break;
    }
    console.log(arr);
 }
 console.log(arr);