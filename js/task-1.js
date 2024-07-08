'use strict';

const getUserNames = users => users.map(user => user.name);

console.log(
    getUserNames([
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            balanse: 2811,
        },

    ])
);