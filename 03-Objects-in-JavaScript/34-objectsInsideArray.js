// Topic 34: Objects inside Array
// very useful in real world applications

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

for (let user of users){
    console.log(user.firstName)
}
