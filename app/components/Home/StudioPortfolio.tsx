import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Company1 from "@/public/assets/images/companies/1.png";
import Company2 from "@/public/assets/images/companies/2.png";
import Company3 from "@/public/assets/images/companies/3.png";
import Company4 from "@/public/assets/images/companies/4.png";
import Company5 from "@/public/assets/images/companies/5.png";
import Company6 from "@/public/assets/images/companies/6.png";
import Company7 from "@/public/assets/images/companies/7.png";
import Company8 from "@/public/assets/images/companies/8.png";
import Company9 from "@/public/assets/images/companies/9.png";
import Company10 from "@/public/assets/images/companies/10.png";
import Company11 from "@/public/assets/images/companies/11.png";
import Company12 from "@/public/assets/images/companies/12.png";
import Company13 from "@/public/assets/images/companies/13.png";
import Company14 from "@/public/assets/images/companies/14.png";
import Company15 from "@/public/assets/images/companies/15.png";
import Company16 from "@/public/assets/images/companies/16.png";
import Company17 from "@/public/assets/images/companies/17.png";
import Company18 from "@/public/assets/images/companies/18.png";
import Company19 from "@/public/assets/images/companies/19.png";
import Company20 from "@/public/assets/images/companies/20.png";
import Company21 from "@/public/assets/images/companies/21.png";
import Company22 from "@/public/assets/images/companies/22.png";
import Company23 from "@/public/assets/images/companies/23.png";
import Company24 from "@/public/assets/images/companies/24.png";
import Company25 from "@/public/assets/images/companies/25.png";
import Company26 from "@/public/assets/images/companies/26.png";
import Company27 from "@/public/assets/images/companies/27.png";
import Company28 from "@/public/assets/images/companies/28.png";
import Company29 from "@/public/assets/images/companies/29.png";
import Company30 from "@/public/assets/images/companies/30.png";
import Company31 from "@/public/assets/images/companies/31.png";
import Company32 from "@/public/assets/images/companies/32.png";
import Company33 from "@/public/assets/images/companies/33.png";
import Company34 from "@/public/assets/images/companies/34.png";
import Company35 from "@/public/assets/images/companies/35.png";
import Company36 from "@/public/assets/images/companies/36.png";
import Company37 from "@/public/assets/images/companies/37.png";
import Company38 from "@/public/assets/images/companies/38.png";
import Company39 from "@/public/assets/images/companies/39.png";
import Company40 from "@/public/assets/images/companies/40.png";
import Company41 from "@/public/assets/images/companies/41.png";
import Company42 from "@/public/assets/images/companies/42.png";
import Company43 from "@/public/assets/images/companies/43.png";
import Company44 from "@/public/assets/images/companies/44.png";
import Company45 from "@/public/assets/images/companies/45.png";
import Company46 from "@/public/assets/images/companies/46.png";
import Company47 from "@/public/assets/images/companies/47.png";
import Company48 from "@/public/assets/images/companies/48.png";

const StudioPortfolio = () => {
  const images = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
    Company8,
    Company9,
    Company10,
    Company11,
    Company12,
    Company13,
    Company14,
    Company15,
    Company16,
    Company17,
    Company18,
    Company19,
    Company20,
    Company21,
    Company22,
    Company23,
    Company24,
    Company25,
    Company26,
    Company27,
    Company28,
    Company29,
    Company30,
    Company31,
    Company32,
    Company33,
    Company34,
    Company35,
    Company36,
    Company37,
    Company38,
    Company39,
    Company40,
    Company41,
    Company42,
    Company43,
    Company44,
    Company45,
    Company46,
    Company47,
    Company48,
  ];

  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[551px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium">
          Our Studio Portfolio
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          Our 2024 Service Incubator Portfolio Companies
        </p>
      </span>

      <div className="flex flex-col gap-[44px]">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-[16px] lg:gap-[32px] w-full">
          {images.map((image, index) => (
            <span
              key={index}
              className="bg-white border border-[#E9E9E9] rounded-[12px] w-[120px] min-h-[60px] flex justify-center items-center cursor-pointer"
            >
              <Image
                src={image}
                alt="company"
                // alt={`Image ${index + 1}`}
                // fill
                className="object-contain"
              />
            </span>
          ))}
        </div>

        <Link
          href=""
          className="flex gap-2 items-center text-black w-max mx-auto"
        >
          <span className="underline">View All Companies </span>
          <FiArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
};

export default StudioPortfolio;
