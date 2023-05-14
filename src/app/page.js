'use client';

import './css/Style.css';
import Header from './components/Header';
import About from './components/About';
import MissionVision from './components/MissionVision';
import CoursesCarousel from './components/CoursesCarousel';
import Info from './components/Info';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <About/>

        <MissionVision />

        <CoursesCarousel />

        <Info classNameDirection='InfoRight' />

        <Info classNameDirection='InfoLeft' />

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