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

//route that accepts all the form inputs from the React app. Upload.single('headshotImage') function adds the image uploaded to the uploads folder

app.post("/resume/create", upload.single("headshotImage"), async(req, res) => {
    const {
        fullName,
        currentPosition,
        currentLength,
        currentTechnologies,
        workExperience,
    } = req.body;

    //Code below accepts the form data from the client, converts the workExperience to its original array and puts them all into an object.
    const workArray = JSON.parse(workExperience); //an array

    //group the values into an object
    const newEntry = {
        id: generateID(),
        fullName,
        image_url: `http://localhost:4000/uploads/${req.file.filename}`,
        currentPosition,
        currentLength,
        currentTechnologies,
        workExperience: workArray,
    };
});

//creating the prompts to be passed into the GPT function
//Function below loops through the array of work History and returns a string data type of all work experiences.

const remainderText = () => {
    let stringText = "";
    for (let i = 0; i < workArray.length; i++){
        stringText += `${workArray[i].name} as a ${workArray[i].position}`;
    }
    return stringText;
};

//Job description prompt
const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume(first person writing)?`;

//Job responsibilities prompt
const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;

//Job achievements prompt 
const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years I worked at ${workArray.length} companies. ${remainderText()} \n Can you write me 50 words for each company separated in numbers of my succession in the compan (in first person)?`;

//generating a GPT-3 result 

const objective  = await GPTFunction(prompt1);
const keypoints = await GPTFunction(prompt2);
const jobResponsiblities = await GPTFunction(prompt3);

//Storing the result into an object
const chatgptData = { objective, keypoints, jobResponsiblities };

//Logging the result
console.log(chatgptData);

//configuring multer
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

//Configuring the api
const { configuration, OpenAIAPI } = require("openai");

const configuration = new Configuration({
    apikey: "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",
});

const openai = new OpenAIApi(configuration);

//Function to accept a text as a parameter and return an AI generated result

const GPTFunction = async (text) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0.6,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    });
    return response.data.choices[0].text;
};
//the text-davinci-003 model generates an appropriate answer to the prompt.


//returning an AI generated result and the info the users entered then creating an array reps the database that stores results.
let database = [];

app.post("/resume/create", upload.single("headshotImage"), async (req, res) => {
    const data = { ...newEntry, ...chatgptData };
    database.push(data);
    
    res.json({
        message: "Request successful!",
        data,
    });
});