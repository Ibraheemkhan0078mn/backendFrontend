import express from "express"
const app= express()
import cors from "cors"










app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())







app.get("/v1/check", (req,res)=>{
    res.send("The serer is running properly")
})





app.listen(4000, ()=>{
    console.log("The server is running on port 4000")
})