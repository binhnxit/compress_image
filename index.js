const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

(async () => {
  const files = await imagemin(["source_images/*"], {
    destination: "compressed-images",
    plugins: [
      imageminMozjpeg({quality: 50})
    ]
  });
})();