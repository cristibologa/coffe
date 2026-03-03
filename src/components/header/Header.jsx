import "./Header.css";
import HeaderTop from "./HeaderTop";
import Promo from "./Promo";
("./HeaderTop.jsx");
export default function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <input className="input-top" type="text" />
      <Promo />
    </header>
  );
}
