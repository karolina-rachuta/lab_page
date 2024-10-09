import Navbar from "./Navbar";
import Footer from "./Footer";
import news from "../data/news.json";
import useContentful from "../useContenful";

function News() {
  const [image, title, date]= useContentful();
  return (
    <div className="container">
      <Navbar />
      <h2 className="news__hdl">News</h2>
      <div className="news">
        <div className="news__box">
        <div className="info__box">
              <h3 className="info__hdl"> {title}</h3>
              <h4 className="info__date"> {date}</h4>
              {/* <p className="info__text">{text}</p> */}
              <img src={image} style={{width: '100px'}} alt="" />
            </div>
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
