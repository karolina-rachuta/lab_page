import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Introduction from "./Introduction";
import About from "./About";
function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Introduction />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default Home;
