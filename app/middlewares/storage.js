const multer = require('multer');
const path = require('path');

const types = {
    ".jpg": 'images',
    '.png': 'images',
    '.gif': 'images'
};

module.exports = multer.diskStorage({
    destination: (request, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `./uploads/${types[ext]}`);
    },
    filename: (request, file, cb) => {
        cb(null, Date.now()+path.extname(file.originalname));
    }
});