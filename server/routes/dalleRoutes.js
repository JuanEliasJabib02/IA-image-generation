import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config()




const configuration = new Configuration({
  apiKey: process.env.OPENAPI_APIKEY,
})

const openai = new OpenAIApi(configuration)

const dalleRoutes = express.Router()

dalleRoutes.get("/", (req, res) => {
  res.send("hola from dalle")
})

dalleRoutes.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;


    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json"
    })


    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({
      photo: image
    })

  } catch (error) {
    console.log(error)
    console.log("el error esta aqui")
    res.status(500)
  }

})



export default dalleRoutes
