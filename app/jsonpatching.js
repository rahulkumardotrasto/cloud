/**
 * body.json acts on body.patch and produces result 
 */

const jsonpatch=require("json-patch");

let patch = (body)=> {
    try {
        let result = jsonpatch.apply(body.json, body.patch);
        return JSON.stringfy({
            value: result
        });
    }

catch (error) {

    return JSON.stringfy({
        errorMassage:  "Problem with applying patch on request: ${error}"
        });
    }
};



module.exports = {
    patch: patch
}
