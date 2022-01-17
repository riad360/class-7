// - Create a MERN stack, Laravel, Django, Golan, WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students. 

const devs = [
    {
        ID         : 01,
        name       : 'Md Shahib Shadman',
        age        : 25,
        bloodGroup : 'O+',
        skill      : 'Wordpress',
        location   : 'comilla',
        gender     : 'male',
        Salary     : 1400

    },
    {
        ID         : 02,
        name       : 'Abu Bakkar ',
        age        : 29 ,
        bloodGroup : 'A+',
        skill      : ' Laravel',
        location   : 'Dhaka',
        gender     : 'male',
        Salary     : 1800

    },
    {
        ID         : 03,
        name       : 'Mamun Al Rashid',
        age        : 32 ,
        bloodGroup : 'AB+',
        skill      : ' Django',
        location   : 'Dinajpur',
        gender     : 'male',
        Salary     : 3600

    },
    {
        ID         : 04,
        name       : 'Nur Amin ',
        age        : 35 ,
        bloodGroup : 'AB-',
        skill      : ' Golan',
        location   : 'comilla',
        gender     : 'male',
        Salary     : 900

    },
    {
        ID         : 05,
        name       : 'Abu Rahain',
        age        : 28 ,
        bloodGroup : 'B-',
        skill      : ' MERN stack',
        location   : 'Dhaka',
        gender     : 'male',
        Salary     : 5100

    },
    {
        ID         : 06,
        name       : 'Abu Rahain',
        age        : 28 ,
        bloodGroup : 'B-',
        skill      : ' MERN stack',
        location   : 'Dinajpur',
        gender     : 'male',
        Salary     : 3400

    },
    {
        ID         : 07,
        name       : 'Abu Sufain ',
        age        : 38 ,
        bloodGroup : 'A-',
        skill      : ' JavaScprit',
        location   : 'comilla',
        gender     : 'male',
        Salary     : 2900

    },
    
    {
        ID         : 08,
        name       : 'Abul Kalam ',
        age        : 45 ,
        bloodGroup : 'A+',
        skill      : ' JavaScprit',
        location   : 'comilla',
        gender     : 'male',
        Salary     : 3200

    },
    
    {
        ID         : 09,
        name       : 'Morioum  ',
        age        : 65 ,
        bloodGroup : 'A+',
        skill      : ' JavaScprit',
        location   : 'comilla',
        gender     : 'Female',
        Salary     : 1200
    },
    {
        ID         : 10,
        name       : 'Asma Akter  ',
        age        : 20 ,
        bloodGroup : 'O+',
        skill      : ' Wordpress',
        location   : 'dinajpur',
        gender     : 'Female',
        Salary     : 4000
    },
    
];


let income = 0; 

devs.map(data => {
    console.log(`
    
     ID Number      = ${data.ID}
     Name           = ${data.name}
     Age            = ${data.age}
     Skill          = ${data.skill}
     Blood Group    = ${data.bloodGroup}
     Location       = ${ data.location}
     Gender         = ${ data.gender}
     Income         = $${ data.Salary}
    ----------------------------------------

    `);

    income = income +data.Salary;
});

console.log(`All Developer Monthly Income : ${income} `);
 