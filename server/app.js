import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/connectMongo.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"




dotenv.config()


const app = express();

app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.use("/api/v1/dalle", dalleRoutes)
app.use("/api/v1/post", postRoutes)


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