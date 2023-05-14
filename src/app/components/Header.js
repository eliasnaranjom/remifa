import '../css/Header.css';
import Nav from './Nav';
import { useContext } from 'react';
import { SiteContext } from './context/SiteContext.js';
import Button from './Button.js';

const Header = props => {

    const site = useContext(SiteContext);

    return (
        <header className='headerApp'>
            <Nav SiteName={site} />

            <div className='headerContent'>
                <div className='titlePage'>
                    <div className='welcomeMessege'>
                        <h1>La música es un lenguaje universal. ¡Aprende a hablarlo con nosotros!</h1>
                        <p>Aprende a cantar o ejecutar un instrumento con nuestros cursos para todas las edades.</p>
                        <Button>
                            Nuestros cursos
                        </Button>
                    </div>
                </div>
                <div className='imgTitle'>
                    <img src='../menMusic1.svg' alt='Imagena' />
                </div>
            </div>
        </header>
    );
}

export default Header;