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
    <section className="w-full">
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center w-full bg-white pt-0.5 active:cursor-grab">
            <div className="w-full lg:w-1/2 px-4 py-8">
              <div className="max-w-lg mx-auto lg:max-w-[500px]">
                <h1 className="text-3xl lg:text-5xl font-semibold text-[#212121] leading-[1.2] mb-4">{slide.title}</h1>
                <p className="text-[#4E4E4E] text-lg lg:text-2xl">{slide.description}</p>
                <Link href="" className="inline-block mt-4 text-white bg-[#303030] font-semibold border border-[#212121] px-6 py-3 rounded-full hover:scale-95 transition duration-150">SINC With Us</Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-64 lg:h-auto relative ">
              <Image src={slide.image} alt={`Banner ${index + 1}`} layout="fill" objectFit="contain"  />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
