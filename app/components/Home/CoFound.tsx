import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CoFound = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[934px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium">
          Co-found With Us
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
      </span>

      <div className="flex flex-col gap-[40px]">
        <div className="lg:flex gap-10 justify-between space-y-10 lg:space-y-0 w-full">
          <span className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <p className="size-[40px] bg-[#303030] rounded-full text-white flex items-center justify-center text-[20px] font-semibold">
              1
            </p>

            <span className="flex flex-col gap-[16px]">
              <p className="text-[#212121] font-medium text-[20px]">
                We Ideate
              </p>
              <p className="text-[#4E4E4E] text-base">
                We internally generate concepts and ideas that help solve
                problems in our thesis areas, after which we proceed to develop
                a nano/micro MVP (usually having as low as 30 functions to as
                high as 100 functions) of the product that we take to the
                market.
              </p>
            </span>
          </span>

          <span className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <p className="size-[40px] bg-[#F47733] rounded-full text-white flex items-center justify-center text-[20px] font-semibold">
              2
            </p>

            <span className="flex flex-col gap-[16px]">
              <p className="text-[#212121] font-medium text-[20px]">
                You Validate
              </p>
              <p className="text-[#4E4E4E] text-base">
                You join our 3 months inResidence program as a business expert
                to run the operations or as a technical expert to further the
                development and validate the idea with an average monthly
                revenue of $1k or 10,000 users and/or an MVP of at least 150
                functions
              </p>
            </span>
          </span>

          <span className="bg-white p-[20px] flex flex-col gap-[24px] rounded-[12px] flex-1">
            <p className="size-[40px] bg-[#FF78BF] rounded-full text-white flex items-center justify-center text-[20px] font-semibold">
              3
            </p>

            <span className="flex flex-col gap-[16px]">
              <p className="text-[#212121] font-medium text-[20px]">
                You Co-own
              </p>
              <p className="text-[#4E4E4E] text-base">
                After successful validation and demo day at the end of the EIR
                program, we move those with perfect fit to become co-founders of
                the product they validated as CEO & CTO, each owning
                20% of the venture.
              </p>
            </span>
          </span>
        </div>

        <Link
          href=""
          className="flex gap-2 items-center text-black w-max mx-auto"
        >
          <span className="underline">Build your dream</span>
          <FiArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
};

export default CoFound;
