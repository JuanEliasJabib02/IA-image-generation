import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectMongo.js"



dotenv.config()


const app = express();

app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get("/", async (req, res) => {
  res.send("Hello From DAlle");
})


const startServer = async () => {

  try {
    connectDB(process.env.MONGODB_URL)
  } catch (error) {
    console.log(error)
  }

  app.listen(4000, () => console.log("Server has started on port"))
}

startServer()