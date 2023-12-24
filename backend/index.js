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

  app.post("/blogs",(req,res)=>{
    const q= "INSERT INTO blogs (`image`, `title`, `time`, `qoute`, `desc`) VALUES (?)"
    const values=[
        "image from backend",
        "title from backend",
        "time from backend",
        "qoute from backend",
        "desc from backend",
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Wow,Blog has been created!")
      })
})


app.listen(8800,()=>{
    console.log("Connected to Memoir's backend!")
})