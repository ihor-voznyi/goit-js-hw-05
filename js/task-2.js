'use strict';

const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));

const allUsers = [
{
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
];