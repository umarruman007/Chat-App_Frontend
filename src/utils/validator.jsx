import { isValidUsername } from "6pp"

const usernameValidator = (username) => {
  
 if (isValidUsername(username)) {
    return{ isvalid: false, errormessage: "Username is invalid" }
  
}
}
