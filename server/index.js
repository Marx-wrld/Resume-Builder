const express = require("express")
const cors = require("cors")
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static( "uploads"));
//app.use() function enables node.js to serve the contents of an uploads folder. Static files such as images, CSS, and Js files
//The storage variable contains multer.diskStorage gives us full control of storing the images.
//The upload variable passes the configuration to multer and set a size limit  of 5mb for the images

app.get("/api", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.post("/resume/create", upload.single("headshotImage"), async(req, res) => {
    const {
        fullName,
        currentPosition,
        currentLength,
        currentTechnologies,
        workExperience,
    } = req.body;

    console.log(req.body);

    res.json({
        message: "Request successful!",
        data: {},
    });
});
//route that accepts all the form inputs from the React app. Upload.single('headshotImage') function adds the image uploaded to the uploads folder

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
});
