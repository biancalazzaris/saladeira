const {v4} = require('uuid');

global.users = [];

function findUsers() {
    return global.users;
}

function findUser(id) {
    return global.users.find(item => item.id === id)
};

function insertUser(user) {
    user.id = v4();
    global.users.push(user);
    return user;
}

function updateUser(id, user) {
    return global.users.forEach((item, index, array) => {
        if(item.id === id) {
            user.id = id;
            array[index] = user;
        }
    });
}

function deleteUser(id) {
    return global.users.forEach((item, index, array) => {
        if(item.id === id) {
            array.splice(index, 1)
        }
    });
}

module.exports = {
    findUsers, 
    findUser, 
    insertUser, 
    updateUser,
    deleteUser,
};