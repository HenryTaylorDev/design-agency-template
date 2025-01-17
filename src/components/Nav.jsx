import "../styles/nav.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <h3 className="white">&_DD</h3>
      </div>
      <div className="nav__links">
        <a href="/">Works</a>
        <a href="/">About</a>
      </div>
    </nav>
  );
};
