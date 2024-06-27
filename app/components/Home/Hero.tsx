"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero1 from "@/public/assets/images/hero-1.png";
import Hero2 from "@/public/assets/images/hero-2.png";
import Hero3 from "@/public/assets/images/hero-3.png";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundColor: "red", display: "flex" }}
            // className="grid lg:grid-cols-2 w-full bg-white pt-0.5 active:cursor-grab"
            className="w-full pt-0.5 active:cursor-grab"
          >
            <div className="block flex-1 flex-col justify-center items-center text-[#212121] px-4 py-8 lg:px-8">
              <div className="lg:max-w-[500px] flex flex-col gap-8">
                <span className="space-y-4 select-none">
                  <h1 className="text-[32px] font-semibold leading-[38.4px]">
                    {slide.title}
                  </h1>
                  <h2 className="text-[#4E4E4E] text-[24px]">
                    {slide.description}
                  </h2>
                </span>
                <Link
                  href=""
                  className="text-white text-base bg-[#303030] font-semibold border border-[#212121] px-[32px] py-[15px] rounded-full active:scale-95 duration-150 w-max"
                >
                  SINC With Us
                </Link>
              </div>
            </div>

            <div className="lg:inline-block flex-1 hidden justify-center items-center">
              <Image
                src={slide.image}
                className="w-full"
                alt={`Banner ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
