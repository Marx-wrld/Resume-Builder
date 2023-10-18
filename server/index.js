const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const OpenAIApi = require("openai");
require('dotenv').config();

// Configure your OpenAI API key
const openaiAPIKey = process.env.OPENAI_API_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const generateID = () => Math.random().toString(36).substring(2, 15);

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

// Create an instance of the OpenAIApi with your API key
const openai = new OpenAIApi({ key: openaiAPIKey });

const database = [];

const GPTFunction = async (text) => {
  const response = await openai.Completion.create({
    engine: "text-davinci-003",
    prompt: text,
    max_tokens: 250,
  });
  return response.choices[0].text;
};

app.post("/resume/create", upload.single("headshotImage"), async (req, res) => {
  const {
    fullName,
    currentPosition,
    currentLength,
    currentTechnologies,
    workExperience,
  } = req.body;

  const workArray = JSON.parse(workExperience);
  const newEntry = {
    id: generateID(),
    fullName,
    image_url: `http://localhost:${PORT}/uploads/${req.file.filename}`,
    currentPosition,
    currentLength,
    currentTechnologies,
    workExperience: workArray,
  };

  const prompt1 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. Can you write a 100 words description for the top of the resume (first person writing)?`;

  const prompt2 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n I write in the technologies: ${currentTechnologies}. Can you write 10 points for a resume on what I am good at?`;

  const remainderText = workArray.map((entry) => `${entry.name} as a ${entry.position}`).join("\n");

  const prompt3 = `I am writing a resume, my details are \n name: ${fullName} \n role: ${currentPosition} (${currentLength} years). \n During my years, I worked at ${workArray.length} companies. ${remainderText} \n Can you write me 50 words for each company, separated in numbers of my succession in the company (in the first person)?`;

  const objective = await GPTFunction(prompt1);
  const keypoints = await GPTFunction(prompt2);
  const jobResponsibilities = await GPTFunction(prompt3);

  const chatgptData = { objective, keypoints, jobResponsibilities };
  const data = { ...newEntry, ...chatgptData };
  database.push(data);

  res.json({
    message: "Request successful!",
    data,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
