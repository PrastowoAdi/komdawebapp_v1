/* eslint-disable import/no-unresolved */
import {
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Information() {
  return (
    <section id="infoSlide" className="pt-20 dark:bg-zinc-900">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation
          grabCursor
          loop
          className="myswiper"
        >
          <SwiperSlide>
            <div className="text-white">
              <img src="/img/feedback.png" className="w-full h-[200px] sm:h-[400px]" alt="bg-info" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white">
              <img src="/img/feedback.png" className="w-full h-[200px] sm:h-[400px]" alt="bg-info" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
