const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const multer  = require("multer");
const path = require("path")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
})

app.use("/uploads", express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/api", (req, res) => {
    res.json({
        messsage: 'Hello World',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// app.post("/resume/create", upload.single("profileImg"), async(req, res) => {
//     const {
//         fullName,
//         currencyPosition,
//         currentLength,
//         currentTechnologies,
//         workHistory,
//     } = req.body;

//     console.log(req.body);
    
//     res.json({
//         message: "Request Successful!",
//         data: {}
//     });
// });