import express from "express";
import mysql from "mysql";
import cors from "cors"
import multer from 'multer';
const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"bibliotheek123",
    database:"memoir"
})



// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Create a folder named 'uploads' to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename to be unique
  },
});
const upload = multer({ storage: storage });




app.use(express.json()) 
app.use(cors())//active axios localhost to Blogs.jsx
app.use('/uploads', express.static('uploads'));


app.get("/",(req,res)=>{
  res.json("This is the Memoir's backend for personal blogs")
})

 
app.get("/blogs",(req,res)=>{
    const q= "SELECT * FROM memoir.blogs";
    db.query(q,(err,data)=>{
      if(err) return res.json(err)
      console.log("Blog Data:", data);
      return res.json(data)
    })
  })

  app.get("/blog/:id",(req,res)=>{ 
    
    const blogId =  req.params.id;
    const q= "SELECT * FROM memoir.blogs WHERE id = ? ";
   

db.query(q,[blogId],(err,data)=>{
  
  if (err) throw err;
    res.json(data[0]);
});
   })
   

   app.post("/blogs", upload.single('image'), (req, res) => {
    const q = "INSERT INTO blogs (`image`, `title`, `time`, `qoute`, `desc`) VALUES (?, ?, ?, ?, ?)";
    const values = [
      req.file.filename,
      req.body.title,
      req.body.time,
      req.body.qoute,
      req.body.desc,
    ];
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      console.log("Image Path:", req.file.filename); // saving a new post
      return res.json("Wow, Blog has been created!");
      
    });
   

  });





app.delete("/blog/:id",(req,res)=>{
  const blogId = req.params.id;
  const q = "DELETE FROM blogs WHERE id = ?"

  db.query(q,[blogId],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Blog has been Succesfully deleted!")
  })
})

app.put("/blog/:id",(req,res)=>{
  console.log("Received update request:", req.body);
  console.log(1)
  const blogId = req.params.id;
  console.log(11)
  const q= "UPDATE blogs SET `image`= ? , `title`= ?, `time` = ? ,`qoute`= ? ,`desc`= ? WHERE `id` = ? ";
  console.log(111)
  const values =[
    req.body.image,
    req.body.title,
    req.body.time,
    req.body.qoute,
    req.body.desc,
    blogId
  ]
  console.log(1111)
  db.query(q,[...values],(err,data)=>{
    console.log(1)
    if(err) return res.json(err)
    return res.json("Blog has been Succesfully updated!")
    console.log(1)
  })
  console.log(11111)

})

app.listen(8800,()=>{
    console.log("Connected to Memoir's backend!")
})