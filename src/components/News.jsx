import Navbar from "./Navbar";
import Footer from "./Footer";
import news from "../data/news.json";
import useContentful from "../useContenful.js";

function News() {
  const [newsList] = useContentful();
  return (
    <div className="container">
      <Navbar />
      <h2 className="news__hdl">News</h2>
      <div className="news">
        {console.log("news", newsList.items)}
        <div className="news__box">
          {newsList?.items?.map((item) => (
            <div className="info__box" key={item.sys.id}>
              <h3 className="info__hdl"> {item.fields.title}</h3>
              {console.log(item.fields.title)}
              <h4 className="info__date"> {item.fields.date}</h4>
              <p className="info__text">
                {item.fields.description.content[0].content[0].value}
              </p>
              {item.fields.image && (
                <img
                  src={item.fields.image.fields.file.url}
                  style={{ width: "100%" }}
                  alt={item.fields.title}
                />
              )}
            </div>
          ))}
          {news.map(({ title, date, text }, index) => (
            <div className="info__box" key={index}>
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
