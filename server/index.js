import express from "express"
import cors from 'cors'
import bodyParser from "body-parser";


const app = express()
app.use(cors());
const PORT = 6969;

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const api_endpoint = "https://api.openai.com/v1/completions"
const api_key = "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"

app.post('/', async(req, res)=>{

    const {text, file} = req.body;

    const data = {
        model: "text-davinci-003",
        prompt: `write python script to ${text}. provide only code, no text`,
        max_tokens: 100,
        temperature: 0.5
    }
    console.log(JSON.stringify(data));
    const response = await fetch(api_endpoint, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`
        },
        body: JSON.stringify(data)
    })
    console.log(response.json());
})

app.listen(PORT , ()=> console.log(`server started at ${PORT}`));