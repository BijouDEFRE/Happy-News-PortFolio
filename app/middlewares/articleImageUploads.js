const path = require('path');
const multer = require('multer');

// Storage, FileFilter

const storage = multer.diskStorage({
    destination: function(request,file,callback){
        
        const rootDir = path.dirname(require.main.filename);
        callback(null, path.join(rootDir, "./public/uploads/images"));
    },
    filename: function(request,file,callback) {
        
        const extension = file.mimetype.split('/')[1];
        // request.savedArticleImage = "image_" + request.params.id + "." + extension;
        request.savedArticleImage = file.originalname;
        callback(null, request.savedArticleImage);
    }
});

const fileFilter = (request,file,callback) => {
    let allowedMimeTypes = ["image/jpg","image/gif","image/jpeg","image/png"];

    if(!allowedMimeTypes.includes(file.mimetype)){
        return callback(new error("Please provide a valid image file", 400), false);

    }
    return callback(null, true);
};

const maxSize = 10 * 1024 * 1024;
console.log(maxSize);
const articleImageUploads = multer({storage, fileFilter, limits:{fileSize: maxSize}});

module.exports = {articleImageUploads};