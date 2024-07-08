'use strict';

const getTotalBalanceByGender = (users, gender) =>
    users
        .filter(user => user.gender === gender)
        .reduce((perviousValue, currentValue) => {
    return perviousValue + currentValue.balance;
        }, 0);

const clients = [
            {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
];