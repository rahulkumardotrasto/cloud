var expect = require("chai").expect;
var authentication = require("../app/authentication.js");
/**
 * tests if login and authentication works well
 */
describe("authentication", function() {
        
        var  result = authentication.login({ username: "Rahul", password: "Kumar"});
console.log(result);
	it("login", function() {
var t= result.username;
		expect(t).to.equal("Rahul");

    });
    
    it("authenticate", function() {
        
        let  bool = authentication.authenticate("result.tokenid");
        expect(bool).to.be.true;
        
    });

});
