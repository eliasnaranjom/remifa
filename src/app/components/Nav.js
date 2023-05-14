import '../css/Nav.css';
import Button from './Button';

const Nav = props => {

  return (
    <nav className="Nav">
      <img className='NavTitle' src={`../${props.SiteName}`} alt='Imagen' />
      <ul className="Nav-list">
        {/* <li className="Nav-item">
          <a href='#'>
            Inicio
          </a>
        </li> */}
        <li className="Nav-item">
          <a href='#About'>
            Acerca de nosotros
          </a>
        </li>
        <li className="Nav-item">
          <a href='#CoursesCarousel'>
            Nuestros cursos
          </a>
        </li>
        <li className="Nav-item">
          <a href='#Info'>
            Información
          </a>
        </li>
      </ul>
      <Button onClick={() => console.log('')}>
        Cursos
      </Button>
    </nav>
  );
}

export default Nav;
