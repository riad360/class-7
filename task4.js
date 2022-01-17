const phone = [
    {
        sl             : 1001,
        name           : 'MD Shahib Shadman',
        age            : 25,
        location       : 'Comilla',
        phoneBook      : 57185861002
    },
    {
        sl             : 1002,
        name           : 'Harunur Rashid',
        age            : 35,
        location       : 'Comilla',
        phoneBook      : 5718586458
    },
    {
        sl             : 1003,
        name           : 'Mamunr Rashid',
        age            : 30,
        location       : 'Dhaka',
        phoneBook      : 5718545877
    },
    {
        sl             : 1004,
        name           : 'Abu Sufian',
        age            : 34,
        location       : 'Comilla',
        phoneBook      : 571855896
    },
    {
        sl             : 1005,
        name           : 'Azam Khan',
        age            : 18,
        location       : 'Dhaka',
        phoneBook      : 571851257
    },
    {
        sl             : 1006,
        name           : 'Nur Amin',
        age            : 33,
        location       : 'Dhaka',
        fees           : 1500,
    },
    {
        sl             : 1007,
        name           : 'Abu Rahian',
        age            : 24,
        location       : 'Dhaka',
        phoneBook      : 5718584587
    },
    {
        sl             : 1008,
        name           : 'Shimul Raham',
        age            : 23,
        location       : 'Dhaka',
        phoneBook      : 571815789
    },
    {
        sl             : 1009,
        name           : 'Harunur Rashid',
        age            : 45,
        location       : 'Comilla',
        phoneBook      : 571805789
    },
    {
        sl             : 1010,
        name           : 'Somrat Khan',
        age            : 19,
        location       : 'Comilla',
        phoneBook      : 5718535784
    },
];

console.log(` Family Phone Book List`);
phone.forEach(data => {
    console.log(`
    ======================================
    Seril Numnber   = ${data.sl}
    Name            = ${data.name}
    Age             = ${data.age}
    Location        = ${data.location}
    Phonebook       = ${data.phoneBook}
    `);
    
});