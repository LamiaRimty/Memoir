import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//useParams
import "./Blog.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function Blog() {
  // const { id } = useParams();
  const [blogPost, setBlogPost] = useState();
  //   const PublicFolder = "http://localhost:8800/images/";
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const fetchBlogDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/blogs/${id}`);
      //console.log(res);
      setBlogPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <section id="Blog">
        {blogPost ? (
          <article className="singleBlog">
            <div className="container">
              <h1>{blogPost.title}</h1>
              <div>
                {/* {blogPost.image && (
                  <img src={PublicFolder + blogPost.image} alt="" />
                )} */}

                <img src={blogPost?.image} alt="" />
              </div>
              <p className="time">{blogPost.time}</p>
              <p className="desc">{blogPost.desc}</p>
            </div>
          </article>
        ) : null}
        <div className="buttons">
          <button className="button">
            <BsPencilSquare />
          </button>
          <button className="button">
            <AiOutlineDelete />
          </button>

          <button className="button">Update</button>
        </div>
      </section>
    </>
  );
}

export default Blog;
