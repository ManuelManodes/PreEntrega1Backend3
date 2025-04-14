const bcrypt = require('bcrypt');

const generateUsers = (numUsers) => {
    const users = [];
    const roles = ['user', 'admin'];

    for (let i = 0; i < numUsers; i++) {
        const role = roles[Math.floor(Math.random() * roles.length)];
        const user = {
            username: `user${i + 1}`,
            password: bcrypt.hashSync('coder123', 10),
            role: role,
            pets: []
        };
        users.push(user);
    }

    return users;
};

module.exports = {
    generateUsers
};