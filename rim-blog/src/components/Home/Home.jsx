import "./Home.css";
// import Gallery from "../Gallery/Gallery";
import Blogs from "../Blogs/Blogs";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <h1 className="intro animate__animated animate__zoomIn">Memoir</h1>
          {/* <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6  home-img animate__animated animate__zoomInDown  animate__delay-1s">
              <img
                src="https://img.freepik.com/premium-photo/woman-riding-bike-with-basket-flowers-basket-generative-ai_958192-36230.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais"
                className="d-block  mx-lg-auto img-fluid home-img "
                alt="biker girl"
                width="500"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
                <h1 className="intro display-5 fw-bold lh-1 mb-3  animate__animated animate__rollIn">
                  Hi, I'm Rimty!
                </h1>
              </a>
              <h3 className="info animate__animated animate__backInRight">
                UI/UX & Frontend Developer
              </h3>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href="#contact"
                  type="button"
                  className="button btn-lg px-4 me-md-2 animate__animated animate__backInUp animate__delay-1s"
                >
                  Contact Me
                  <i className="uil uil-message button-icon"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Blogs />
    </>
  );
}
export default Home;
