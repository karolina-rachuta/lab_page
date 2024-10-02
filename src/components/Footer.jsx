import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__logo"src={Logo} alt="Logo icon" />
      <a href="https://instagram.com">Instagram</a>
    </div>
  );
}

export default Footer;
