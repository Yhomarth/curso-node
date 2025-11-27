

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

function getUserById(id, callback){

    const user = users.find(  function(user){
        return user.id === id;
    }); 

    if(!user){
        callback(`User with id ${id} not found`);
    }

    callback(null, user);

}


module.exports = {
    getUserById
}