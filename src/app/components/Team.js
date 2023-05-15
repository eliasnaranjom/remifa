import '../css/Team.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

const Team = ({ users }) => {

    return (
        <section className='Team' id='Team'>

            <h1>Nuestro equipo de trabajo</h1>
            
            <Swiper className='sw'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {users.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div class="personCard swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src={item.Image} alt="" class="card-img" />
                                </div>
                            </div>
                            <div class="card-content">
                                <h2 class="name">{item.Name}</h2>
                                <p class="description">{item.Position}</p>
                                <button class="button">Ver más</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Team;