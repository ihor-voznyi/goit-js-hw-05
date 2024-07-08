'use strict';

const sortByDescendingFriendCount = users =>
    users.toSorted((a, b) => b.friends.length - a.friends.length);

console.log(
    sortByDescendingFriendCount([
        {
            name: 'Moore Hensley',
            friends: ['Sharron Pace'],
            gender: 'male',
        },
    ])
);

