let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max';

//even though unknown type can be reassigned, it can't be assigned to a variable with a known type
//If this needs to be accomplished an additional type check is required
if(typeof userInput === 'string'){
    userName = userInput
}


function generateError(message: string, code: number){
    throw {message: message, errorCode: code}
}


generateError('An error occured', 500)