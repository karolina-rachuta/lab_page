import Footer from "./Footer";
import Navbar from "./Navbar";
import people from "../data/people.json";
import image_url from "../assets/avatar.png";

function People() {
  return (
    <div className="container">
      <Navbar />
      <h2 className="people__hdl">Members</h2>
      <div className="people">
        <div className="people__box">
          {people.map(({ name, title, description }) => (
            <div className="person__row">
              <img className="person__img" src={image_url} alt="" />
              <div className="person__text-column">
                <h3 className="person__name"> {name}</h3>
                <h4 className="person__title"> {title}</h4>
                <p className="person__desciption">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default People;
