import "./style.scss";

interface IPropsNav {
  className?: string;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<IPropsNav> = ({ className, setActive }) => {
  const handleClick = () => {
    if (setActive) {
      setActive((prevActive) => !prevActive);
    }
  };

  return (
    <nav className={`navigation ${className}`}>
      <ul>
        <li>
          <a href="#sobre" onClick={handleClick} aria-label="Sobre">
            Sobre
          </a>
        </li>
        <li>
          <a href="#habilidades" onClick={handleClick} aria-label="Habilidades">
            Habilidades
          </a>
        </li>
        <li>
          <a href="#portifolio" onClick={handleClick} aria-label="Portifólio">
            Portfólio
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleClick} aria-label="Contato">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
