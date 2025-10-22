const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});


const storage = multer.memoryStorage();
const upload = multer({ storage });


async function imageUploadUtil(file) {
  const b64 = Buffer.from(file.buffer).toString("base64");
  const dataURI = `data:${file.mimetype};base64,${b64}`;

  const result = await cloudinary.uploader.upload(dataURI, {
    resource_type: "auto",
  });

  return result;
}

module.exports = { upload, imageUploadUtil };
