'use client';

import './css/Style.css';
import Header from './components/Header';
import About from './components/About';
import MissionVision from './components/MissionVision';
import CoursesCarousel from './components/CoursesCarousel';
import Info from './components/Info';
import Footer from './components/Footer';


export default function Home() {

  let data = [
    { Title: 'Curso de Guitarra', Description: 'Aprende desde 0' },
    { Title: 'Curso de Piano', Description: 'Aprende desde 0' },
    { Title: 'Curso de Percución', Description: 'Aprende desde 0' },
    { Title: 'Curso de Canto', Description: 'Aprende desde 0' },
    { Title: 'Curso de Violin', Description: 'Aprende desde 0' },
    { Title: 'Curso de infantil', Description: 'Mus primeras notas' }
  ];

  return (
    <div>
      <Header />
      <main>
        <About />

        <MissionVision />

        <CoursesCarousel data={data} />

        <Info Img='guitar.jpg' ClassNameDirection='InfoRight' Title='Formando músicos integrales' Description='Creemos que la música es un arte que trasciende fronteras y enriquece el alma humana, por lo que nuestra fundación está dedicada a ofrecer una educación musical de excelencia que fomente la creatividad, la pasión y el compromiso con la sociedad, para formar músicos integrales que inspiren y transformen el mundo con su arte.' />

        <Info Img='mic.jpg' ClassNameDirection='InfoLeft' Title='Música para transformar vidas' Description='En nuestra fundación creemos que la música es un medio para potenciar el desarrollo humano, por lo que nos enfocamos en brindar una formación musical que no solo fomente habilidades técnicas, sino que también cultive valores como la disciplina, la resiliencia y el trabajo en equipo, para formar músicos comprometidos en transformar vidas a través del poder del arte.' />

        {/* <section>
          Equipo de trabajo
        </section>

        <section>
          Noticias
        </section> */}

      </main>
      <Footer />
    </div>
  )
}