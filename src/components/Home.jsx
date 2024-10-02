import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
}
export default Home;
