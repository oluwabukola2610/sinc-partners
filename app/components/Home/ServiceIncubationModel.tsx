import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ServiceIncubationModel = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[934px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium">
          Our Service Incubation Model
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </span>

      <div className="flex flex-col gap-[44px]">
        <span className="flex flex-col gap-[12px]">
          <p className="text-[#212121] text-[32px] font-medium">Hypothesis</p>
          <p className="text-[17px] text-[#4E4E4E]">
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
        </span>

        <div className="lg:flex gap-10 justify-between space-y-10 lg:space-y-0 w-full">
          <span className="bg-white p-[20px] flex flex-col gap-[16px] rounded-[12px] flex-1">
            <svg
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              className="size-[40px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 0L35.3205 30H0.679491L18 0Z" fill="#FF78BF" />
            </svg>

            <p className="text-[#4E4E4E] text-[17px]">
              Most early-stage companies and pre-product startups cannot afford
              professional services especially those who don’t have family and
              friends’ network that can support
            </p>
          </span>
          <span className="bg-white p-[20px] flex flex-col gap-[16px] rounded-[12px] flex-1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#20888F" />
            </svg>

            <p className="text-[#4E4E4E] text-[17px]">
              If startups can seed 5-10% in equity to incubators for $20k to
              $200k funding most times, they will be willing to seed 10% equity
              for a $25k service investment
            </p>
          </span>
          <span className="bg-white p-[20px] flex flex-col gap-[16px] rounded-[12px] flex-1">
            <svg
              width="40"
              height="37"
              viewBox="0 0 40 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0L39.0211 13.8197L31.7557 36.1803H8.2443L0.97887 13.8197L20 0Z"
                fill="#FF88C6"
              />
            </svg>

            <p className="text-[#4E4E4E] text-[17px]">
              Young professionals who don’t have a lot of money to invest nor an
              accredited investors will have opportunities to take equity at the
              early stage of their career, usually been the first to invest and
              almost guaranteed of return
            </p>
          </span>
        </div>

        <span className="flex flex-col gap-[12px]">
          <p className="text-[#212121] text-[32px] font-medium">Case Study</p>
          <p className="text-[17px] text-[#4E4E4E]">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </span>

        <span className="flex md:flex-row flex-col gap-4">
          <button
            type="button"
            className="active:scale-95 duration-150 px-[32px] py-[12px] border border-[#A4A4A4] rounded-full bg-white text-[#212121]"
          >
            Service Incubator Equity
          </button>
          <button
            type="button"
            className="active:scale-95 duration-150 px-[32px] py-[12px] border border-[#A4A4A4] rounded-full bg-white text-[#212121]"
          >
            SEEQ Maths Equation
          </button>
          <button
            type="button"
            className="active:scale-95 duration-150 px-[32px] py-[12px] border border-[#A4A4A4] rounded-full bg-white text-[#212121]"
          >
            Value of my Equity Over Time
          </button>
        </span>

        <Link
          href=""
          className="flex gap-2 items-center text-black w-max mx-auto"
        >
          <span className="underline">Become A Service Incubator</span>
          <FiArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
};

export default ServiceIncubationModel;
