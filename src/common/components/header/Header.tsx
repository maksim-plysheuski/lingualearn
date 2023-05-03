import s from "common/components/header/Header.module.scss"
import logo from "common/components/header/projectLogo.svg"

export const Header = () => {
  return (
    <header className={s.header} >
      <div className={s.headerContainer}>
        <a href='/' className={s.logoBlock}>
          <img src={logo} alt="" />
          <span>Lingualearn</span>
        </a>
          <button> some button</button>
      </div>
    </header>
  );
};