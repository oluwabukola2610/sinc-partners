const ConceptInnovations = () => {
  return (
    <section className="mx-auto max-w-[1480px] px-4 md:px-8 pb-10 lg:pb-16 flex flex-col gap-[64px]">
      <span className="max-w-[934px] mx-auto text-center flex flex-col gap-[24px]">
        <h2 className="text-[#212121] text-[36px] lg:text-[56px] font-medium">
          Our Concept Innovations
        </h2>
        <p className="text-[#4E4E4E] text-[17px]">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
      </span>

      <div className="lg:flex gap-10 justify-between space-y-10 md:space-y-0 w-full">
        <span className="bg-white px-[20px] py-[16px] flex flex-col gap-[32px] rounded-[12px] text-center">
          <p className="text-[#212121] text-[22px] font-medium">
            Service Incubator
          </p>
          <p className="text-[#4E4E4E] text-base">
            A service-for-shares model of incubating pre-product startups and
            early-stage companies by building their early stage product and MVP
          </p>
        </span>
        <span className="bg-white px-[20px] py-[16px] flex flex-col gap-[32px] rounded-[12px] text-center">
          <p className="text-[#212121] text-[22px] font-medium">Virtualting</p>
          <p className="text-[#4E4E4E] text-base">
            A resource share model that allows companies share the time of
            resources (employees, consultants, technical advisers or
            influencers) while also splitting the service cost of the resource
          </p>
        </span>
        <span className="bg-white px-[20px] py-[16px] flex flex-col gap-[32px] rounded-[12px] text-center">
          <p className="text-[#212121] text-[22px] font-medium">Diiming</p>
          <p className="text-[#4E4E4E] text-base">
            A progressive investment model that allows you to put aside income
            (disposable or non-disposable) as investment over a period towards
            an investment or spend of your choice 
          </p>
        </span>
      </div>
    </section>
  );
};

export default ConceptInnovations;
