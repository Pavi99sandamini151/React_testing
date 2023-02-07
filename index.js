const getFullName = (fname, lname) => {
    return `${fname} ${lname}`;
}

const actualFullName = getFullName('pavi', 'sanda');
const expectedFullName = 'pavi sanda';

if(actualFullName !== expectedFullName){
    throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}