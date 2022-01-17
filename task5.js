// - Create fees array and object data for a picnic where everyone will provide free basic information for everyone.

const picnic = [
    {
        tokenNumber    : 1001,
        name           : 'MD Shahib Shadman',
        age            : 25,
        location       : 'Comilla',
        fees           : 3500,
    },
    {
        tokenNumber    : 1002,
        name           : 'Harunur Rashid',
        age            : 35,
        location       : 'Comilla',
        fees           : 2000,
    },
    {
        tokenNumber    : 1003,
        name           : 'Mamunr Rashid',
        age            : 30,
        location       : 'Dhaka',
        fees           : 1500,
    },
    {
        tokenNumber    : 1004,
        name           : 'Abu Sufian',
        age            : 34,
        location       : 'Comilla',
        fees           : 2000,
    },
    {
        tokenNumber    : 1005,
        name           : 'Azam Khan',
        age            : 18,
        location       : 'Dhaka',
        fees           : 3500,
    },
    {
        tokenNumber    : 1006,
        name           : 'Nur Amin',
        age            : 33,
        location       : 'Dhaka',
        fees           : 1500,
    },
    {
        tokenNumber    : 1007,
        name           : 'Abu Rahian',
        age            : 24,
        location       : 'Dhaka',
        fees           : 3500,
    },
    {
        tokenNumber    : 1008,
        name           : 'Shimul Raham',
        age            : 23,
        location       : 'Dhaka',
        fees           : 2000,
    },
    {
        tokenNumber    : 1009,
        name           : 'Harunur Rashid',
        age            : 45,
        location       : 'Comilla',
        fees           : 1500,
    },
    {
        tokenNumber    : 1010,
        name           : 'Somrat Khan',
        age            : 19,
        location       : 'Comilla',
        fees           : 3500,
    },
];

picnic.forEach(data => {

    
 function devs () {
    let sayeed =data.fees;

    if( sayeed == 3500 ){
        return` Congration Your Category A`
    } else if( sayeed == 2000){
        return `Congration Your Category B`
    } else if( sayeed == 1500){
        return `Congration Your Category C`
    }
   
 }
 console.log(`
 

 Token Number   = ${data.tokenNumber}
 Name           = ${data.name}
 Age            = ${data.age}
 Location       = ${data.location}
 Amount         = ${data.fees}
 Category       = ${devs()}

`);
});
