const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require('imagemin-pngquant');


(async () => {
  const files = await imagemin(["source_images/*"], {
    destination: "compressed_images",
    plugins: [
      imageminMozjpeg({quality: 50}),
      imageminPngquant({
				quality: [0.6, 0.8]
			})
    ]
  });
})();