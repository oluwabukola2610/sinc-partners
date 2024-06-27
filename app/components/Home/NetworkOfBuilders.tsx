import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const NetworkOfBuilders = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 py-10 lg:py-16 flex flex-col gap-16">
      <div className="max-w-[833px] mx-auto rounded-[32px] py-[20px] px-[32px] bg-white text-center flex flex-col gap-[25px] text-[#212121]">
        <p className="text-[20px]">
          &quot;Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks&quot;
        </p>
        <span className="space-y-[8px]">
          <p className="text-base font-semibold">Daniel Izeghs Oratokhai</p>
          <p className="text-base text-[#4E4E4E]">
            Managing Partner at SINC Partners Ltd
          </p>
        </span>
      </div>

      <div className="flex flex-col gap-[32px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium text-center max-w-[833px] mx-auto">
          Network of builders helping startup scale
        </h2>

        <div className="md:flex gap-[32px] space-y-[32px] md:space-y-0 max-w-[1088px] mx-auto">
          <div className="bg-white p-[24px] flex flex-col gap-[20px] justify-between rounded-[12px]">
            <p className="text-black font-medium text-[24px]">
              Work with Service Incubators to expedite your time-to-market
            </p>
            <span>
              <p className="text-[#4E4E4E] text-[17px]">
                Collaborate with our meticulously chosen service partners, each
                with a vested interest, ensuring a shared commitment to success
                in the game of venture building.
              </p>
              <p className="text-[#4E4E4E] font-semibold text-[17px]">
                For 7.5% equity, you get a product manager, product designer,
                frontend engineer, software engineer and growth marketer to
                build the MVP of your app or web application and validate it.
              </p>
            </span>

            <Link
              href=""
              className="flex gap-2 items-center text-black w-max justify-end"
            >
              <span className="underline">Learn More</span>
              <FiArrowRight className="size-5" />
            </Link>
          </div>

          <div className="bg-white p-[24px] flex flex-col gap-[20px] justify-between rounded-[12px]">
            <p className="text-black font-medium text-[24px]">
              Access funding after your mvp is validated
            </p>
            <span>
              <p className="text-[#4E4E4E] text-[17px]">
                Startups that have built and validated their product can take
                advantage of the financial resources of the SINC Investors
                Network, elevating their potential for success in the venture
                capital landscape.
              </p>
              <p className="text-[#4E4E4E] font-semibold text-[17px]">
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months
              </p>
            </span>
            <Link href="" className="flex gap-2 items-center text-black w-max">
              <span className="underline">Learn More</span>
              <FiArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkOfBuilders;
