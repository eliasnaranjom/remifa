import '../css/CoursesCarousel.css';
import { useState } from 'react';
import CardCourse from './CardCourse';

const CoursesCarrusel = ({data}) => {

    return (
        <section className='CoursesCarousel' id='CoursesCarousel'>
            <h1>Nuestros cursos</h1>

            <div className='Carousel'>
                {data.map((item) => (
                    <CardCourse Title={item.Title} Description={item.Description} />
                ))};
            </div>
        </section>
    );
}

export default CoursesCarrusel;