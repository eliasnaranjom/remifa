import '../css/Info.css';

const Info = props => {

    return (
        <section className={props.classNameDirection} id='Info'>
            <div className='InfoImg'>
                <img src='../guitar.jpg' alt='Guitar' />
            </div>
            <div className='InfoText'>
                <h1>Titulo información</h1>
                <p>La fundación REMIFA es una organización sin fines de lucro que tiene como misión promover la educación musical de la comunidad, especialmente de los más pequeños. Creemos que la música es una herramienta poderosa para el desarrollo integral de las personas, y que puede contribuir a mejorar la convivencia, la autoestima y la creatividad. En la fundación REMIFA ofrecemos talleres, cursos, conciertos y otras actividades musicales para todos los gustos y edades. Nuestro lema es: "La música nos une, nos hace felices y nos hace mejores".</p>
            </div>
        </section>
    );
}

export default Info;