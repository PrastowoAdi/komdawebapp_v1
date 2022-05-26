/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import {
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Feedback() {
  return (
    <section className="pt-20 dark:bg-zinc-900" id="feedback">
      <div className="container">
        <Swiper
      // install Swiper modules
          modules={[Navigation]}
          spaceBetween={10}
          navigation
          grabCursor
          loop
          className="myswiper"
        >
          <SwiperSlide>
            <div className="w-full bg-cover bg-center h-96 text-white py-24 px-10 object-fill coba">
              <div className="md:w-1/2 mx-auto text-center lg:w-2/3">
                <img src="/img/avatar-man.png" alt="avatar" className="w-[100px] h-[100px] m-auto" />
                <p className="text-3xl font-bold">Prastowo Adi</p>
                <blockquote className="mt-3 italic font-thin text-lg lg:text-xl">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquam labore.
                  Porro consectetur minima veritatis voluptatibus dolore tenetur error suscipit."
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-cover bg-center h-96 text-white py-24 px-10 object-fill coba">
              <div className="md:w-1/2 mx-auto text-center lg:w-2/3">
                <img src="/img/avatar-women.png" alt="avatar" className="w-[100px] h-[100px] m-auto" />
                <p className="text-3xl font-bold">Miya</p>
                <blockquote className="mt-3 italic font-thin text-lg lg:text-xl">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, aliquam labore.
                  Porro consectetur minima veritatis voluptatibus dolore tenetur error suscipit."
                </blockquote>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}
