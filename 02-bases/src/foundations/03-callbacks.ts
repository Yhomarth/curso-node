interface User {
    id: number;
    name: string;
}

const users : User [] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

export function getUserById(id : number , callback : (err ?: string, user ?: User) => void) {

    const user = users.find(  (user : User) => user.id === id); 

    if(!user){
        callback(`User with id ${id} not found`);
    }

    callback(undefined, user);

}

