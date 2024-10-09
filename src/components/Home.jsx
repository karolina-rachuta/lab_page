import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Introduction from "./Introduction";
import About from "./About";
<<<<<<< HEAD
//const LazyAbout = React.lazy(() => import('../components/About'));
=======
>>>>>>> 419468c (installing and applying contentful, testing for news)

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
