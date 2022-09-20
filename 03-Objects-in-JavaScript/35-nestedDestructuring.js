// Topic 35: Nested Destructuring

const users = [
    {
        userID: 1,
        firstName: 'Muqaddas',
        lastName: 'Farooq',
        gender: 'Female'
    },
    {
        userID: 2,
        firstName: 'Alwara',
        lastName: 'Farid',
        gender: 'Female'
    },
    {
        userID: 3,
        firstName: 'Tooba',
        lastName: 'Iftikhar',
        gender: 'Female'
    },
];

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

const [{ firstName ,lastName}, , { gender }] = users;
console.log(firstName, lastName);
console.log(gender); 
