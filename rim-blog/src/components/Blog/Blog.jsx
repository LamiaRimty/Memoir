import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Blog.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function Blog() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);
  //   const PublicFolder = "http://localhost:8800/images/";

  const fetchBlogDetails = async () => {
    const res = await axios.get(`http://localhost:8800/blog/${id}`);
    setBlogPost(res.data);
  };
  useEffect(() => {
    fetchBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/blog/" + id);
      // window.location.reload();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section id="blog">
        {blogPost ? (
          <article className="singleBlog">
            <div className="container" key={blogPost.id}>
              <h1>{blogPost.title}</h1>
              <div>
                {/* {blogPost.image && (
                  <img src={PublicFolder + blogPost.image} alt="" />
                )} */}

                <img src={blogPost.image} alt="" />
              </div>
              <p className="time">{blogPost.time}</p>
              <p className="desc">{blogPost.desc}</p>
            </div>
          </article>
        ) : null}
        <div className="buttons" key={blogPost.id}>
          <button
            className="btn delete-btn"
            onClick={() => handleDelete(blogPost.id)}
          >
            <AiOutlineDelete />
          </button>

          <button className="btn update-btn">
            <Link to={`/update/${blogPost.id}`}>
              <BsPencilSquare />
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Blog;
