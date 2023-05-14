import '../css/CoursesCarousel.css';
import { BsBookmark } from "react-icons/bs";
import CardCourse from './CardCourse';

const CoursesCarrusel = props => {


    return (
        <section className='CoursesCarousel' id='CoursesCarousel'>
            <h1>Nuestros cursos</h1>

            <div className='Carousel'>
                <CardCourse Title='Curso de Guitarra' Description='Aprende desde 0' />
                <CardCourse Title='Curso de Piano' Description='Aprende desde 0' />
                <CardCourse Title='Curso de Percución' Description='Aprende desde 0' />
            </div>

            <div className='Carousel'>
                <CardCourse Title='Curso de voz' Description='Aprende desde 0' />
                <CardCourse Title='Curso de violín' Description='Aprende desde 0' />
            </div>
        </section>
    );
}

export default CoursesCarrusel;