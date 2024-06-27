import Link from "next/link";
import Image from "next/image";

import Video1 from "@/public/assets/images/video-1.png";
import Video2 from "@/public/assets/images/video-2.png";
import Video3 from "@/public/assets/images/video-3.png";
import Resource1 from "@/public/assets/images/resource-1.png";
import Resource2 from "@/public/assets/images/resource-2.png";
import Resource3 from "@/public/assets/images/resource-3.png";

const BlogsAndResources = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[934px] mx-auto text-center">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium leading-[67px]">
          Blogs & Resources
        </h2>
      </span>

      <div className="flex flex-col gap-[44px]">
        <div className="lg:flex gap-[32px] justify-around space-y-[32px] lg:space-y-0 w-fit mx-auto lg:w-full">
          {/* justify-between */}
          <div className="flex flex-col gap-[48px] max-w-[378px] flex-1">
            <Image src={Video1} alt="video" />

            <span className="flex gap-6 justify-between">
              <span className="flex flex-col gap-[8px] text-[#212121] text-[14px]">
                <p className="font-semibold">Top Ten Most Powerful Startup</p>
                <p className="">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </span>
              <Image src={Resource1} alt="resources" className="max-w-[85px]" />
            </span>
          </div>

          <div className="flex flex-col gap-[48px] max-w-[378px] flex-1">
            <Image src={Video2} alt="video" />

            <span className="flex gap-6 justify-between">
              <span className="flex flex-col gap-[8px] text-[#212121] text-[14px]">
                <p className="font-semibold">Top Ten Most Powerful Startup</p>
                <p className="">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </span>
              <Image src={Resource2} alt="resources" className="max-w-[85px]" />
            </span>
          </div>

          <div className="flex flex-col gap-[48px] max-w-[378px] flex-1">
            <Image src={Video3} alt="video" />

            <span className="flex gap-6 justify-between">
              <span className="flex flex-col gap-[8px] text-[#212121] text-[14px]">
                <p className="font-semibold">Top Ten Most Powerful Startup</p>
                <p className="">
                  Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                  Top Ten Most Powerful Startup
                </p>
              </span>
              <Image src={Resource3} alt="resources" className="max-w-[85px]" />
            </span>
          </div>
        </div>

        <Link href="" className="text-black w-max mx-auto">
          <span className="underline">See More Blogs & Resources</span>
        </Link>
      </div>
    </section>
  );
};

export default BlogsAndResources;
