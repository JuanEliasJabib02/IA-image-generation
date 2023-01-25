import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary"
import Post from "../models/post.js"

dotenv.config()

/* Cloudinary  */

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})
const postRoutes = express.Router()


//Get all post

postRoutes.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log("executed here")

    res.status(200).json({ status: true, data: posts })
  } catch (error) {
    res.status(500).json({ status: false, message: error })
  }
})


// Create post route

postRoutes.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url
    })



    res.status(201).json({ succes: true, data: newPost })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error })
  }
})



export default postRoutes
