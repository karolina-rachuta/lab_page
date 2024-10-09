import Navbar from "./Navbar";
import Footer from "./Footer";
import publications from "../data/publications.json";
import Articleicon from "../assets/article.webp";
import LinkIcon from "../assets/link.png";

function Publications() {
  return (
    <div className="container">
      <Navbar />
      <h2 className="publications__hdl">Publications</h2>
      <div className="publications">
        <div className="publications__list">
          {publications.map(
            ({
              title,
              short_description,
              journal_name,
              year,
              volume,
              pages,
              authors,
              url,
            }) => (
              <div className="publication-box">
                <div className="publication__title">
                  <img src={Articleicon} alt="" style={{ width: "50px" }} />
                  <h3 className="text-box__hdl"> {title}</h3>
                </div>
                <p className="publication__authors">
                  {" "}
                  {authors.map((author) => author)}
                </p>
                <p className="publication__date">
                  {" "}
                  <span style={{ fontStyle: "italic" }}>
                    {journal_name},
                  </span>{" "}
                  <span style={{ fontWeight: "700" }}>{year}</span>, {volume},{" "}
                  {pages}{" "}
                </p>
                <p className="publication__text">{short_description}</p>
                <a className="publication__link" href="{url}">
                  More{" "}
                  <img
                    className="publication__linkIcon"
                    src={LinkIcon}
                    alt="Link icon"
                  />
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
