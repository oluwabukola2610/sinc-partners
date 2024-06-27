"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaXTwitter,
} from "react-icons/fa6";
import Logo from "@/public/assets/images/SINC LOGO white outline 1.png";
import ABA from "@/public/assets/images/Outline ABA+ 1.png";
import WhatsApp from "@/public/assets/images/whatsapp.png";
import Gasus from "@/public/assets/images/GASUS white SVG-01 1.png";
import SocialIcon from "@/public/assets/images/social-icon.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#212121] text-white divide-y-2 divide-[#E9E9E94D]">
      {/* newsletter */}

      <div className="mx-auto max-w-[1480px] px-4 md:px-8 py-6 lg:py-8">
        <div className="max-w-[553px] flex flex-col gap-[44px]">
          <span className="flex flex-col gap-[12px]">
            <h3 className="text-[30px] lg:text-[60px] font-medium">
              Newsletter
            </h3>
            <p className="">
              Get the latest about SINC Partners, our startup Incubator program,
              Portfolio company offerings - straight into your inbox.
            </p>
          </span>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center rounded-[25px]"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="text-[#BABABA] text-base w-full rounded-[25px] bg-transparent outline-none -mr-16 py-3 pl-4 pr-[4.5rem] border border-[#676767] h-[50px]"
              required
            />
            <button className="py-3 px-3 w-[150px] text-base rounded-[25px]  font-semibold text-[#212121] bg-white hover:bg-gray-100 active:scale-95 duration-150 outline-none h-[50px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* links */}
      <footer>
        <div className="mx-auto max-w-[1480px] px-4 md:px-8 py-6 lg:py-8 flex gap-[44px] lg:justify-between flex-wrap lg:flex-nowrap">
          <span className="flex flex-col gap-[16px] lg:max-w-[220px]">
            <Link href="" className="w-max">
              <Image src={Logo} alt="Logo" />
            </Link>

            <p className="text-[14px] lg:leading-[27px]">
              SINC Partners is a service incubation company connecting experts
              in product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity
              (usually 0.5% to 2%)
            </p>
          </span>

          {/* Platforms */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium text-[18px]">Platforms</p>

            <span className="flex flex-col gap-[8px]">
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Kofoundme
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                lnResidency
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Service Market
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Founders School
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Metty
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Grantty
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Boldtell
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Chekwa
              </Link>
            </span>
          </div>

          {/* Initiatives */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium text-[18px]">Initiatives</p>

            <span className="flex flex-col gap-[8px]">
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Jabi Plains
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Local Pricing Initiative
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Scholarship Program
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                SSMN Pricing
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                University STEM
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                University lnResidency
              </Link>
              <Link
                href=""
                className="text-base text-[#C9C9C9] link-hover flex gap-1 items-center"
              >
                1M Nigeria{" "}
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_536_5856)">
                    <path
                      d="M2.27778 2.22266C1.80628 2.22266 1.3541 2.40996 1.0207 2.74336C0.687301 3.07675 0.5 3.52894 0.5 4.00043L0.5 12.0004C0.5 12.4719 0.687301 12.9241 1.0207 13.2575C1.3541 13.5909 1.80628 13.7782 2.27778 13.7782H5.83333V2.22266H2.27778Z"
                      fill="#009A49"
                    />
                    <path
                      d="M5.83334 2.22266H11.1667V13.7782H5.83334V2.22266Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M14.7222 2.22266H11.1667V13.7782H14.7222C15.1937 13.7782 15.6459 13.5909 15.9793 13.2575C16.3127 12.9241 16.5 12.4719 16.5 12.0004V4.00043C16.5 3.52894 16.3127 3.07675 15.9793 2.74336C15.6459 2.40996 15.1937 2.22266 14.7222 2.22266Z"
                      fill="#009A49"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_536_5856">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Products
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Founders Festival
              </Link>
            </span>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium text-[18px]">About Us</p>

            <span className="flex flex-col gap-[8px]">
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Who We Are
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Our People
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Concept Innovations
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Our Process
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Investors Network
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                CSR & Events
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Career
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Contact
              </Link>
            </span>
          </div>

          {/* More */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-medium text-[18px]">More</p>

            <span className="flex flex-col gap-[8px]">
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Services
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Equity Jobs
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                EIR Program
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Offers
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Innovation News
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                FAQ
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Blog & Resources
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Press
              </Link>
            </span>
          </div>

          {/* locations */}
          <div className="flex flex-col gap-[16px] lg:border-l border-[#E9E9E94D] lg:pl-4">
            {/* lg:min-w-[285px] */}
            <p className="font-medium text-[18px]">Locations</p>

            <span className="flex flex-col gap-[8px]">
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Abuja, Nigeria
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Lagos, Nigeria
              </Link>
              <Link href="" className="text-base text-[#C9C9C9] link-hover">
                Philadelphia, USA
              </Link>
            </span>

            <span className="flex gap-4 lg:gap-8 items-end">
              <span className="space-y-2">
                <Image src={ABA} alt="ABA" />
                <p>Trusted Business</p>
              </span>
              <Link href="" className="flex flex-col items-center space-y-2">
                <Image src={WhatsApp} alt="WhatsApp" className="h-max" />
                <p>Chat with US</p>
              </Link>
            </span>
          </div>
        </div>
      </footer>

      {/* copyright */}
      <footer>
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex flex-col gap-4">
          <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 justify-between items-center">
            <p className="text-[14px] text-center lg:text-start">
              Guaranteed 2x on your service or cash investment, usually been the
              first to invest. <b>Get in early and SINC</b> your guaranty!
            </p>
            <span className="flex gap-4 items-center lg:max-w-[356px]">
              <Image src={Gasus} alt="Gasus" />
              <p className="text-[12px] font-light">
                We are a business built on the foundation of Christian values
                and belief
              </p>
            </span>
          </div>

          <div className="flex lg:flex-row flex-col gap-4 lg:gap-8 justify-between items-center">
            <p className="py- text-center lg:text-start">
              © {currentYear} {""}
              <Link href="" className="hover:underline duration-150">
                SINC Partners Ltd
              </Link>
              . All rights reserved
            </p>

            <span className="flex gap-[20px]">
              <Link href="" className="underline">
                Privacy Policy
              </Link>
              <Link href="" className="underline">
                Terms of Service
              </Link>
              <Link href="" className="underline">
                Security
              </Link>
            </span>

            <span className="flex gap-[16px] items-center justify-center lg:justify-start">
              <Link
                href=""
                target="_blank"
                className="rounded-full bg-white text-[#212121] p-2 hover:scale-110 duration-150"
              >
                <FaFacebookF className="size-4" />
              </Link>
              <Link
                href=""
                target="_blank"
                className="rounded-full bg-white text-[#212121] p-2 hover:scale-110 duration-150"
              >
                <FaTwitter className="size-4" />
              </Link>
              <Link
                href=""
                target="_blank"
                className="rounded-full bg-white text-[#212121] p-2 hover:scale-110 duration-150"
              >
                <FaInstagram className="size-4" />
              </Link>
              <Link
                href=""
                target="_blank"
                className="rounded-full bg-white text-[#212121] p-2 hover:scale-110 duration-150"
              >
                <FaLinkedinIn className="size-4" />
              </Link>
              <Link
                href=""
                target="_blank"
                className="rounded-full p-1 text-white hover:scale-110 duration-150"
              >
                <FaMedium className="size-6" />
              </Link>

              <Link
                href=""
                target="_blank"
                className="rounded-full p-1 text-white hover:scale-110 duration-150"
              >
                <FaYoutube className="size-6" />
              </Link>
              <Link
                href=""
                target="_blank"
                className="rounded-full p-1 text-white hover:scale-110 duration-150"
              >
                <Image src={SocialIcon} alt="social icon" />
              </Link>
            </span>
          </div>

          <span className="flex gap-1.5 items-center w-max mx-auto -mt-2">
            Web In Nigeria
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_536_12857)">
                <path
                  d="M1.77778 2.22266C1.30628 2.22266 0.854097 2.40996 0.520699 2.74336C0.187301 3.07675 0 3.52894 0 4.00043L0 12.0004C0 12.4719 0.187301 12.9241 0.520699 13.2575C0.854097 13.5909 1.30628 13.7782 1.77778 13.7782H5.33333V2.22266H1.77778Z"
                  fill="#009A49"
                />
                <path
                  d="M5.33334 2.22266H10.6667V13.7782H5.33334V2.22266Z"
                  fill="#EEEEEE"
                />
                <path
                  d="M14.2222 2.22266H10.6667V13.7782H14.2222C14.6937 13.7782 15.1459 13.5909 15.4793 13.2575C15.8127 12.9241 16 12.4719 16 12.0004V4.00043C16 3.52894 15.8127 3.07675 15.4793 2.74336C15.1459 2.40996 14.6937 2.22266 14.2222 2.22266Z"
                  fill="#009A49"
                />
              </g>
              <defs>
                <clipPath id="clip0_536_12857">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
