import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()

app.use(cors())
app.use(express.json())


app.post("/translate", async (req, res) => {
    try{
        const {text, from, to } = req.body
        if(!text || !from || !to){
            return res.status(400).json({error: "Missing data"})
        }

        const response = await axios.get("https://api.mymemory.translated.net/get", {
            params: {
                q: text,
                langpair: `${from}|${to}`
            }
        })

        res.json({
            translatedText: response.data.responseData.translatedText
        })

    }catch(e){
        console.error(e.message)
        res.status(500).json({error: "Translation failed"})
    }
})

export default app