//  Student Data 


const student = [
{
    name    : 'Md Shahib SHadman',
    id      : 1540,
    roll    : 14,
    age     : 14,
    class   : '5th',
    section : 'B',
    blood   :'O+',

    bangla  : 80,
    english : 90,
    math    : 95,
    acc     : 85,
    man     : 75,
    rel     : 88,
    eco     : 55
},
{
    name    : 'Hasnat Al Khan',
    id      : 1647,
    roll    : 15,
    age     : 10,
    class   : '8th',
    section : 'D',
    blood   :'O-',

    bangla  : 60,
    english : 55,
    math    : 87,
    acc     : 85,
    man     : 95,
    rel     : 80,
    eco     : 30
},
{
    name    : 'Abu Bakkar',
    id      : 1547,
    roll    : 10,
    age     : 13,
    class   : '9th',
    section : 'C',
    blood   :'O-',

    bangla  : 60,
    english : 45,
    math    : 57,
    acc     : 85,
    man     : 35,
    rel     : 80,
    eco     : 75
},


];


let sayeed = new Result();

student.map(data => {

    console.log( `
     Name           : ${data.name}
     ID             : ${data.id}
     Age            : ${data.age}
     Class          : ${data.class}
     Section        : ${data.section}
     Blood Group    : ${data.section}

     Subjject       Marks              GPA              GRADE

     Bangla         = ${data.bangla}            ${sayeed.result(data.bangla).resultGpa}             ${sayeed.result(data.bangla).resultGrade}
     English        = ${data.english}            ${sayeed.result(data.english).resultGpa}              ${sayeed.result(data.english).resultGrade}
     Math           = ${data.math}            ${sayeed.result(data.math).resultGpa}               ${sayeed.result(data.math).resultGrade}
     Accounting     = ${data.acc}            ${sayeed.result(data.acc).resultGpa}               ${sayeed.result(data.acc).resultGrade}
     Managment      = ${data.man}            ${sayeed.result(data.man).resultGpa}               ${sayeed.result(data.man).resultGrade}
     Relegin        = ${data.rel}            ${sayeed.result(data.rel).resultGpa}               ${sayeed.result(data.rel).resultGrade}
     Economic       = ${data.eco}            ${sayeed.result(data.eco).resultGpa}               ${sayeed.result(data.eco).resultGrade}
    ----------------------------------------------------------------------------------
  Total CGPA = ${sayeed.finalResult(data.bangla, data.english, data.math, data.acc, data.man, data.rel, data.eco).totalCgpa}                       Total Grade =  ${sayeed.finalResult(data.bangla, data.english, data.math, data.acc, data.man, data.rel, data.eco).totalResult}
   
    `);
});