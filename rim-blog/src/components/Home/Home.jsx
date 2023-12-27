import "./Home.css";
// import Gallery from "../Gallery/Gallery";
import Blogs from "../Blogs/Blogs";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <div className="home-title">
            <h1 className="home-title animate__animated animate__zoomIn">
              Memoir
            </h1>
            <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
              <h3 className="home-subtitle animate__animated animate__lightSpeedInLeft">
                Personal Blog by Rimty
              </h3>
            </a>
          </div>
          <img
            className="home-img col-xxl-8 px-4 py-4 home-img-div animate__animated animate__zoomInDown  animate__delay-1s"
            alt=""
            // src="https://img.freepik.com/premium-vector/happy-girl-dressed-trendy-clothes-riding-city-bicycle-with-flower-bouquet-front-basket-adorable-young-hipster-woman-bike-cute-pedaling-female-bicyclist-flat-cartoon-vector-illustration_198278-12371.jpg"
            src="https://img.freepik.com/premium-photo/woman-riding-bike-with-basket-flowers-basket-generative-ai_958192-36230.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais"
          />
        </div>
      </section>

      <Blogs />
    </>
  );
}
export default Home;
