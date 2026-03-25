function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <button className="menu__button menu__button-accent" href="">
            Cappuccino
          </button>
        </li>
        <li className="menu__item">
          <button className="menu__button" href="">
            Machiato
          </button>
        </li>

        <li className="menu__item">
          <button className="menu__button" href="">
            Latte
          </button>
        </li>
        <li className="menu__item">
          <button className="menu__button" href="">
            Americano
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
