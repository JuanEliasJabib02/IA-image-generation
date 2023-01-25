import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary"
import Post from "../models/post.js"

const postRoutes = express.Router()



export default postRoutes
