import "./header.css";

const Header = (props) => (
  <header className="header">
    <div className="contain">
      <div className="header__content">{props.children}</div>
    </div>
  </header>
);

export default Header;
