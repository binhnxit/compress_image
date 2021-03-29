const sharp = require("sharp");

//requiring path and fs modules
const path = require("path");
const fs = require("fs");

//joining path of directory
const directoryPath = path.join(__dirname, "compressed_images");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach( async function (file) {
    // Do whatever you want to do with the file
    console.log(file);
    try {
        await sharp(path.join(__dirname, `compressed_images/${file}`))
          .resize(234, 305, {
            kernel: sharp.kernel.nearest,
            fit: "cover",
            position: "right top",
            background: { r: 255, g: 255, b: 255, alpha: 0.5 },
          })
          .toFile(path.join(__dirname, `resized_images/${file}`))
          .then(() => {
            // output.png is a 200 pixels wide and 300 pixels high image
            // containing a nearest-neighbour scaled version
            // contained within the north-east corner of a semi-transparent white canvas
          });
    } catch (e) {
        console.log(e)
    }
  });
});
