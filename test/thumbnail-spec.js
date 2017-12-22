const expect = require("chai").expect;
const thumbnail = require("../app/thumbnail");
const url = require("url");
const path = require("path");
/**
 * our defined image url is passed into create function, 
 * which after parsed and used with parsed.pathname
 * gives the value after hostname. like in eg given below
 * https://en.wikipedia.org/pathname
 */
const imageurl="http://localhost:8080/cloud/version1/thumbnail";

	describe("downloadIMG()", function(done) {
        
		it("Download image", function() {

			thumbnail.create(imageurl, function(filename) {
                let parsed = url.parse(filename);
                let basefilename = path.basename(parsed.pathname);
				expect(filename).to.equal("http://localhost:8080/cloud/version1/public/${basefilename}");
				done();
			});

		});

	});

