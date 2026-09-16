import logo from "./logo.png"
import "./Header.css"
function Header() {
  return (
    <header>
      <div className="logoBlock">
        <img src={logo}  />
      </div>
      <div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        </nav>
      </div>

      <div>
        <button className="btn">Нажать</button>
      </div>
    </header>
  );
}

export default Header;
