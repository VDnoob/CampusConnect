const cloudinary = require("cloudinary").v2;

const uploadToCloudinary = async (file, folder) => {
  const options = { folder };
  options.resource_type = "auto"; // it auto fetch image type;

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

module.exports = uploadToCloudinary;
