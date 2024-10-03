import Navbar from './Navbar';
import Footer from './Footer';
import publications from '../data/publications.json';
import Articleicon from '../assets/article.png';
import Newspaper from '../assets/news.png';

function Publications() {
    return (
        <div className="container">
          <Navbar />
          <div className="publications">
            <h2 className="publications__hdl">Publications</h2>
            <div className="publications__list">
              {publications.map(({ title, short_description, journal_name, year, volume, pages, authors }) => (
                <div className="publication-box">
                    <div className='publication__title-box'><img src={Articleicon} alt="" style={{width: "50px"}}/><h3 className="text-box__hdl"> {title}</h3></div>
                  <h4 className="publication__authors"> {authors.map((author) => author)}</h4>
                  <h4 className="publication__date">  {journal_name} </h4>
                  <h4 className="publication__date">  {year}, {volume}, {pages} </h4>
                  <p className="publication__text">{short_description}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer/>
        </div>
      );
}

export default Publications;