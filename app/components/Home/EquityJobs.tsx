import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import Company1 from "@/public/assets/images/company-logo-1.png";
import Company2 from "@/public/assets/images/company-logo-2.png";
import Company3 from "@/public/assets/images/company-logo-3.png";
import Company4 from "@/public/assets/images/company-logo-4.png";

const EquityJobs = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[934px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium leading-[67px]">
          Equity Jobs
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </span>

      <div className="flex flex-col gap-[44px]">
        {/* <div className="lg:flex gap-[29px] justify-between space-y-10 lg:space-y-0 w-full"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[29px] w-full">
          {/* Company1 */}
          <div className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <span className="flex flex-col gap-[12px]">
              <Image src={Company1} className="" alt="company logo" />

              <p className="text-[#212121] text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
            </span>

            <span className="flex flex-col gap-[20px]">
              <p className="text-[#212121] text-[18px] font-semibold">
                Chief Executive Officer
              </p>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>LOCATION</p>
                  <p>INDUSTRY</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>Abuja, Nigeria</p>
                  <p>On-demand print</p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>EQUITY</p>
                  <p>STIPEND</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>1.2%</p>
                  <p>NGN 200,000/mth </p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>DEADLINE</p>
                  <p>ROLE TYPE</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>24th, January 2024</p>
                  <p>Full-time</p>
                </span>
              </span>
            </span>

            <Link
              href=""
              className="bg-[#303030] hover:bg-[#212121] rounded-full text-white font-semibold active:scale-95 duration-150 px-[64px] py-[14px] w-max"
            >
              View Details
            </Link>
          </div>

          {/* Company2 */}
          <div className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <span className="flex flex-col gap-[12px]">
              <Image src={Company2} className="" alt="company logo" />

              <p className="text-[#212121] text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
            </span>

            <span className="flex flex-col gap-[20px]">
              <p className="text-[#212121] text-[18px] font-semibold">
                UX Strategist
              </p>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>LOCATION</p>
                  <p>INDUSTRY</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>Abuja, Nigeria</p>
                  <p>E-commerce</p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>EQUITY</p>
                  <p>STIPEND</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>1.2%</p>
                  <p>NGN 200,000/mth </p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>DEADLINE</p>
                  <p>ROLE TYPE</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>24th, January 2024</p>
                  <p>Full-time</p>
                </span>
              </span>
            </span>

            <Link
              href=""
              className="bg-[#303030] hover:bg-[#212121] rounded-full text-white font-semibold active:scale-95 duration-150 px-[64px] py-[14px] w-max"
            >
              View Details
            </Link>
          </div>

          {/* Company3 */}
          <div className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <span className="flex flex-col gap-[12px]">
              <Image src={Company3} className="" alt="company logo" />

              <p className="text-[#212121] text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
            </span>

            <span className="flex flex-col gap-[20px]">
              <p className="text-[#212121] text-[18px] font-semibold">
                CTO & Head of innovations
              </p>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>LOCATION</p>
                  <p>INDUSTRY</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>Abuja, Nigeria</p>
                  <p>Fintech</p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>EQUITY</p>
                  <p>STIPEND</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>1.2%</p>
                  <p>NGN 200,000/mth </p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>DEADLINE</p>
                  <p>ROLE TYPE</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>24th, January 2024</p>
                  <p>Full-time</p>
                </span>
              </span>
            </span>

            <Link
              href=""
              className="bg-[#303030] hover:bg-[#212121] rounded-full text-white font-semibold active:scale-95 duration-150 px-[64px] py-[14px] w-max"
            >
              View Details
            </Link>
          </div>

          {/* Company4 */}
          <div className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <span className="flex flex-col gap-[12px]">
              <Image src={Company4} className="" alt="company logo" />

              <p className="text-[#212121] text-[14px]">
                This company is a SAAS Startup that builds AI copy generator...
              </p>
            </span>

            <span className="flex flex-col gap-[20px]">
              <p className="text-[#212121] text-[18px] font-semibold">
                Backend Developer
              </p>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>LOCATION</p>
                  <p>INDUSTRY</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>Abuja, Nigeria</p>
                  <p>Transportation</p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>EQUITY</p>
                  <p>STIPEND</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>1.2%</p>
                  <p>NGN 200,000/mth </p>
                </span>
              </span>
              <span className="flex flex-col gap-[8px]">
                <span className="flex gap-4 justify-between text-[#8E8E8E] text-[14px]">
                  <p>DEADLINE</p>
                  <p>ROLE TYPE</p>
                </span>
                <span className="flex gap-4 justify-between text-[#212121] text-[14px]">
                  <p>24th, January 2024</p>
                  <p>Full-time</p>
                </span>
              </span>
            </span>

            <Link
              href=""
              className="bg-[#303030] hover:bg-[#212121] rounded-full text-white font-semibold active:scale-95 duration-150 px-[64px] py-[14px] w-max"
            >
              View Details
            </Link>
          </div>
        </div>

        <Link
          href=""
          className="flex gap-2 items-center text-black w-max mx-auto"
        >
          <span className="underline">See More Equity Jobs</span>
          <FiArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
};

export default EquityJobs;
