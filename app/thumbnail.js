/**
 * once image is asynchronously downloaded which is guaranteed by  
 * async function(generator+promise),
 * we resized it with gm and return the location of file in public folder.
 */


const gm = require("gm").subClass({imageMagic:true});
const imagedownloader = require("image-downloader");


let create = (imageurl)=> {
   const options = {
    url: imageurl,
    dest: "./public/"
  };

  async function downloadIMG() {
    try{    
        const { filename, image } = await imagedownloader.image(options);
    } catch(error) {
       return JSON.stringify({
            errorMessage: "${error}"
        })
}
//filename is path to destination filename
    

  gm(filename).resize(50,50,"!").write(filename,(error)=> {
    return JSON.stringify({
          errorMessage: "${error}"
      })
    });

    return JSON.stringify({
        filename: filename
    })
  }
  downloadIMG();
};

module.exports = {
      create:create
}
