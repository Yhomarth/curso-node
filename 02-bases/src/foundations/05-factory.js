


const buildMakePerson = (getUUID, getAge ) => {

    return   ( {name, birthday}) => {

    return {
        id : getUUID(),
        name,
        birthday,
        age : getAge(birthday)
    }

}

}


module.exports = {
    buildMakePerson
}