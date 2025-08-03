const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const cors = require('cors');
const multer = require('multer');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const pdfparser = require('pdf-parse');
const mammoth = require('mammoth'); 



const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
const GEMINI_API_KEY = 'AIzaSyAn49oRj179_6kqwzbsBnRR3DVrSCM1rrQ';
const upload = multer({dest : "uploads/"});

app.post("/api/resume-checker",upload.single('resume'),async(req,res)=>{
    const file = req.file;
    const filepath = req.file.path;
    const buffer = fs.readFileSync(filepath);
    let file_data = "";
    if(file.originalname.endsWith('.pdf')){
        const data = await pdfparser(buffer);
        file_data = data.text;
    }
    else if(file.originalname.endsWith('.docx')){
        const result  = await mammoth.extractRawText({buffer});
        file_data = result.value;
    }
    else{
        return res.status(400).json({ error: 'Unsupported file type.' });
    }
    try{
        const prompt_text = `
        I have pasted a resume below.
        ***can you provide the response in json format like plain json as,
        {score: 85,
        headings : ["change bold to normal","..",".."...],
        desc : ["desc corresponding to heading1","desc corresponding to heading2","...",...]
        }
         ***
        """ 
        ${file_data}
        """`;
        const gemini_response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,{
            contents: [
                {
                    parts: [
                    { text: prompt_text }
                    ]
                }
            ]
        });
        const geminiText = gemini_response.data.candidates[0].content.parts[0].text;
        res.json({ result: geminiText });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to process the resume. Please try again later.' });    
    }
    finally{
        fs.unlinkSync(filepath);
    }
})
app.listen(port,()=>{
    console.log("app started");
})