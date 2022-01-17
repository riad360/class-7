const program = [
    {
        
        name           : 'MD Shahib Shadman',
        age            : 25,
        location       : 'Comilla',
        phone          : 571858601
    },
    {
        
        name           : 'Harunur Rashid',
        age            : 35,
        location       : 'Comilla',
        phone          : 5718586458
    },
    {
        
        name           : 'Mamunr Rashid',
        age            : 30,
        location       : 'Dhaka',
        phone          : 5718545877
    },
    {
        
        name           : 'Abu Sufian',
        age            : 34,
        location       : 'Comilla',
        phone          : 571855896
    },
    {
        
        name           : 'Azam Khan',
        age            : 16,
        location       : 'Dhaka',
        phone          : 5588584587
    },
    {
        
        name           : 'Nur Amin',
        age            : 33,
        location       : 'Dhaka',
        phone          : 5795884587
    },
    {
        
        name           : 'Abu Rahian',
        age            : 24,
        location       : 'Dhaka',
        phone          : 5718584587
    },
    {
        
        name           : 'Shimul Raham',
        age            : 23,
        location       : 'Dhaka',
        phone          : 571815789
    },
    {
        
        name           : 'Harunur mia',
        age            : 45,
        location       : 'Comilla',
        phone          : 571805789
    },
    {
        
        name           : 'Somrat Khan',
        age            : 13,
        location       : 'Comilla',
        phone          : 5718535784
    },
];

program.forEach(data => {
    let party = data.age;
    function sayeed() {
        if (party >= 0 && party <18) {
            return ` ${name} Sorry You Can't Join Our Party`
        } else if ( party >= 18 && party <= 40 ) {
            return ` ${name} Wellcome To our Party You Can Join Us` 
        } else if ( party > 40) 
        { return `${name} Sorry Dude You are Old man `}
    } 

    console.log(`
    NAME          = ${data.name}
    AGE           = ${data.age}
    LOCATION      = ${data.location}
    PHONE         = ${data.phone}
    ----------------------------------------
  ${sayeed()}

    `);
});