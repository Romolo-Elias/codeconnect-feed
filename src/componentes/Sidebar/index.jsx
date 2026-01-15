import Logo from "./assets/Logo.svg";
import Feed from "./assets/Feed.svg";
import Perfil from "./assets/Perfil.svg";
import Sobre from "./assets/Sobre.svg";
import Sair from "./assets/Sair.svg";
import "./styles.css";

function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>

          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Sobre} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>

          <li>
            <a href="#" className="item__link">
              <img src={Sair} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
