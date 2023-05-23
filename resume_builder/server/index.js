//OpenAI API key configuration
const {Configuration, OpenAIApi} = require("openai");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const fs = require("fs")

const multer = require("multer");
const path = require("path")


app.use("/uploads", express.static('uploads')); //enables node.js to serve the contents of an uploads folder. The contents refer to static files such as images, CSS and javascript files
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors());

const generateID = () => Math.random().toString(36).substring(2, 10);

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
});

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const database = [];

const GPTFunction = async (text) => {
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
};

//code below accepts the form data from the client, converts the workHistory to its original data structure, and puts them all into an object.

app.post("/resume/create", upload.single("profileImage"), async (req, res) => {

//JSON format
const {
    fullName,
    currentPosition,
    currentLength,
    currentTechnologies,
    workHistory,
} = req.body;

const workArray = JSON.parse(workHistory);

const newEntry = {
    id: generateID(),
    fullName,
    image_url: `http://localhost:4000/uploads/${req.file.filename}`,
    currentPosition,
    currentLength,
    currentTechnologies,
    workHistory: workArray
}


//The job description prompt
const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. can you write a 100 words description for the top of the resume(first person writing)? `;

const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. can you write 10 points for a resume on what I am good at?`;

//Loops through the items in the workArray and converts them to a string.
const remainderText = () => {
    let stringText = "";
    for (let i = 0; i < workArray.length; i++) {
        stringText += `${workArray[i].name} as a ${workArray[i].position}.`;
    }
        return stringText;
    };

const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at $ {workArray.length} companies. ${remainderText()} \n Can you write me 50 words for each company separated in numbers of my succession in the company(in first person)?`;

//generating a GPT-3 result
const objective = await GPTFunction(prompt1);
const keypoints = await GPTFunction(prompt2);
const jobResponsibilities = await GPTFunction(prompt3);

//putting them in an object
const chatgptData = { objective, keypoints, jobResponsibilities };

const data = { ...newEntry, ...chatgptData };
database.push(data);
    
res.json({
    message: "Request Successful!",
    data,
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});