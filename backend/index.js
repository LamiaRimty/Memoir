import express from "express"
import mysql from "mysql"

const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"bibliotheek123",
    database:"memoir"
})

app.get("/",(req,res)=>{
    res.json("This is the Memoir's backend for personal blogs")
})

app.get("/blogs",(req,res)=>{
    const q= "SELECT * FROM blogs";
    db.query(q,(err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
    })
  })

app.listen(8800,()=>{
    console.log("Connected to Memoir's backend!")
})