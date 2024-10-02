import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="hero">
          <h1>Labotory of Spectroscopy and Physics Organosilicon Compounds</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
