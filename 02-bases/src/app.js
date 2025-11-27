

// const { emailTemplate } = require('./foundations/01-template');
// require('./foundations/02-destructuring');
// const { getUserById } = require('./foundations/03-callbacks');
const { getUserById } = require('./foundations/04-arrow');

const id = 1;

getUserById(id, (error, user) =>{
    if(error){
        throw new Error(error); 
    }

    getUserById(2, (err, user2) =>{

        if(err){
            throw new Error(err); 
        }

        console.log({user, user2});

    });

   
});