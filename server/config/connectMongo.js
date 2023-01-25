import moongose from "moongose"


const connectDB = (url) => {

  console.log(url)
  /*  moongose.set("strictQuery", true)
 
   moongose.connect(url)
     .then(() => console.log("db connected"))
     .catch((err) => console.log(err)) */
}

export default connectDB