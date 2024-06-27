import Link from "next/link";
import Image from "next/image";

import Featured1 from "@/public/assets/images/featured-1.png";
import News1 from "@/public/assets/images/news-1.png";

const Featured = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[104px]">
      <div className="flex flex-col gap-[44px]">
        <span className="max-w-[934px] mx-auto text-center">
          <h2 className="text-[#212121] text-[18px] lg:text-[24px] font-semibold">
            As Featured In
          </h2>
        </span>

        <div className="w-full flex justify-center">
          <div className="lg:flex lg:max-w-[894px]">
            <Image src={Featured1} alt="video" className="w-full" />

            <div className="bg-white shadow-md lg:shadow-none rounded-b-lg lg:rounded-none px-[40px] py-[20px] lg:min-w-[272px] max-w-[622px] flex flex-col gap-6 justify-between">
              <Image src={News1} alt="resources" className="" />

              <span className="flex flex-col gap-[8px]">
                <p className="text-[#212121] font-medium">
                  SINC Partners invests over 200 million naira in 5 startups
                </p>
                <p className="text-[#4E4E4E] text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
              </span>

              <span className="flex flex-col gap-[10px] text-[#4E4E4E]">
                <p className="text-[13px]">REPORTED BY:</p>
                <p className="text-[15px]">Rema Viel</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1007px] mx-auto text-center flex flex-col gap-[40px]">
        <h2 className="text-[#212121] text-[32px] sm:text-[40px] lg:text-[80px] font-medium lg:leading-[104px]">
          Let&apos;s build companies that help everyone succeed
        </h2>

        <div className="flex flex-col sm:flex-row gap-[12px] w-max mx-auto">
          <Link
            href=""
            className="text-[#212121] font-semibold border border-[#212121] px-[32px] py-[10px] rounded-full active:scale-95 duration-150"
          >
            SINC With Us
          </Link>
          <Link
            href=""
            className="text-white bg-[#303030] font-semibold border border-[#212121] px-[32px] py-[10px] rounded-full active:scale-95 duration-150"
          >
            Apply to SIP 1.0
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
