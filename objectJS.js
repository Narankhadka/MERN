let user=
{
    name: 'person A',
    age:20,
    address:'Location A'
}

let student={
    // info:user,
    // user:user,
    //shortcut
    // user,
    ...user,
    faculty: 'Cs',
    subjects:['Node','Js','react']
}

/* console.log(student.info.name);
console.log(student['info']['name']);
console.log(student);
 */
// the concept of destructing
// let {age,subjects,faculty,address,name} =student
// console.log(subjects);
// console.log(faculty);
// console.log(age);
// console.log(address);
// console.log(name);

let {age,faculty,...remaining}=student
console.log(age)
console.log(faculty)
console.log(remaining)




