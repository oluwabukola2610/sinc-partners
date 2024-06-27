import Link from "next/link";

const InvestorsNetwork = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[44px]">
      <span className="max-w-[934px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium leading-[67px]">
          SINC Investors Network
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. Our portfolio companies
          are valued at $50k at start, with these low valuation, you are
          guaranteed at least 2x-5x, usually been the first to invest.
          <br />
          <b>Disclaimer:</b> These deal flows is a statement of our projections
          and may differ from stage to stage and from venture to venture and the
          guarantee is for deal 1, usually the first to invest
        </p>
      </span>

      <div className="flex flex-col gap-[32px]">
        <p className="text-base lg:text-[20px] text-[#4E4E4E]">
          <b>Micro Angel Investors & Service incubators</b> (Invest from $500 &
          above)
        </p>

        {/* Deals 1-4 */}
        <div className="border-y-2 border-[#A4A4A4] flex lg:flex-row flex-col divide-y-2 lg:divide-y-0 divide-x-0 lg:divide-x-2 divide-[#A4A4A4]">
          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 1</p>

            <p className="leading-[23.4px]">
              ✓ Idea Stage: <b>$5k for 5% Equity</b> <br />✓ Expected Revenue at
              This Stage: <b>$0/mth</b> <br />✓ Duration of Raise: <b>1mth</b>{" "}
              <br />✓ Who Can Invest:{" "}
              <b>People with Domain Expertise and Advisors</b>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 2</p>
            <p className="leading-[23.4px]">
              ✓ Build Stage: <b>$25k worth of service for 10% Equity</b> <br />✓
              Expected Revenue at This Stage: <b>$100+/mth</b> <br />
              ✓ Duration of Raise: 1-3mths <br />✓ Who Can Invest:{" "}
              <b>Developers, Engineers, Growth Marketers</b>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 3</p>
            <p className="leading-[23.4px]">
              ✓ Validation Stage: <b>$50k for 5% Equity</b> <br />✓ Expected
              Revenue at This Stage: <b>$1k+/mth</b> <br />✓ Duration of Raise:{" "}
              <b>3-6mths</b> <br />✓ Who Can Invest: <b>Everyone</b>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 4</p>
            <p className="leading-[23.4px]">
              ✓ Traction Stage: <b>$125k worth of service for 5% Equity</b>{" "}
              <br />✓ Expected Revenue at This Stage: <b>$5k+/mth</b> <br />
              ✓ Duration of Raise: 6-12mths <br />✓ Who Can Invest:{" "}
              <b>Media, Influencers, Celebrity, Platform Owners</b>
            </p>
          </div>
        </div>

        <p className="text-base lg:text-[20px] text-[#4E4E4E]">
          <b>Angel Investors & Venture Capital</b> (Invest from $50k and above)
        </p>

        {/* Deals 5+ */}
        <div className="border-y-2 border-[#A4A4A4] flex lg:flex-row flex-col divide-y-2 lg:divide-y-0 divide-x-0 lg:divide-x-2 divide-[#A4A4A4]">
          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 5</p>
            <p className="leading-[23.4px]">
              ✓ Pre-seed Stage: <b>$1.5M for 10% Equity </b> <br />✓ Expected
              Revenue at This Stage: <b>$50k+/mth</b> <br />✓ Duration of Raise:{" "}
              <b>6-18mths</b> <br />✓ Who Can Invest:{" "}
              <b>Angel Investors, VCs, PE, Institutions</b>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 6</p>
            <p className="leading-[23.4px]">
              ✓ Seed Stage: <b>$7.5M for 20% Equity</b> <br />✓ Expected Revenue
              at This Stage: <b>$250k+/mth</b> <br />✓ Duration of Raise:{" "}
              <b>12-24mths</b> <br />✓ Who Can Invest:{" "}
              <b>VCs, PE, Institutions</b>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] p-[20px] text-[#4E4E4E] flex-1">
            <p className="text-black font-medium text-[18px]">Deal 7</p>
            <p className="leading-[23.4px]">
              ✓ IPO Stage: <b>$1.5B for 20% Equity</b> <br />✓ Expected Revenue
              at This Stage: <b>$1M+/mth</b> <br />✓ Duration of Raise:{" "}
              <b>18-36mths</b> <br />✓ Who Can Invest: 
              <b>The Public</b>
            </p>
          </div>

          <div className="p-[20px] flex-1">
            <div className="flex flex-col gap-[20px] justify-between py-[18px] px-[20px] text-white bg-[#101010] h-full">
              <p className="font-semibold text-[17px]">
                Work with Service Incubators (SINC) to expedite your
                time to market
              </p>
              <Link
                href=""
                className="bg-[#303030] px-[32px] py-[15px] rounded-full text-base font-semibold w-max"
              >
                Join SINC Network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsNetwork;
