let arr=[122,23.5,'hi']
let color=['red','blue','yello','green']
/* console.log(color[0])

for(let i=0;i<color.length;i++)
{
    console.log(i,color[i])
}

counter loop
iterative loop  forin */

//for-in
/* for(let i in color)
{
    console.log(i,color[i])
} */


// for of --- its for the value only we cant not find the index acutall
/*
for(let v of color)
{
    console.log(v)
}
 */

// map
/* let newarr=color.map((data,i)=>`color at ${i} is ${data}`)
console.log(color)
console.log(newarr) */
/*
filter

let newarr=color.filter((data)=> data!='blue')
console.log(color)
console.log(newarr)
console.log(color)
color.push('new color',`purple`,`blue`)
console.log(color)
color.pop()
console.log(color);
console.log(color.pop());
console.log(color); */

// adding the new item in front of the array

/* color.unshift(`orange`,`pink`)
console.log(color);
console.log(color.shift());
console.log(color)
delete color[2];
console.log(color);
color.splice(2,1,'naran')
console.log(color);
 */
let colors=['red',['blue','yello'],'green']
// console.log(color[0])
console.log(colors[1][0])



