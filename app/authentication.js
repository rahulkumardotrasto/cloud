/**
 * login returns tokenid which then can be used to validate user in future
 */
const jwt = require("jsonwebtoken");
let login = (body)=> {
    try {
let tokenid = jwt.sign({username: body.username, password: body.password}, "123");
        return JSON.stringify({
            tokenid: tokenid,
            username: username
        });
    }

catch (error) {
        return JSON.stringify({
            ErrorMessage: "error while generating token: Please try again."
        });
    }

};


/**
 *  @param {*} tokenid 
 *  this authenticates the user with tokenid present
 */

let authenticate = (tokenid)=> {
    try {
        if (jwt.verify(tokenid, "123")) {
            return true;
        }
    }

catch (error) {
        return false;
    }
};

module.exports = {
    login: login,
    authenticate: authenticate
};  
