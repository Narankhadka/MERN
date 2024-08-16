// // console.log('so  jao')
// // reuseable block of code
// function add(a,b=6) // we can provide the defult value to overcome the error for the
// {
//     let num=a+b
//     console.log(num)
//     // return a+b;
// }

// add(12,44)
// add(12,44)
// add(12,2344)
// add(1.402,44)
// add(12,44)
// add(12,)

// function sum(n1,n2)
// {

//  return n1+n2
// }
// sum(10,123.52)

// console.log("Math.LN10: " + Math.LN10);

// const sum= function(n1,n2) // to make variable function , make it always const
// {
//     return n1+n2;
// }
// console.log(sum(12,34))



// arrow function
const sum=(n1,n2=5)=>{
    return n1+n2;
}
console.log(sum(1,34))

// for one statement
const add=(n3,n4)=>n3+n4
console.log(add(1,2))