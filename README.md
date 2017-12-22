## Synopsis

A simple stateless microservice in Nodejs, with following functionality

Authentication, JSON patching, Image Thumbnail Generation
 

There are two endpoits:
1) Public endpoints - Accept arbitrary username/password and return a signed web token which can be used to valoidate futire request.
2) Protected endpoints - the jwt obtained in the "/login" endpoint is attached to every request and invalidate the following two endpoints if jwt is missing or invalid 
  i) Apply Json Patch Request body should contain a JSON object and a JSON patch object (http://jsonpatch.com/). Apply the json patch to the json object, and return the resulting json object.

  ii) Create Thumbnail Request should contain a public image URL. Download the image, resize to 50x50 pixels, and return the resulting thumbnail.
  

## API
http://localhost:8080/cloud/version1 



## Installation
We need to install following:
node js, Docker,  mocha , git

1) Installing dependencies

git clone  https://github.com/rahulkumardotrasto/cloud.git
cd cloud/
npm install

2) using docker
git clone  https://github.com/rahulkumardotrasto/cloud.git
cd cloud/
docker build -t rahulkumardotrasto/cloud .
docker run -p 49160:8080 -d rahulkumardotrasto/cloud




## Tests
1) Checking if the login and authentication works well
2) Checking if the file is downloaded successfully. 

