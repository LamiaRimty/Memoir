// eslint-disable-next-line
import "./Blogs.css";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <section id="Blogs">
      <h1>Rimty's Blogs📚</h1>
      <article className="singleBlog Blogs">
        {blogs.map((blog) => (
          <div className="container container-blog-wrap Blog" key={blog.id}>
            <div>{blog.image && <img src={blog.image} alt="blog-img" />}</div>
            <h2 className="blogTitle">{blog.title} </h2>
            <h7>{blog.qoute}</h7>
            <p className="time">{blog.time}</p>
            <p className="blogDesc">{blog.desc}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Blogs;
