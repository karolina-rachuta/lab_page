import Navbar from "./Navbar";
import Footer from "./Footer";
import news from "../data/news.json";

function News() {
  return (
    <div className="container">
      <Navbar />
      <div className="news">
        <h2 className="news__hdl">News</h2>
        <div className="news__text-box">
          {news.map(({ title, date, text }) => (
            <div className="text-box__news">
              <h3 className="text-box__hdl"> {title}</h3>
              <h4 className="text-box__hdl"> {date}</h4>
              <p className="text-box__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default News;
