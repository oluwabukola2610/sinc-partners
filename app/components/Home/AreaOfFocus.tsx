const AreaOfFocus = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[64px]">
      <span className="max-w-[628px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium">
          Our Area of Focus
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </span>

      <div className="lg:flex w-full xl:w-max mx-auto">
        <span className="bg-[#303030] p-[20px] min-h-[160px] lg:max-w-[240px] flex flex-col gap-8 justify-between text-white text-[20px]">
          <p>01</p>
          <p>Business Support & Incubation</p>
        </span>
        <span className="bg-[#F47733] p-[20px] min-h-[160px] lg:max-w-[240px] flex flex-col gap-8 justify-between text-white text-[20px]">
          <p>02</p>
          <p>On-Demand & As-A-Service</p>
        </span>
        <span className="bg-[#FF78BF] p-[20px] min-h-[160px] lg:max-w-[240px] flex flex-col gap-8 justify-between text-white text-[20px]">
          <p>03</p>
          <p>Marketplace & Crowdsourcing</p>
        </span>
        <span className="bg-[#20888F] p-[20px] min-h-[160px] lg:max-w-[240px] flex flex-col gap-8 justify-between text-white text-[20px]">
          <p>04</p>
          <p>Aggregation & Shared Economy</p>
        </span>
        <span className="bg-[#FF78BF] p-[20px] min-h-[160px] lg:max-w-[240px] flex flex-col gap-8 justify-between text-white text-[20px]">
          <p>05</p>
          <p>Decentralized Economy & Digital Assets</p>
        </span>
      </div>
    </section>
  );
};

export default AreaOfFocus;
