const express = require("express");
const router = express.Router();
const thumbnail = require("./app/thumbnail");
const jsonpatching = require("./app/jsonpatching");
const authentication = require("./app/authentication");
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const urlencodedParser = bodyparser.urlencoded({extended: false});

/**
 *  POST /login gets username and password as arguments.
 */ 
router.post("/login", urlencodedParser, (req,res)=> {
    if (!req.body) {
        res.sendStatus(400);
    } else {
        res.send(authentication.login(req.body));
    }
});

/**
 *   POST /authenticate gets JSON bodies having tokenid as parameners
 */
 
router.post("./authenticate", jsonparser, (req,res)=> {
    if (!req.body) {
        res.sendStatus(400);
    } else {
        res.send(authentication.authenticate(req.body.tokenid));
    }
});

 
/**
 *  POST /jsonpatching gets json object(this object will 
 *  work on patch and  produce result),
 *  json patch(having diff operations, path and value), tokenid as arguments.)
 */
router.post("./jsonpatching", jsonparser, (req,res)=> {
    try {
        if (authentication.authenticate(req.body.tokenid)) {
            res.send(jsonpatching.patch(req.body));
        } else {
            res.sendStatus(400);
        }
    } catch (error) {
        res.send(
            JSON.stringify({
                errorMessage: "Unauthorized login: token didn't match"
            })
        );
    }
});

/**
 *   image and Token will be passed as arguments
 */ 
router.post("/thumbnail", urlencodedParser, (req, res)=> {
    if (authentication.authenticate(req.body.tokenid)) {
        thumb = thumbnail.create(req.body.image);
        res.send(thumb);
    }
});

module.exports = router;
