import Navbar from "./Navbar";
import Footer from "./Footer";
import news from "../data/news.json";

function News() {
  return (
    <div className="container">
      <Navbar />
      <h2 className="news__hdl">News</h2>
      <div className="news">
        <div className="news__box">
          {news.map(({ title, date, text }) => (
            <div className="info__box">
              <h3 className="info__hdl"> {title}</h3>
              <h4 className="info__date"> {date}</h4>
              <p className="info__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default News;
