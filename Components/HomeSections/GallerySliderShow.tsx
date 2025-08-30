import React from "react";
import Center from "../Basic/Center/Center";
import VStack from "../Basic/VStack/VStack";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import GalleryCard from "./GalleryCard";

export default function GallerySliderShow() {
  return (
    <Center>
      <VStack className="common-space-x gap-[1rem] items-center w-full">
        <p className="text-white border-[2px] border-[#024D83] p-[0.5rem] px-[1rem] rounded-full">
          Gallery
        </p>
        <h3 className="section-heading text-dull max-w-[30rem] text-center">
          Asif's Lifecycle
        </h3>
        <div className="w-full">
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.5}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // ✅ stops autoplay on hover
              }}
              breakpoints={{
                640: { slidesPerView: 3 }, // Tablet
                1024: { slidesPerView: 5 }, // Desktop
              }}
            >
              {[...Array(20)].map((_, i) => (
                <SwiperSlide key={i}>
                  <GalleryCard
                    src={`/Assets/slider/${i + 1}.jpeg`}
                    alt={`slide ${i + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </VStack>
    </Center>
  );
}
