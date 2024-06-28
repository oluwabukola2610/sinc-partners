"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay, Pagination]);

import Hero1 from "@/public/assets/images/hero-1.png";
import Hero2 from "@/public/assets/images/hero-2.png";
import Hero3 from "@/public/assets/images/hero-3.png";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    image: Hero1,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
  },
  {
    image: Hero2,
    title: "Empowering Startups to Reach New Heights",
    description:
      "Join forces with industry experts to propel your startup forward. Our partners offer invaluable insights and services in exchange for equity.",
  },
  {
    image: Hero3,
    title: "Innovate and Grow with SINC Partners",
    description:
      "Our network of professionals is dedicated to helping startups succeed. Collaborate with top talent and take your business to the next level.",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center w-full justify-between bg-white pt-0.5 active:cursor-grab">
              <div className="w-full  px-4 py-8">
                <div className="max-w-lg mx-auto lg:max-w-[500px]">
                  <h1 className="text-3xl lg:text-5xl font-semibold text-[#212121] leading-[1.2] mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-[#4E4E4E] text-lg lg:text-2xl">
                    {slide.description}
                  </p>
                  <Link
                    href=""
                    className="inline-block mt-4 text-white bg-[#303030] font-semibold border border-[#212121] px-6 py-3 rounded-full hover:scale-95 transition duration-150"
                  >
                    SINC With Us
                  </Link>
                </div>
              </div>
              <div className="w-full  ">
                <Image
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  objectFit="contain"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
