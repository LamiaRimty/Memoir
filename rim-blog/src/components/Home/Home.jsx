import "./Home.css";
// import Gallery from "../Gallery/Gallery";
import Blogs from "../Blogs/Blogs";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <h1 className="intro animate__animated animate__zoomIn">Memoir</h1>
        </div>
      </section>

      <Blogs />
    </>
  );
}
export default Home;
