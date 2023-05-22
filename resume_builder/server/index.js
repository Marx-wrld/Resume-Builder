const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const multer  = require("multer");
const path = require("path")

//storage variable containing multer.diskStorage gives us full control of storing the images. 
//The above function stores imags in the uploads folder and renames the image to its upload time
//The upload variable passes the configuration to multer and sets a size limit of 5mb for the images.
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

//OpenAI API key configuration
const { OpenAIApi, Configuration } = require('openai');

const configuration = new Configuration({
    apiKey: "<YOUR_API_KEY>",
});

const openai = new OpenAIApi(configuration);

const GPTFunction = async(text) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0.6,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1
    });

    return response.data.choices[0].text;
}

app.use("/uploads", express.static('uploads')); //enables node.js to serve the contents of an uploads folder. The contents refer to static files such as images, CSS and javascript files
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

//code below accepts the form data from the client, converts the workHistory to its original data structure, and puts them all into an object.
app.post("/resume/create", upload.single("profileImgImage"), async(req, res) => {
   //JSON format
    const {
        fullName,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory,
    } = req.body;

    console.log(req.body);

    const workArray = JSON.parse(workHistory);

    const newEntry = {
        id: generateID(),
        fullName,
        image_url: `http://localhost/4000/uploads/${req.file.filename}`,
        currentPosition,
        currentLength,
        currentTechnologies,
        workHistory: workArray
    }
    
    res.json({
        message: "Request Successful!",
        data: {}
    });
});