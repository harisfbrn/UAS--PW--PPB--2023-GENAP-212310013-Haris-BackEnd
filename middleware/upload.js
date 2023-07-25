import multer from "multer";
import { uploadDestination } from "../controller/user.controller.js";

const imageFilter = (req, file, cb) => {
    const allowedExtensions = [".jpg", ".png", ".jpeg"];
    const fileName = file.originalname.toLowerCase();

    const fileExtension = fileName.substr(fileName.lastIndexOf("."));

    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDestination);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-PGBS-${file.originalname}`);
    },
});

var upload = multer({storage: storage, fileFilter: imageFilter});
export default upload;